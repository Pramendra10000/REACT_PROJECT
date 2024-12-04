import React, { Fragment,useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Label ,Button} from "reactstrap";

const Addproducts= ()=>{
    useEffect(() => {
        document.title="Add Product  ";
     },[]);  //for using first time need to use []
 

const [product,setproduct] = useState({});

//function for handle form

const handleform = (e)=>{
    console.log(product);
    e.preventDefault();
};

   return <Fragment>
    <h1 className="text-center my-3">Fill Product  Details</h1>
    <Form onSubmit={handleform}>
<FormGroup>
    <label for="userId" >Product Id</label>
    <Input  type="text"  placeholder="Enter here "  name="userId" id="userId"  
    onChange={(e)=>{
   setproduct({...product,id: e.target.value})
    }}
    />

</FormGroup>
<FormGroup>
<label for="title" >Product Titel</label>
<Input  type="text" placeholder="Enter title here " name="title" id="title" 
onChange={(e)=>{
    setproduct({...product,title: e.target.value})
     }}
/>
</FormGroup>

<FormGroup>
<label for="desc" >Product Description</label>
<Input  type="textarea" placeholder="Enter desc here " name="desc" id="desc" style={{height:150}}
onChange={(e)=>{
    setproduct({...product,desc: e.target.value})
     }}
/>
</FormGroup>
<Container>
<Button color="success" type="submit" className="me-5">Add Product</Button>
<Button color="warning">Clear</Button>
</Container>
    </Form>
   </Fragment>

}

export default Addproducts; 