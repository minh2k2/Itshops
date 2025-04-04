import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Slideshow from './slide.jsx'
import Fooder from './fooder.jsx'
import Products from './products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    
    <Slideshow ></Slideshow>
    <Products></Products>
    <Fooder></Fooder>
   
  </StrictMode>,
)
