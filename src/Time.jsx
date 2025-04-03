import React, { useState, useEffect } from "react";
import axios from "axios";

function TimeAPI() {
    const [Time, setTime] = useState(null);

    const fetchAPI = async () => {
            const response = await axios.get("http://127.0.0.1:5000/time");
            setTime(response.data.time); 
    };

    useEffect(() => {
        fetchAPI(); 
    }, []);

    return (
        <div>
            <p>Thời gian là: {Time}</p>
        </div>
    );
}

export default TimeAPI;
