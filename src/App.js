import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import "./App.css";
import Services from "./Components/Services/Services";
import { Experience } from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext, useEffect } from "react";
import StudyTime from "./Components/StudyTime/StudyTime";

// Firebase imports
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "./firebase"; // <-- your firebase.js file

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    // ✅ Test Firebase Authentication
    const auth = getAuth(app);
    signInAnonymously(auth)
      .then(() => console.log("Firebase Auth connected successfully!"))
      .catch((err) => console.error("Auth error:", err));

    // ✅ Test Firestore
    const db = getFirestore(app);
    async function testFirestore() {
      const testRef = doc(db, "testCollection", "testDoc");
      await setDoc(testRef, { connected: true, timestamp: Date.now() });
      const snapshot = await getDoc(testRef);
      console.log("Firestore test data:", snapshot.data());
    }
    testFirestore();
  }, []);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : ""
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <StudyTime />
      <Contact />
      <Footer />
    </div>
  );
}



export default App;
