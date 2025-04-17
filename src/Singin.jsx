import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  Stack,
  Card as MuiCard,
  CssBaseline,
} from "@mui/material";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom"; // Removed duplicate import
// import { useNavigate } from "react-router-dom";


const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Card = styled(MuiCard)(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
  margin: "auto",
  marginTop: theme.spacing(10),
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export default function LoginForm() {
//   const navigate = useNavigate(); // Moved inside the component
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setServerError(""); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;
    if (!username || !password) {
      setErrors({
        username: !username ? "Vui lòng nhập username" : "",
        password: !password ? "Vui lòng nhập password" : "",
      });
      return;
    }

    try {
  const res = await axios.post("http://localhost:5000/login", formData);
  // Kiểm tra dữ liệu có hợp lệ không
  if (res.data && res.data.user) {
    setUserInfo(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.access_token);
    alert("Đăng nhập thành công!");
    // navigate("/");
    window.location.href = "/";
  } else {
    setServerError("Phản hồi không hợp lệ từ máy chủ");
  }
} catch (err) {
  console.log("Lỗi khi gọi API:", err); // để debug
  if (err.response) {
    setServerError(err.response.data.error || "Lỗi không xác định");
  } else {
    setServerError("Không thể kết nối máy chủ");
  }
}
    };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Card variant="outlined">
        <Typography variant="h5" component="h1" align="center">
          Đăng nhập
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <FormLabel>Tên đăng nhập</FormLabel>
              <TextField
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Mật khẩu</FormLabel>
              <TextField
                name="password"
                type="password"
                placeholder="••••••"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </FormControl>

            {serverError && (
              <Typography color="error" variant="body2">
                {serverError}
              </Typography>
            )}

            <Button type="submit" variant="contained" fullWidth>
              Đăng nhập
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Not have an account?{' '}
              
              <Link to="/signup" variant="body2">
                <Button>Sign up</Button>
              </Link>
            </Typography>
          </Stack>
        </Box>

        {userInfo && (
          <Box mt={2}>
            <Typography variant="subtitle1" color="success.main">
              Xin chào, {userInfo.full_name}!
            </Typography>
            <Typography variant="body2">Email: {userInfo.email}</Typography>
          </Box>
        )}
      </Card>
    </ThemeProvider>
  );
}
