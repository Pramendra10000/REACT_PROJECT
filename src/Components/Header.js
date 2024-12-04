import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardHeader
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import  "./CSS/Headerstyle.css"; 

function Header() {
  return (
    <Card className="beautiful-card" style= {{ backgroundColor: '#f0f0f0', padding: '20px' }}>
    <CardHeader className="card-header-custom" style={{ backgroundColor: '#333', color: 'white' }}>
      <h1 className="text-center my-3">Project Product Shop</h1>
    </CardHeader>
    {/* <CardBody>
      <CardTitle tag="h5">Card Title</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">Card Subtitle</CardSubtitle>
      <CardText>This is some text within a beautifully styled card body.</CardText>
      <Button color="primary">Button</Button>
    </CardBody> */}
  </Card>
  
  );
}

export default Header;
