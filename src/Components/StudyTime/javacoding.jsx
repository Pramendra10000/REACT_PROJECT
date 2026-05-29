import React, { useState } from "react";
import { useHistory } from "react-router-dom";   // ✅ import history
import "./javacoding.css";
import { data } from "./qaData";

const JavaCoding = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();   // ✅ create history object

    const allQuestions = Object.entries(data).flatMap(([section, questions]) =>
        questions.map(q => ({ ...q, section }))
    );

    const filteredQuestions = allQuestions.filter(q => {
        const matchTab = activeTab === "All" || q.section === activeTab;
        const matchQuery = q.q.toLowerCase().includes(searchQuery.toLowerCase());
        return matchTab && matchQuery;
    });

    return (
        <div className="java-page">
            <header>
                <div className="header-top">
                    <div className="logo">
                        Java<span>Prep</span> 🔥
                    </div>
                    <div className="stats">
                        <span>Total: <strong>{allQuestions.length}</strong> Q&amp;As</span>
                        <span>Shown: <strong>{filteredQuestions.length}</strong></span>

                        {/* ✅ Back button */}
                        <button
                            className="tab active"
                            onClick={() => history.push("/")}
                        >
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
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className="tabs">
                        {["All", ...Object.keys(data)].map(cat => (
                            <button
                                key={cat}
                                className={`tab ${activeTab === cat ? "active" : ""}`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat === "All" ? "All" : cat.split(" ")[0]}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        style={{
                            width: `${(filteredQuestions.length / allQuestions.length) * 100}%`
                        }}
                    ></div>
                </div>
            </header>

            <main>
                {Object.entries(data).map(([section, questions]) => {
                    const visibleQs = questions.filter(q =>
                        filteredQuestions.some(f => f.q === q.q)
                    );
                    if (visibleQs.length === 0) return null;
                    return (
                        <div key={section} className="section">
                            <div className="section-title">{section}</div>
                            {visibleQs.map((item, idx) => (
                                <QACard key={idx} q={item.q} a={item.a} />
                            ))}
                        </div>
                    );
                })}
            </main>
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
                <span className="q-arrow">▾</span>
            </div>
            {open && (
                <div className="qa-answer" dangerouslySetInnerHTML={{ __html: a }} />
            )}
        </div>
    );
};

export default JavaCoding;
