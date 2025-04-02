import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-slideshow-image/dist/styles.css";
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Slide } from 'react-slideshow-image';

function App() {
  

  return (
    <>
    <div className='heart'>
    <Navbar bg='dark'data-bs-theme ='dark'>
    <Container>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home" className='item-nav'>ItShops</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Iphone</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Ipad</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Phukien</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Tra gop</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    </Navbar>
    </div>
    <div className='slide'>
     
    </div>
    </>
  )
}

export default App
