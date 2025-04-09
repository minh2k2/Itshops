import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Slideshow from './slide.jsx'
import Fooder from './fooder.jsx'
import Products from './products.jsx'
// import AppRoutes from './AppRotes.jsx'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <App /> 
    
    {/* <Slideshow ></Slideshow> */}
    

    {/* <Products></Products> */}
    {/* <Fooder></Fooder> */}
   </BrowserRouter>
  
)
