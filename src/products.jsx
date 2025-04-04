import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
function Products(){
    const [products,setproducts]=useState([]);
    const fetchProduct = async()=>{
        const response= await axios.get("http://127.0.0.1:5000/getproducts");
    setproducts(response.data.products);
};
    useEffect(()=>{
        fetchProduct();
    }, []);
// function Products() {
//     const [products, setProducts] = useState([]);

//     const fetchProduct = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:5000/getproducts");
//             setProducts(response.data.products); // Gán mảng sản phẩm
//         } catch (error) {
//             console.error("Lỗi khi lấy sản phẩm:", error);
//         }
//     };

//     useEffect(() => {
//         fetchProduct();
//     }, []);

    return (
        <div className='content'>
        <h1 style={{paddingTop:'50px',paddingLeft:'8px'}}>Danh sach noi bat</h1>
        <div className="product">
        {products.map(product => (
            <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} /><br></br>
                <h3>{product.name}</h3><br></br>
                <p>{product.details}</p><br></br>
                <Button variant='warning'><strong>{product.price.toLocaleString()}₫</strong></Button>
            </div>
        ))}
    </div>
    </div>
    );
}
export default Products;