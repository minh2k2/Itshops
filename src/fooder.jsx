import './App.css'
import React from "react";
import TimeAPI from './Time';

const Fooder = () => {
    return (
        <div className='fooder'>
            <div style={{textAlign:'center'}}>
            <h1>Lien He</h1>
            <li>So dien thoai</li> 
            <li>Địa Chỉ</li>
            <li>facebook</li>
            <TimeAPI></TimeAPI>
            </div>
            
          
            
        </div>
    )
};
export default Fooder;