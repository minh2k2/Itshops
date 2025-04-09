import React from "react";
import './App.css';
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Cart () {
    const [carts, setCart] = useState([]);
    const fecthCart = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/showcart');
            setCart(response.data.carts);
        } catch (error) {
            console.log("Lỗi khi fetch cart:", error);
        }
    };
        useEffect(() => {
        fecthCart();
    }, []);
    const handleDelete = async (productId) => {
        await axios.delete("http://127.0.0.1:5000/deletecart", {
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              product_id: productId
            }
          });
          fecthCart();
    }
    const TotalPrice = carts.reduce((total, cart) => {
        return total + (cart.price * (cart.quantity || 1));
    }, 0);

    return (
        <div className="cart" style={{marginTop:'50px', height:'100vh',backgroundColor:'White'}}>

            <h1>Gio hang</h1>
            <div>
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ten san pham</th>
                        <th>Hinh anh</th>
                        <th>So luong</th>
                        <th>Gia</th>
                        <th>Tong gia</th>
                        <th>tuy chon</th>
                    </tr>
                </thead>
                {carts.map((cart, index) => (
                        <tr key={index} style={{backgroundColor:'black'}}>
                            <td>{index + 1}</td>
                            <td>{cart.name}</td>
                            <td><img src={cart.image} 
                            alt={cart.name} width="80" /></td>
                            <td>{cart.quantity || 1}</td>
                            <td>{cart.price.toLocaleString()}₫</td>
                            <td>{(cart.price * (cart.quantity || 1)).toLocaleString()}₫</td>
                            <td>
                               <Link to="/cart"> <Button variant="outline-danger" onClick={() => handleDelete(cart.product_id)}>XOA</Button></Link>
                            </td>
                        </tr>
                    ))}
                    <tr style={{backgroundColor:'black'}}>
                        <td colSpan="5" style={{textAlign:'right'}}>Tong gia:</td>
                        <td colSpan="2">{TotalPrice.toLocaleString()}₫</td>
                    </tr>
            </Table>
            <div style={{textAlign:'right'}}>
                <Button variant="outline-warning" style={{marginRight:'10px'}}><Link to="/" className="link-dom">Tiep tuc mua hang</Link></Button>
                <Button variant="outline-success"><Link to="/payment" className="link-dom">Thanh toan</Link></Button>
                </div>
            </div>

        </div>

    )
}
export default Cart;