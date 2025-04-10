import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-slideshow-image/dist/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import { Container } from 'react-bootstrap';
// import { Navbar } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React from 'react';
import Navigation from './navigation.jsx';
import Slideshow from './slide.jsx';
import AppRoutes from './AppRotes';
import Fooder from './fooder';






function App() {
  

  return (
    
    <div >
    <Navigation/>
    <Slideshow/>
    <AppRoutes/>
    <Fooder/>
    </div>
    
  )
}
export default App