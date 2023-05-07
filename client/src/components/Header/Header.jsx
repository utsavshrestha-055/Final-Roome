import {useEffect, useState, useContext} from"react";
import {useNavigate} from "react-router-dom";
import {TbSearch} from"react-icons/tb";
import {CgShoppingFav} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import {HiOutlineSearch} from "react-icons/hi";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {RiAccountCircleLine} from "react-icons/ri";
import Search from "./Search/Search";
import Fav from "../Fav/Fav";
import FavItems from "../Fav/FavItems/FavItems";
import "./Header.scss";
import Accounts from "../accounts/accounts";


const Header = () => {
   
    const navigate= useNavigate();
const[ShowFav, setShowFav]=useState(false);
const[ShowSearch, setShowSearch]=useState(false);
const[ShowAccount, setShowAccount]=useState(false);
const goToHome=()=>{

    navigate('/');
    
}



return (
      
      
   <div>
    <div className="bg-slate-200 drop-shadow fixed w-full top-0  main-header "> 
       
        <div className="header-content">
            
        
            <ul className="left">
                <li><div onClick={()=> navigate("/")} className=" justify-self-auto text-xl main">ROOM-E</div></li>

       <li onClick={()=> goToHome()}>Home</li>
      <li onClick={()=> navigate("/Rooms/:id")}>Rooms</li>
      <li onClick={()=> navigate("/Flats/:id")}>Flat</li>
      <li onClick={()=> navigate("/Cu/:id")}>Contact Us</li>
                <li onClick={()=> navigate("/au/:id")}>About us</li>
           
            </ul>
            
            <div className="right"><HiOutlineSearch onClick={()=> setShowSearch(true)}/>
            <MdOutlineFavoriteBorder onClick={()=> setShowFav(true)}/>
            <RiAccountCircleLine onClick={()=> setShowAccount(true)}/></div>
        </div>
    </div>
    {ShowFav && <Fav setShowFav={setShowFav}/>}
    {ShowSearch && <Search setShowSearch={setShowSearch}/>}
    {ShowAccount && <Accounts setShowAccount={setShowAccount}/>}
</div>

    )
};

export default Header;
