import React from "react";
import { ListGroup, ListGroupItem  } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {

    return(

        <ListGroup>
            {/* <ListGroupItem tag="a" href="/" action>
               Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/add-products" action>
               Add Product
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view-products" action>
               View Product
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action>
               About
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action>
               Contact
            </ListGroupItem> */}
           
           <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
               Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-products" action>
               Add Product
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-products" action>
               View Product
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#" action>
               About
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#" action>
               Contact
            </Link>


        </ListGroup>

          
    );

} ;

export default Menu;