import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './App.css';
import axios from "axios";
import { Link } from "react-router-dom";

function SearchPage() {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

    const fetchSearchResults = React.useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/search?query=${searchQuery}`);
            setResults(response.data.products || []); // Gán mảng sản phẩm từ phản hồi
        } catch (error) {
            console.error("Lỗi khi tìm kiếm:", error);
        }
    }, [searchQuery]);

    useEffect(() => {
        fetchSearchResults();
    }, [fetchSearchResults]); // Chỉ gọi lại khi fetchSearchResults thay đổi
  return (
    
    <div className="search-page" style={{ padding: "20px", backgroundColor: 'black' }}>
      <h1 style={{ marginTop: "50px", marginLeft: "8px",color:'white' }}>Kết quả tìm kiếm cho "{searchQuery}"</h1>
     
      <div className="search-results" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {results.map((product) => (
           <Link to={`/getproducts/${product.id}`} style={{ textDecoration: 'none' }}>
            <div key={product.id} className="product-item" style={{ margin: "10px", textAlign: "center" }}>
            <img 
            src={product.image} alt={product.name} style={{ width: "450px", height: "450px" }} />
            <h3>{product.name}</h3>
            <p>{product.details}</p>
            <p>Giá: {product.price?.toLocaleString()} VND</p>
          </div>
        </Link>
        ))}
      </div>
      
    </div>

  );
}

export default SearchPage;
