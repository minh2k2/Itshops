import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-slideshow-image/dist/styles.css";
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar, Form, Button } from 'react-bootstrap';



function Navigation() {
  const[search, setSearch] = useState("");
  const handleSearch = (e) => {
   e.preventDefault();
    if (search) {
      window.location.href = `/search?query=${encodeURIComponent(search)}`; // Chuyển hướng đến trang tìm kiếm với từ khóa
    } else {
      alert('Vui lòng nhập từ khóa tìm kiếm!');
    }
  };
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    // navigate("/"); 
    window.location.href = "/";
  };

  return (
    <div className='heart' style={{ width: '100%' }}>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Nav defaultActiveKey="/home" as="ul" style={{ width: '100%' }}>
            <Nav.Item as="li">
              <Link to="/" className='link-dom'>
                <Nav.Link href="/" className='item-nav'>ItShops</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/" className='link-dom'>
                <Nav.Link eventKey="Iphone">Iphone</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/" className='link-dom'>
                <Nav.Link eventKey="Ipand">Ipad</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/" className='link-dom'>
                <Nav.Link eventKey="Phukien">Phu kien</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/" className='link-dom'>
                <Nav.Link eventKey="Tragop">Tra gop</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>

          <div className="search" style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <Form className="d-flex" onSubmit={handleSearch}>
  <Form.Control
    type="text"
    placeholder="Tìm kiếm sản phẩm..."
    className="me-2"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <Button type="submit">OK</Button>
</Form>

          </div>

          <Button style={{ float: 'left', marginLeft: '5%' }}>
            <Link to="/Cart" className='link-dom'>
              <i className="bi-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </i>
            </Link>
          </Button>

          {user ? (
            <div style={{ color: 'white', marginLeft: '100px', display: 'flex', alignItems: 'center' }}>
              <p style={{width:'300px'}}> {user.full_name}</p>
              <Button
                variant="outline-light"
                size="sm"
                style={{ marginLeft: '10px' }}
                onClick={handleLogout}
              >
                Đăng xuất
              </Button>
            </div>
          ) : (
            <Button style={{ float: 'left', marginLeft: '1%' }}>
              <Link to="/signup" className='link-dom'>
                <i className="bi-cart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd"
                      d="M0 8a4 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                  </svg>
                </i>
              </Link>
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
