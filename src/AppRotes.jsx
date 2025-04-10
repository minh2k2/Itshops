import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./products.jsx";
import Cart from "./cart.jsx";
import Confirm from "./confirm.jsx";
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirm" element={<Confirm />} />
        </Routes>
    );
}
export default AppRoutes;
