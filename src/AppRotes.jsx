import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./products.jsx";
import Cart from "./cart.jsx";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}
export default AppRoutes;
