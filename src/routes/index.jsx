import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";


export default function AppRoutes() {
    return (
        <Routes>
            {/* <Route path="/" element={<Home />}/> */}
            <Route index element={<Home />} />
            <Route path="/About" element={<About />}/>
            <Route path="/Projects" element={<Projects />}/>
            {/* <Route path="*" element={<Error404/>} /> */}
        </Routes>
    );
}