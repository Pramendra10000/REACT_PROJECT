import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./javacoding.css";

// Firebase imports
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    query,
    where,
    getDocs,
    onSnapshot
} from "firebase/firestore";
import { app } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const db = getFirestore(app);

const JavaCoding = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [questions, setQuestions] = useState([]); // ✅ Firestore questions

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        qualification: "",
        mobile: "",
        email: "",
        password: "",
        linkedin: ""
    });

    const [showPassword, setShowPassword] = useState(false);


    const resetForm = () => {
        setFormData({
            name: "",
            username: "",
            qualification: "",
            mobile: "",
            email: "",
            password: "",
            linkedin: ""
        });
    };

    const history = useHistory();

    // ✅ Load questions from Firestore (real-time)
    useEffect(() => {
        const unsub = onSnapshot(collection(db, "QuestionAnsMaster"), (snap) => {
            const list = snap.docs.map((doc) => doc.data());
            setQuestions(list);
        });
        return () => unsub();
    }, []);

    // ✅ Filter logic
    const filteredQuestions = questions.filter((q) => {
        const matchTab = activeTab === "All" || q.topic === activeTab;
        const matchQuery = q.question.toLowerCase().includes(searchQuery.toLowerCase());
        return matchTab && matchQuery;
    });

    const topics = ["All", ...new Set(questions.map((q) => q.topic))];

    // ✅ Signup logic
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const checks = [
                query(collection(db, "UserDetails"), where("username", "==", formData.username)),
                query(collection(db, "UserDetails"), where("email", "==", formData.email)),
                query(collection(db, "UserDetails"), where("mobile", "==", formData.mobile)),
                query(collection(db, "UserDetails"), where("linkedin", "==", formData.linkedin))
            ];

            const results = await Promise.all(checks.map((q) => getDocs(q)));
            if (results.some((snap) => !snap.empty)) {
                toast.error("User details already present!");
                return;
            }

            await setDoc(doc(collection(db, "UserDetails")), formData);
            toast.success("Signup successful!");
            resetForm();
            setShowModal(false);
        } catch (err) {
            console.error(err);
            toast.error("Error during signup");
        }
    };

    // ✅ Login logic
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const q = query(
                collection(db, "UserDetails"),
                where("username", "==", formData.username),
                where("password", "==", formData.password)
            );
            const snap = await getDocs(q);
            if (snap.empty) {
                toast.error("User details not found, please sign up!");
            } else {
                toast.success("Login successful!");
                resetForm();
                setShowModal(false);
                history.push("/add_question_ans");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error during login");
        }
    };

    return (
        <div className="java-page">
            <header>
                <div className="header-top">
                    <div className="logo">
                        Java<span>Prep</span> 🔥
                    </div>
                    <div className="stats">
                        <button className="tab" onClick={() => setShowModal(true)}>
                            ADD JAVA QUESTIONS
                        </button>
                        <span>
                            Total: <strong>{questions.length}</strong> Q&amp;As
                        </span>
                        <span>
                            Shown: <strong>{filteredQuestions.length}</strong>
                        </span>
                        <button className="tab" onClick={() => history.push("/")}>
                            Back
                        </button>
                    </div>
                </div>

                {/* search bar + tabs */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="tabs">
                        {topics.map((cat) => (
                            <button
                                key={cat}
                                className={`tab ${activeTab === cat ? "active" : ""}`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        style={{
                            width: questions.length
                                ? `${(filteredQuestions.length / questions.length) * 100}%`
                                : "0%"
                        }}
                    ></div>
                </div>
            </header>

            <main>
                {topics.filter((t) => t !== "All").map((section) => {
                    const visibleQs = filteredQuestions.filter((q) => q.topic === section);
                    if (visibleQs.length === 0) return null;
                    return (
                        <div key={section} className="section">
                            <div className="section-title">{section}</div>
                            {visibleQs.map((item, idx) => (
                                <QACard key={idx} q={item.question} a={item.answer} />
                            ))}
                        </div>
                    );
                })}
            </main>

            {/* ✅ Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button
                            className="modal-close"
                            onClick={() => {
                                resetForm();
                                setShowModal(false);
                            }}
                        >
                            ✖
                        </button>

                        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

                        {isLogin ? (
                            <form className="modal-form" onSubmit={handleLogin}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={(e) =>
                                        setFormData({ ...formData, username: e.target.value })
                                    }
                                />
                                <div className="password-field">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({ ...formData, password: e.target.value })
                                        }
                                    />
                                    <span
                                        className="toggle-eye"
                                        onClick={() => setShowPassword(!showPassword)}
                                        role="button"
                                        title={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </span>
                                </div>

                                <button className="tab active" type="submit">
                                    Login
                                </button>
                            </form>
                        ) : (
                            <form className="modal-form" onSubmit={handleSignup}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={(e) =>
                                        setFormData({ ...formData, username: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Qualification"
                                    value={formData.qualification}
                                    onChange={(e) =>
                                        setFormData({ ...formData, qualification: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile No"
                                    value={formData.mobile}
                                    onChange={(e) =>
                                        setFormData({ ...formData, mobile: e.target.value })
                                    }
                                />
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="LinkedIn ID"
                                    value={formData.linkedin}
                                    onChange={(e) =>
                                        setFormData({ ...formData, linkedin: e.target.value })
                                    }
                                />
                                <button className="tab active" type="submit">
                                    Sign Up
                                </button>
                            </form>
                        )}

                        <div className="modal-switch">
                            <button className="tab" onClick={() => setIsLogin(true)}>
                                Login
                            </button>
                            <button className="tab" onClick={() => setIsLogin(false)}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast container */}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};


const QACard = ({ q, a }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`qa-card ${open ? "open" : ""}`}>
            <div className="qa-question" onClick={() => setOpen(!open)}>
                <span className="q-num">Q</span>
                <span className="q-text">{q}</span>
                <span className={`q-arrow ${open ? "rotate" : ""}`}>▾</span>
            </div>
            {open && (
                <div className="qa-answer" dangerouslySetInnerHTML={{ __html: a }} />
            )}
        </div>
    );
};

export default JavaCoding;
