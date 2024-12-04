import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container
} from 'reactstrap';

const Product = ({product}) => (
  <Card>
    <CardBody>
      <CardSubtitle className="font-weight-bold">{product.title}</CardSubtitle>
      {/* <CardTitle tag="h5">Card Title</CardTitle> */}
      <CardText>{product.desc}</CardText>
      <Container className="text-center">
         <Button color="success" className="me-2">Update</Button> 
      <Button color="danger" className="ms-5">Delete</Button>
      </Container>
     
    </CardBody>
  </Card>
);

export default Product;
