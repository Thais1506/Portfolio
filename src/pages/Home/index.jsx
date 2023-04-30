import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Home = () => {
    const navigate = useNavigate();
    document.title = "Home";
    return (        
        <div className="container">
            
            <h2>Home</h2>
        </div>
    );

}
export default Home;