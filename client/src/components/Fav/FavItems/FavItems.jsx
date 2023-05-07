import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import newsletter from "../../../assets/newsletter-bg.jpeg";
import "./FavItems.scss";
import { Context } from "../../../utils/context";

const FavItems = () => {
const {favitems, handleRemoveFromFav}= useContext(Context);

    return (
        <div className="cart-products">
         {favitems && favitems.map((item)=> (
            <div key={item.id} className="search-result-item" >
                    <div className="image-container">
                        <img src={ process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt=""/>
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.type}</span>
                        <MdClose className="close-btn" onClick={()=> handleRemoveFromFav (item)}/>
                        
                        <div className="text">
                            <span>रू {item.attributes.price}</span>
                                 </div>
                    </div>
                </div>
           ))}
         
                
            
        </div>
    );
};

export default FavItems;