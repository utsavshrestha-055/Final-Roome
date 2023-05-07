import "./Fav.scss";
import {BsHeartbreak} from "react-icons/bs"
import FavItems from "./FavItems/FavItems";
import { useContext , useState, useEffect } from "react";
import { Context } from "../../utils/context";

const Fav = ({setShowFav}) => {
    const {favitems}= useContext(Context);




    return (
    <div className="fav-panel">
    <div className="opac-layer" ></div>
    <div className="fav-content">
        <div className="fav-header">
            <span className="heading">Favorites</span>
            <span className="close-btn" >
                <span className="text" onClick={()=>setShowFav(false)}>close</span>
            </span>
        </div>

       {!favitems.length && (<div className="empty-cart">
           <BsHeartbreak/>
            <span>No Products in the wishlist.</span>
            <button className="return-cta">Return to shop.</button>
    </div>)}
    <div>
        <FavItems/>
    </div>
    </div>
</div>);
    
};

export default Fav;
