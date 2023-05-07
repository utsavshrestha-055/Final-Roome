import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context= createContext();
const AppContext = ({children})=> {
    const [favitems , setfavitems]= useState([]);
    

useEffect(()=>{}, [favitems])

const handleAddToFav = (rooms )=>{
    let items=[...favitems];
    let index=items.findIndex(p => p.id === rooms.id)
    if(index !== -1){
        alert("Already in Favorites");

    }else{
        items=[...items,rooms];
        alert("Added Sucessfully");

    }
    setfavitems(items);


} 
const handleRemoveFromFav = (rooms )=>{
    let items =[...favitems];  
    items= items.filter(p => p.id !== rooms.id)
    setfavitems(items);
} 

    return(
        <Context.Provider
         value={{favitems,setfavitems,
            handleAddToFav,handleRemoveFromFav,
         }}>
            {children}
        </Context.Provider>
    )

}
export default AppContext