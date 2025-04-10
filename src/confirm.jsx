import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Confirm() {
    return (
        <div className="confirm">
            <h1 style={{margin:'50px',textAlign:'left'}}>Xác Nhận Đơn Hàng</h1><br />
            <div className="confirm-content" style={{margin:'50px',textAlign:'center'}}>
                <h2 style={{textAlign:'center'}}>Cảm ơn bạn đã đặt hàng!</h2>
                <h3 style={{textAlign:'center'}}>Đơn hàng của bạn đã được xác nhận và sẽ được xử lý trong thời gian sớm nhất.</h3>
              <Link to="/"> <Button  variant="outline-success" ><h2>Tiep tuc mua hang</h2></Button></Link> 
            </div>
        </div>
    )
    
}
export default Confirm;
