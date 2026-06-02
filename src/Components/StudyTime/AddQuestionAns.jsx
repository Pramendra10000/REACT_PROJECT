import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query, getFirestore,
  where
} from "firebase/firestore";
import { app } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddQuestionAns.css"; // ✅ import CSS

import { data } from "../StudyTime/qaData";




const db = getFirestore(app);

const AddQuestionAns = () => {
  const history = useHistory();
  const [entries, setEntries] = useState([{ topic: "", question: "", answer: "" }]);

  // Add new empty entry
  const addEntry = () => {
    setEntries([...entries, { topic: "", question: "", answer: "" }]);
  };

  // Remove entry by index
  const removeEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  // Update entry
  const updateEntry = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const handleImportJSON = () => {
    const formatted = Object.entries(data).flatMap(([topic, arr]) =>
      arr.map(item => ({
        topic,
        question: item.q,
        answer: item.a
      }))
    );

    setEntries(formatted);

    toast.success("✅ Data imported successfully!");
  };

  // Submit all entries to Firestore
  const handleSubmit = async () => {
    try {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (!entry.topic || !entry.question || !entry.answer) continue;

        await addDoc(collection(db, "QuestionAnsMaster"), {
          srNo: i + 1,
          topic: entry.topic,
          question: entry.question,
          answer: entry.answer
        });
      }
      toast.success("Questions saved successfully!");
      setEntries([{ topic: "", question: "", answer: "" }]); // reset
    } catch (err) {
      console.error(err);
      toast.error("Error saving questions");
    }
  };

  //For update records.

  const handleUpdate = async () => {
    try {
      for (let entry of entries) {
        if (!entry.topic || !entry.question || !entry.answer) continue;

        const q = query(
          collection(db, "QuestionAnsMaster"),
          where("topic", "==", entry.topic.trim()),
          where("question", "==", entry.question.trim())
        );

        const snapshot = await getDocs(q);

        snapshot.forEach(async (document) => {
          await updateDoc(doc(db, "QuestionAnsMaster", document.id), {
            answer: entry.answer
          });
        });
      }

      toast.success("✅ Updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("❌ Update failed");
    }
  };


  //For delete records

  const handleDelete = async () => {
    try {
      for (let entry of entries) {
        if (!entry.topic || !entry.question) continue;

        const q = query(
          collection(db, "QuestionAnsMaster"),
          where("topic", "==", entry.topic),
          where("question", "==", entry.question)
        );

        const snapshot = await getDocs(q);

        snapshot.forEach(async (document) => {
          await deleteDoc(doc(db, "QuestionAnsMaster", document.id));
        });
      }

      toast.success("✅ Deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("❌ Delete failed");
    }
  };



  return (
    <div className="addqa-page">
      <header>
        <div className="header-top">
          <div className="logo">Add<span>Q&A</span> 📘</div>
          <div className="stats">
            <button className="btn" onClick={() => history.push("/java")}>Back</button>
            <button className="btn btn-danger" onClick={() => history.push("/java")}>Logout</button>
          </div>
        </div>
      </header>

      <main>
        {entries.map((entry, idx) => (
          <div key={idx} className="addqa-card">
            {/* Close button */}
            <button
              className="close-btn"
              onClick={() => removeEntry(idx)}
              title="Remove this entry"
            >
              ✖
            </button>

            <input
              type="text"
              placeholder="Topic"
              value={entry.topic}
              onChange={(e) => updateEntry(idx, "topic", e.target.value)}
            />
            <input
              type="text"
              placeholder="Question"
              value={entry.question}
              onChange={(e) => updateEntry(idx, "question", e.target.value)}
            />
            <textarea
              placeholder="Answer"
              value={entry.answer}
              onChange={(e) => updateEntry(idx, "answer", e.target.value)}
            />
          </div>
        ))}

        <div className="addqa-actions">

          <button className="btn" onClick={addEntry}>Add</button>

          <button className="btn" onClick={handleImportJSON}>
            Import JSON
          </button>

          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>

          {/* ✅ NEW BUTTONS */}
          <button className="btn btn-warning" onClick={handleUpdate}>
            Update
          </button>

          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>

        </div>

      </main>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddQuestionAns;
