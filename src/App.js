import logo from './logo.svg';
import './App.css';
import { Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/course';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/header';
import Menus from './components/menus';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import ConstactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';



function App() {
  const btnClick = () => {
    toast("Wow this is my message...")
  }

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header name="Manoj Wadile"></Header>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
            <Routes>
              <Route path='/' element={<Home />} exact></Route>
              <Route path='/add-course' element={<AddCourse/>} exact></Route>
              <Route path='/view-courses' element={<AllCourses/>} exact></Route>
              <Route path='/about-us' element={<AboutUs/>} exact></Route>
              <Route path='/contact-us' element={<ConstactUs/>} exact></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>

  );
}

export default App;
