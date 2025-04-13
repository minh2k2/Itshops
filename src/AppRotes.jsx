import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./products.jsx";
import Cart from "./cart.jsx";
import Confirm from "./confirm.jsx";
import ProductDetail from "./product-detail.jsx";
import SignUp from "./Signing_up.jsx";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/getproducts/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}
export default AppRoutes;
