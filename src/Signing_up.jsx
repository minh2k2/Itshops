import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./styless.css';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setusername] = useState("");
    const [full_name, setFullName] = useState("");
    const addemails = async () => {
        try {
             await axios.post("http://localhost:5000/user", {
                email: email,
                password: password,
                full_name: full_name,
                username: username,
            }, {
            });
            alert("Đăng ký thành công!");
        } catch (error) {
            console.error("Lỗi khi đăng ký:", error);
            alert("Đăng ký thất bại!");
        }
    };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            addemails();
        };
        return (
            <div className="signup" style={{ padding: "20px", height: "100vh", backgroundColor: "White" , textAlign: "center"}}>
                <h1 style={{ marginTop: "50px", marginLeft: "8px" }}>Đăng ký</h1>
                <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Tên đăng nhập</label><br />
            <input
                        type="text"
                        placeholder="Nhập tên đăng nhập"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        required
                    /><br />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label><br />
            <input
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /><br />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /><br />
          </div>
                    
             <div>     
                <label htmlFor="full-name">Họ và tên</label><br />
                    <input
                        type="text"
                        placeholder="Nhập họ tên"
                        value={full_name}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    /><br />
                </div>  
                    <Button variant="warning" type="submit">
                        Đăng ký
                    </Button>
                </form>
            </div>
        );
}
export default SignUp;
