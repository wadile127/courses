import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle,CardText, CardFooter, Button, Container} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

function Course({course}) {
    const deletCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then((response)=>{
            toast.success("Successfully Deleted..");
        }, 
        (error)=> {
            toast.error("Delete Operation failed..")
        });
    }
    return(
       <Card>
        <CardBody className="text-center">
            <CardSubtitle className="fw-bold">{course.title} </CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deletCourse(course.id)
                }}>Delete</Button>
                <Button color="warning ms-3">Update</Button>
            </Container>
        </CardBody>
       </Card>
    )
}

export default Course;