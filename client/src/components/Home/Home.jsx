import "./Home.scss";
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Flats from "../Flats/Flats";
import Rooms from "../Rooms/Rooms";
import axios from "axios";
const Home = () => {


    return (
        <div>
<Banner/>
<div className="main-content">
    <div className="layout">


<Rooms  heading="homerooms"/>
<Flats  heading="homeflats"/>


</div>
        </div>
        </div>

    );
};

export default Home;
