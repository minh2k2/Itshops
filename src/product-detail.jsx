import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const productId = id; // Lấy productId từ URL
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
            const response = await axios.get(`http://127.0.0.1:5000/getproducts/${productId}`);
            setProduct(response.data.product);
            } catch (error) {
            console.error("Lỗi khi lấy sản phẩm:", error);
            }
        };
        fetchProduct();
    }, [productId]);
    
    const addToCart = async () => {
        try {
        await axios.post("http://localhost:5000/cart", {
            product_id: product.id,
            quantity: quantity,
        });
        alert("Thêm sản phẩm vào giỏ hàng thành công!");
        } catch (error) {
        console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
        alert("Thêm sản phẩm vào giỏ hàng thất bại!");
        }
    };
    
    return (
        <div className="product-detail" style={{ padding: "20px",height: "500vh", backgroundColor: "White" }}>
        <h1 style={{ marginTop: "50px", marginLeft: "8px" }}>Chi tiết sản phẩm</h1>
        <div className="product-detail-content" style={{  textAlign: "center" }}>
        <h1>{product.name} {productId} </h1>
        <img 
        src={product.image} alt={product.name} style={{ width: "300px", height: "300px" }} />
        <p>{product.details}</p>
        <p>Giá: {product.price?.toLocaleString()}₫</p>
        <p>số lượng:
        <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            style={{ width: "50px", marginRight: "10px" }}
        />
        </p>
        <Button variant="warning" onClick={addToCart}>
            Thêm vào giỏ hàng
        </Button>
        </div>
        <div className="title" style={{ marginTop: "20px", fontSize: "24px",textAlign: "left" }}>
            <h2>Thông tin sản phẩm</h2>
            <p>{product.details}</p>
            <h2>{product.price}VND</h2>
            <p>Đánh giá sản phẩm sẽ được hiển thị ở đây.</p>
            <h2>Thông số kỹ thuật</h2>
            <p>Thông số kỹ thuật sẽ được hiển thị ở đây.</p>
            <h2>Hướng dẫn sử dụng</h2>
            <p>Hướng dẫn sử dụng sẽ được hiển thị ở đây.</p>
        </div>
        </div>
    );
}
export default ProductDetail;