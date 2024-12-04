import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import axios from 'axios';
import base_url from './../API/Productapi';
import { ToastContainer, toast } from 'react-toastify';

const Addproducts = () => {
    useEffect(() => {
        document.title = "Add Product";
    }, []);  // For using first time need to use []

    // Initialize the state with an empty object, but ensure it has keys for id, title, and description
    const [product, setproduct] = useState({
        id: '',
        title: '',
        description: ''
    });

    // Function for handle form submission
    const handleform = (e) => {
        console.log(product);
        addproducttoserver(product);
        e.preventDefault();
    };

    // Function to clear the form
    const handleClear = () => {
        setproduct({
            id: '',
            title: '',
            description: ''
        });
    };

    // Function to add the data to the server
    const addproducttoserver = (product) => {
        axios.post(`${base_url}/Addproducts`, product, {
            headers: {
                'Content-Type': 'application/json',  // Ensure content-type is set to JSON
            }
        }).then(
            (response) => {
                console.log(response);
                toast.success("Product has been added successfully", { position: 'bottom-center' });
            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong.", { position: 'bottom-center' });
            }
        );
    };

    return (
        <Fragment>
            <ToastContainer />
            <h1 className="text-center my-3">Fill Product Details</h1>
            <Form onSubmit={handleform}>
                <FormGroup>
                    <label for="userId">Product Id</label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        value={product.id}  // Binding state to input value
                        onChange={(e) => {
                            setproduct({ ...product, id: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="title">Product Title</label>
                    <Input
                        type="text"
                        placeholder="Enter title here"
                        name="title"
                        id="title"
                        value={product.title}  // Binding state to input value
                        onChange={(e) => {
                            setproduct({ ...product, title: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="description">Product Description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter description here"
                        name="description"
                        id="desc"
                        style={{ height: 150 }}
                        value={product.description}  // Binding state to input value
                        onChange={(e) => {
                            setproduct({ ...product, description: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container>
                    <Button color="success" type="submit" className="me-5">Add Product</Button>
                    <Button color="warning" type="button" onClick={handleClear}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default Addproducts;
