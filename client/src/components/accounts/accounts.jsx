import "./accounts.scss";
import {BsHeartbreak} from "react-icons/bs"

import { useContext , useState, useEffect } from "react";
import { Context } from "../../utils/context";

const Accounts = ({setShowAccount}) => {
 




    return (
    <div className="fav-panel">
    <div className="opac-layer" ></div>
    <div className="fav-content">
        <div className="fav-header">
            <span className="heading">Accounts</span>
            <span className="close-btn" >
                <span className="text" onClick={()=>setShowAccount(false)}>close</span>
            </span>
        </div>

      <div className="empty-cart">
           <BsHeartbreak/>
            <span>no accounts</span>
            
    </div>
    <div>
    </div>
    </div>
</div>);
    
};

export default Accounts;
