import {BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Flats from "./components/Flats/Flats";
import Rooms from "./components/Rooms/Rooms";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Overview from "./components/Overview/Overview";
import { useState, useEffect } from "react";

function App() {

    return <div>
      
        <BrowserRouter>
        
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Rooms/:id" element={<Rooms heading={"category-Room"}/>}/>
            <Route path="/Flats/:id" element={<Flats heading={"category-Flat"}/>}/>
            <Route path="/o/:id" element={<Overview/>}/>

        </Routes>
        <Footer/>
    
        </BrowserRouter>
     
    </div>;
}

export default App;
