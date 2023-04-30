import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
const navigation = useNavigate();

return (
    <header>
        <div className="title">
        <h2>Thaís Pascoal</h2><h3>.</h3>
        </div>
        <div className="telas">
        <a href="/" >Home</a>
        <a href="/Projects">Projetos</a>
        <a href="/About">Sobre mim</a>
        </div>
    </header>
    )
}
