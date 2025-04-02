import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Slideshow from './slide.jsx'
import Fooder from './fooder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Slideshow ></Slideshow>
    <Fooder></Fooder>
    
  </StrictMode>,
)
