import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import injectContext from "./store/appContext";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Characters from "./views/Characters";
import Planets from "./views/Planets";
import Details from "./views/Details";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Search/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/:section/:id" element={<Details/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(App);