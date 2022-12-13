import React, { useState, useEffect } from "react";
import Course from "./course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses= ()=> {
    const config = {

        headers: {
            "Access-Control-Allow-Origin" : "",
            "Allow": "GET",
            "Content-type": "Application/json",
    
        
        }
    }
    useEffect(() => {
        document.title="AllCourses";
    }, []);

    // function to call server
    const getAllCoursesFromServer= ()=> {
        axios.get(`${base_url}/courses`, config).then(
            (response) => {
            //console.log(response);
            console.log(response.data);
            toast.success("Courses has been loaded");
            setCourses(response.data);
        }, 
        (error) => {
           
            toast.success("Error");
        });
    };

    useEffect(()=> {
        getAllCoursesFromServer();
    });

    const [courses,setCourses] = useState([
        // {title: "Java Courses", description:"This is Java Course"},
        // {title: ".Net Courses", description:"This is .Net Course Service"}
    ])
    return(
        <div>
            <h1>
                All Courses
            </h1>
            <p>List of courses are </p>
            {
                courses.length > 0 ? courses.map((course) => <Course course={course} ></Course> ):"No courses"
            }
        </div>
    )
}

export default AllCourses;