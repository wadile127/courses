import React from "react";
import { Link } from "react-router-dom";
import {ListGroup, ListGroupItem} from "reactstrap";
const Menus=()=> {
    return(
        <ListGroup>
            {/* <ListGroupItem tag="a" href="/" action>Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-course" action>Add Course</ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses" action>View Courses</ListGroupItem>
            <ListGroupItem tag="a" href="/about-us" action>About Us</ListGroupItem>
            <ListGroupItem tag="a" href="/contact-us" action>Contact Us</ListGroupItem> */}
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/add-course" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action"tag="a" to="/view-courses" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about-us" action>About Us</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact-us" action>Contact Us</Link>
        </ListGroup>
        
    )
}

export default Menus;