import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigate = useNavigate();
    document.title = "Sobre Mim";
    return (
        <div className="container">
            <h2>Sobre Mim</h2>
        </div>
    );

}
export default About;