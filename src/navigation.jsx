import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-slideshow-image/dist/styles.css";
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CrueltyFreeSharpIcon from '@mui/icons-material/CrueltyFreeSharp';
import SearchIcon from '@mui/icons-material/Search';

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
    localStorage.removeItem("token");
    setUser(null);
    alert("Đăng xuất thành công!");
    // navigate("/"); 
    window.location.href = "/";
  };

  return (
    <div className='heart' style={{ width: '100%' ,  backgroundColor: 'black' }}>
<Navbar bg='light' expand='lg' style={{height: '60px'}}>
  <Container fluid className="px-4" >
    <div className="d-flex flex-wrap justify-content-between align-items-center w-100">

      {/* LEFT: Menu */}
      <div className="d-flex align-items-center flex-wrap w-100 justify-content-between py-2" style={{ width: '100%', maxWidth: '50%' }}>
        <Nav as="ul" className="d-flex flex-wrap align-items-center mb-2 mb-md-0" >
          <Nav.Item as="li">
            <Link to="/" className='link-dom'>
              <Nav.Link href="/" >
                <h2><CrueltyFreeSharpIcon sx={{ fontSize: 40 }} />
                ItShops</h2>
              </Nav.Link>
            </Link>
          </Nav.Item >
          {['Iphone', 'Ipad', 'Phukien', 'Tragop'].map((item, idx) => (
            <Nav.Item as="li" key={idx} className="mx-2">
              <Link to="/" className='link-dom'>
                <Nav.Link eventKey={item}>{item}</Nav.Link>
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      {/* CENTER: Search */}
      <div className="my-2 my-md-0 w-100 w-md-50" style={{ width: '100%', maxWidth: '30%' }}>
  <Form className="d-flex" onSubmit={handleSearch}>
    <Form.Control
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      className="me-2"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <Button type="submit"><SearchIcon /></Button>
  </Form>
</div>


      {/* RIGHT: Cart + User */}
      <div className="d-flex align-items-center my-2 my-md-0">
        <Link to="/Cart" className='link-dom'>
          <Button variant="light">
            <ShoppingCartIcon sx={{ fontSize: 40 }} />
          </Button>
        </Link>

        {user ? (
          <div className="d-flex align-items-center ms-3">
            <span className="me-2 text-nowrap">{user.full_name}</span>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={handleLogout}
            >
              Đăng xuất
            </Button>
          </div>
        ) : (
          <Link to="/login" className='link-dom ms-3'>
            <AccountCircleIcon sx={{ fontSize: 40 }} />
          </Link>
        )}
      </div>

    </div>
  </Container>
</Navbar>


    </div>
  );
}

export default Navigation;
