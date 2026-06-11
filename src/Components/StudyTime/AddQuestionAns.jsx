import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  getFirestore,
  where
} from "firebase/firestore";
import { app } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddQuestionAns.css"; // ✅ import CSS

// Import all datasets
import { data } from "../StudyTime/Question_ans/qaData";           // Java
import { data as springdata } from "../StudyTime/Question_ans/springqaData";
import { data as reactdata } from "../StudyTime/Question_ans/reactqaData";
import { data as angulardata } from "../StudyTime/Question_ans/angularqaData";
import { data as sqldata } from "../StudyTime/Question_ans/sqlqaData";

const db = getFirestore(app);

const AddQuestionAns = () => {
  const history = useHistory();
  const { mode } = useParams(); // "java", "spring", "react", "angular", "sql"



  // Map mode → Firestore collection
  const collectionNameMap = {
    java: "QuestionAnsMaster",
    spring: "SpringQAMaster",
    react: "ReactQAMaster",
    angular: "AngularQAMaster",
    sql: "SQLQAMaster"
  };
  const collectionName = collectionNameMap[mode] || "QuestionAnsMaster";

  // Map mode → dataset
  const datasetMap = {
    java: data,
    spring: springdata,
    react: reactdata,
    angular: angulardata,
    sql: sqldata
  };
  const importData = datasetMap[mode] || data;

  const [entries, setEntries] = useState([{ topic: "", question: "", answer: "" }]);

  // Add new empty entry
  const addEntry = () => setEntries([...entries, { topic: "", question: "", answer: "" }]);

  // Remove entry
  const removeEntry = (index) => setEntries(entries.filter((_, i) => i !== index));

  // Update entry
  const updateEntry = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  // Import JSON
  const handleImportJSON = () => {
    const formatted = Object.entries(importData).flatMap(([topic, arr]) =>
      arr.map(item => ({ topic, question: item.q, answer: item.a }))
    );
    setEntries(formatted);
    toast.success(`✅ ${mode} data imported successfully!`);
  };

  // Submit
  const handleSubmit = async () => {
    try {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (!entry.topic || !entry.question || !entry.answer) continue;

        await addDoc(collection(db, collectionName), {
          srNo: i + 1,
          topic: entry.topic,
          question: entry.question,
          answer: entry.answer
        });
      }
      toast.success(`${mode} questions saved successfully!`);
      setEntries([{ topic: "", question: "", answer: "" }]);
    } catch (err) {
      console.error(err);
      toast.error(`Error saving ${mode} questions`);
    }
  };

  // Update
  const handleUpdate = async () => {
    try {
      for (let entry of entries) {
        if (!entry.topic || !entry.question || !entry.answer) continue;

        const q = query(
          collection(db, collectionName),
          where("topic", "==", entry.topic.trim()),
          where("question", "==", entry.question.trim())
        );

        const snapshot = await getDocs(q);
        snapshot.forEach(async (document) => {
          await updateDoc(doc(db, collectionName, document.id), { answer: entry.answer });
        });
      }
      toast.success(`✅ ${mode} updated successfully!`);
    } catch (err) {
      console.error(err);
      toast.error(`❌ ${mode} update failed`);
    }
  };

  // Delete
  const handleDelete = async () => {
    try {
      for (let entry of entries) {
        if (!entry.topic || !entry.question) continue;

        const q = query(
          collection(db, collectionName),
          where("topic", "==", entry.topic),
          where("question", "==", entry.question)
        );

        const snapshot = await getDocs(q);
        snapshot.forEach(async (document) => {
          await deleteDoc(doc(db, collectionName, document.id));
        });
      }
      toast.success(`✅ ${mode} deleted successfully!`);
    } catch (err) {
      console.error(err);
      toast.error(`❌ ${mode} delete failed`);
    }
  };

  return (
  <div className={`${mode}-page addqa-page`}>

      <header>
        <div className="header-top">
          <div className="logo">Add <span>{mode} Q&A</span> 📘</div>
          <div className="stats">
            <button className="btn" onClick={() => history.push(`/${mode}`)}>Back</button>
            <button className="btn btn-danger" onClick={() => history.push(`/${mode}`)}>Logout</button>
          </div>
        </div>
      </header>

      <main>
        {entries.map((entry, idx) => (
          <div key={idx} className="addqa-card">
            <button className="close-btn" onClick={() => removeEntry(idx)}>✖</button>
            <input type="text" placeholder="Topic" value={entry.topic}
              onChange={(e) => updateEntry(idx, "topic", e.target.value)} />
            <input type="text" placeholder="Question" value={entry.question}
              onChange={(e) => updateEntry(idx, "question", e.target.value)} />
            <textarea placeholder="Answer" value={entry.answer}
              onChange={(e) => updateEntry(idx, "answer", e.target.value)} />
          </div>
        ))}

        <div className="addqa-actions">
          <button className="btn" onClick={addEntry}>Add</button>
          <button className="btn" onClick={handleImportJSON}>Import JSON</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          <button className="btn btn-warning" onClick={handleUpdate}>Update</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </main>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddQuestionAns;
