import React from "react";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
    const navigate = useNavigate();
    document.title = "Projetos";
    return (
        <div className="container">
            <h2>Projetos</h2>
        </div>
    );

}
export default Projects;