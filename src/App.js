import React from "react";
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Header from "./Components/Header";
import Home from "./Components/Home";
import Product from "./Components/Products";
import Allproduct from "./Components/AllProducts";
import Addproducts from "./Components/Addproducts";
import Menu from "./Components/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of directly using Route

function App() {

  const btnhandle = () => {
    toast("Login page not found");
  };

  const btnhandle2 = () => {
    toast("Form submitted.");
  };

  const btnhandle3 = () => {
    toast.success("Submitted", {
      position: "top-left",
    });
  };

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Header />

        <Container>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes> {/* Wrap Route components inside Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/add-products" element={<Addproducts />} />
                <Route path="/view-products" element={<Allproduct />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
