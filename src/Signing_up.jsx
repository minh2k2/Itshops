
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  
  TextField,
  Typography,
  Stack,
  Card as MuiCard
} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({ 
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));                                    

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    backgroundRepeat: 'no-repeat',
  },
}));

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    full_name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    full_name: '',
    email: '',
    password: '',
  });

  const validateInputs = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    try {
      const response = await axios.post("http://localhost:5000/user", formData);
      console.log("Đăng ký thành công:", response.data);
      alert("Đăng ký thành công!");
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      alert("Đăng ký thất bại!");
    }
  };

  return (
    <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
      <CssBaseline />
      <SignUpContainer direction="column" justifyContent="center">
        <Card variant="outlined">
        
          <Typography component="h1" variant="h4">
            <AccountCircleIcon/> Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                name="username"
                required
                fullWidth
                id="username"
                placeholder="nguyenvanaw"
                value={formData.username}
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="full_name">Full Name</FormLabel>
              <TextField
                name="full_name"
                required
                fullWidth
                id="full_name"
                placeholder="Nguyễn Văn A"
                value={formData.full_name}
                onChange={handleChange}
                error={!!errors.full_name}
                helperText={errors.full_name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                name="email"
                required
                fullWidth
                id="email"
                placeholder="nguyenvanaw@example.com"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                name="password"
                required
                fullWidth
                type="password"
                id="password"
                placeholder="••••••"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="I want to receive updates via email."
            />
            <Button type="submit" fullWidth variant="contained">
              Sign up
            </Button>
          </Box>

          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>or</Typography>
          </Divider>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign up with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign up with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign up with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign up with Facebook
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Already have an account?{' '}
              <Link to="/login" variant="body2">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </ThemeProvider>
  );
}
