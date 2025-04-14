import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./products.jsx";
import Cart from "./cart.jsx";
import Confirm from "./confirm.jsx";
import ProductDetail from "./product-detail.jsx";
import SignUp from "./Signing_up.jsx";
import LoginForm from "./Singin.jsx";
import SearchPage from "./searchs.jsx";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/getproducts/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
    );
}
export default AppRoutes;
