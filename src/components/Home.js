import React,{useEffect} from "react";
import { Jumbotron } from "reactstrap";

function Home() {
    useEffect(() => {
        document.title="Home";
    }, []);
    return (
       <div class="jumbotron">
            <h1>Learn code with Manoj Wadile</h1>
       </div> 
    )
}

export default Home;