import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=> {
    useEffect(() => {
        document.title="Add Courses";
    }, []);
    const [course,setCourses] = useState({});
    // form handler function - 

    const handleForm=(e) => {
        //alert("Clicked");
        console.log(course);
        postCourseServer(course);
        e.preventDefault();
    }
    // Creating function to post data 

    const postCourseServer=(course) => {
        axios.post(`${base_url}/courses`,course).then(
            (response)=> {
                console.log(response);
                toast.success("Course has been added")
            }, (error) => {
                console.log(error);
                toast.warn("Error");
            }
        );
    }
    return (
       <Form onSubmit={handleForm}> 
            <h1 className="text-center my-3">Fill course details</h1>
            <FormGroup>
                <label for="userid">Course ID</label>
                <input placeholder="Enter ID" id="userid" name="userid" onChange={(e) =>{
                    setCourses({...course, id:e.target.value});
                }}></input>
            </FormGroup>
            <FormGroup>
                <label for="title">Course Title</label>
                <input placeholder="title" id="titleid" name="titleid" onChange={(e) => {
                    setCourses({...course, title:e.target.value})
                }}></input>
            </FormGroup>
            <FormGroup>
                <label for="desc">Course Description</label>
                <input placeholder="desc" id="descid" name="description" onChange={(e) => {
                    setCourses({...course, description:e.target.value})
                }}></input>
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>
                <Button type="reset" color="warning ms-4" >Clear</Button>
            </Container>
       </Form>
    )
}

export default AddCourse;