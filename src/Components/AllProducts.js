import React, { useState, useEffect } from 'react';
import Product from "./Products";
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import base_url  from './../API/Productapi';
import axios from 'axios';
// const AllProduct = () => {
//     useEffect(() => {
//         alert("Testing");
//     });


    const AllProduct = () => {
        useEffect(() => {
           document.title="All Product";
        },[]);  //for using first time need to use []

        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        const getAllProductsfromServer = () => {
            setLoading(true);  // Set loading to true before making the request
            axios.get(`${base_url}/products`).then(
                (response) => {
                    console.log(response.data);
                    setProducts(response.data);
                    setLoading(false); 
                    toast.success("Products has been loaded",{position:'bottom-center'});
                      // Set loading to false after receiving the response
                },
                (error) => {
                    console.error("Error fetching products:", error);
                    setError("Failed to load products");
                    setLoading(false);
                    toast.error("Something went wrong.",{position:'bottom-center'});
                }
            );
        };

        // calling loading product function.

    

    // const [products, setProducts] = useState([
    //     { title: "Shoes", desc: "This is shoes" },
    //     { title: "T-shirt", desc: "This is T-shirt" },
    //     { title: "Water bottle", desc: "This is water bottle" },
    //     { title: "Caps", desc: "This is caps" },
    //     { title: "Backpack", desc: "This is a backpack" },
    //     { title: "Sunglasses", desc: "This is sunglasses" },
    //     { title: "Laptop Sleeve", desc: "This is a laptop sleeve" },
    //     { title: "Travel Mug", desc: "This is a travel mug" },
    //     { title: "Notebook", desc: "This is a notebook" },
    //     { title: "Headphones", desc: "This is headphones" },
    //     { title: "Smartphone Case", desc: "This is a smartphone case" }
    // ]);
 

    //const [products, setProducts] = useState([]);

    useEffect (()=>{
        getAllProductsfromServer();
    },[]);

    return (
        <div>
            <ToastContainer />
            {/* <Button onClick={()=>{console.log("test");
              setProducts([...products,
                { title: "Headphones", desc: "This is headphones" }
              ])  
             } }>test</Button> */

             /* @@@@@@@@ for understanding the code of above which is commented AllProduct */}
        <h1>All Products</h1>
        <p>List of all Products</p>
        {products.length > 0 ? (
            products.map((item) => (
                <Product key={item.id} product={item} />
            )) 
        ) : (
            "No Products Available"
        )}
    </div>
);

}

export default AllProduct;
