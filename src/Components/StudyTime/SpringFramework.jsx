import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./StudyPage.css";

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

const SpringFramework = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [openCardKey, setOpenCardKey] = useState(null);

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

    // Load questions from Firestore
    useEffect(() => {
        const unsub = onSnapshot(collection(db, "SpringQAMaster"), (snap) => {
            const list = snap.docs.map((doc) => doc.data());
            setQuestions(list);
        });
        return () => unsub();
    }, []);

    const filteredQuestions = questions.filter((q) => {
        const matchTab = activeTab === "All" || q.topic === activeTab;
        const matchQuery = q.question.toLowerCase().includes(searchQuery.toLowerCase());
        return matchTab && matchQuery;
    });

    const topics = ["All", ...new Set(questions.map((q) => q.topic))];

    // Signup
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const checks = [
                query(collection(db, "SpringUsers"), where("username", "==", formData.username)),
                query(collection(db, "SpringUsers"), where("email", "==", formData.email)),
                query(collection(db, "SpringUsers"), where("mobile", "==", formData.mobile)),
                query(collection(db, "SpringUsers"), where("linkedin", "==", formData.linkedin))
            ];
            const results = await Promise.all(checks.map((q) => getDocs(q)));
            if (results.some((snap) => !snap.empty)) {
                toast.error("User details already present!");
                return;
            }
            await setDoc(doc(collection(db, "SpringUsers")), formData);
            toast.success("Signup successful!");
            setShowModal(false);
        } catch (err) {
            console.error(err);
            toast.error("Error during signup");
        }
    };

    // Login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const q = query(
                collection(db, "SpringUsers"),
                where("username", "==", formData.username),
                where("password", "==", formData.password)
            );
            const snap = await getDocs(q);
            if (snap.empty) {
                toast.error("User not found, please sign up!");
            } else {
                toast.success("Login successful!");
                setShowModal(false);
                history.push("/add/spring");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error during login");
        }
    };

    return (
        <div className="spring-page">
            <header>
                <div className="header-top">
                    <div className="logo">
                        Spring<span>Framework</span> 🌱
                    </div>
                    <div className="stats">
                        <button className="tab" onClick={() => setShowModal(true)}>
                            ADD SPRING QUESTIONS
                        </button>
                        <span>
                            Total: <strong>{questions.length}</strong> Q&As
                        </span>
                        <span>
                            Shown: <strong>{filteredQuestions.length}</strong>
                        </span>
                        <button className="tab" onClick={() => history.push("/")}>
                            Back
                        </button>
                    </div>
                </div>

                {/* Search bar + tabs */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search Spring questions..."
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
                            {visibleQs.map((item, idx) => {
                                const cardKey = `${section}-${idx}`;
                                return (
                                    <QACard
                                        key={cardKey}
                                        cardKey={cardKey}
                                        q={item.question}
                                        a={item.answer}
                                        isOpen={openCardKey === cardKey}
                                        onOpen={() => setOpenCardKey(cardKey)}
                                        onClose={() => setOpenCardKey(null)}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </main>

            {/* Modal */}
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
                            <form className="modal-form"
                                onSubmit={handleLogin}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            username: e.target.value
                                        })
                                    }
                                />
                                <div className="password-field">
                                    <input
                                        type={showPassword ? "text" :
                                            "password"}
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                password: e.target.value
                                            })
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

                                <button className="tab active"
                                    type="submit">
                                    Login
                                </button>
                            </form>
                        ) : (
                            <form className="modal-form"
                                onSubmit={handleSignup}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData, name:
                                                e.target.value
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            username: e.target.value
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Qualification"
                                    value={formData.qualification}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            qualification: e.target.value
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile No"
                                    value={formData.mobile}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            mobile: e.target.value
                                        })
                                    }
                                />
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value
                                        })
                                    }
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="LinkedIn ID"
                                    value={formData.linkedin}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            linkedin: e.target.value
                                        })
                                    }
                                />
                                <button className="tab active"
                                    type="submit">
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

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

// QACard same as before
const QACard = ({ cardKey, q, a, isOpen, onOpen, onClose }) => {
    const timerRef = useRef(null);
    useEffect(() => {
        if (isOpen) {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => onClose(), 500000);
        } else {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`qa-card ${isOpen ? "open" : ""}`}>
            <div className="qa-question" onClick={isOpen ? onClose : onOpen}>
                <span className="q-num">Q</span>
                <span className="q-text">{q}</span>
                <span className={`q-arrow ${isOpen ? "rotate" : ""}`}>▾</span>
            </div>
            {isOpen && (
                <div className="qa-answer">
                    <div className="qa-answer-scroll" dangerouslySetInnerHTML={{ __html: a }} />
                </div>
            )}
        </div>
    );
};

export default SpringFramework;
