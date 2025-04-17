import 'react-slideshow-image/dist/styles.css'
import './App.css'
import React from "react";
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    {
      url: 'https://itshoponline.vn/images/thumbs/0003361_bannertop2.webp',
      caption: 'First Slide'
    
    },
    {
      url: 'https://itshoponline.vn/images/thumbs/0003638_iphone16_banner.webp',
      caption: 'Second Slide'
    },
    {
      url: 'https://itshoponline.vn/images/thumbs/0003641_iphone16pro_banner.webp',
      caption: 'Third Slide'
    },
  ];
  
  const Slideshow = () => {

    return (
      <div className="slide-container" style={{backgroundColor:'black'}}>
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
             <img
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover' // or 'contain' depending on your needs
              }}
              src={fadeImage.url}
              alt={fadeImage.caption || ""}
            />
            </div>
          ))}
        </Fade>
      </div>
    )
  }
  export default Slideshow;