import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {  Box, Grid, Card, CardMedia, CardContent, Typography, Button  } from '@mui/material';
import Rating from '@mui/material/Rating';




function Products(){
    const [products,setproducts]=useState([]);
    const fetchProduct = async()=>{
        const response= await axios.get("http://localhost:5000/getproducts");
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
const addTocart= async (productId, quantity=1)=>{
    try{
        await axios.post('http://localhost:5000/cart', {    
            product_id : productId,
            quantity: quantity,
        }
        ,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }
      ).then(()=>alert('Thêm sản phẩm vào giỏ hàng thành công!'));

    }catch(error){
        console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
        alert('Chưa đăng nhập!');
    }
};
    return (

      
        <Box sx={{ backgroundColor: 'while', padding: '30px 20px' ,textAlign: 'center'}}>
        <Typography variant="h4" color="black" sx={{ mb: 6, pl: 4, pr: 4 }}>
          <h1>Danh sách nổi bật</h1>
          
          
        </Typography>
        
        <Grid container spacing={10} justifyContent="center" >
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id} >
              <Link to={`/getproducts/${product.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'scale(1.13)' }, width: '500px' ,backgroundColor:'#F6F9FC'}} >
                  <CardMedia
                    component="img"
                    height="500"
                    image={product.image}
                    alt={product.name}
                    margin="20px"
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ whiteSpace: 'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{product.name} </Typography>
                    <Typography variant="body2" color="text.secondary">{product.details}</Typography>
                  </CardContent>
                  <Rating name="no-value" value={5} />
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Button fullWidth variant="contained" color="warning" onClick={() => addTocart(product.id)}>
                      Thêm vào giỏ hàng
                    </Button>
                  </Box>
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Button fullWidth variant="contained" color="warning">
                      {product.price.toLocaleString()} VND
                    </Button>
                  </Box>
                  
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    
    );
}
export default Products;