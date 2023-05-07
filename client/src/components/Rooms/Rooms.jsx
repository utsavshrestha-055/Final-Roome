import "./Rooms.scss";
import {useNavigate} from "react-router-dom";
import useFetch from "../../hooks/useFetch";
const Rooms = ({heading}) => {
    const Navigate = useNavigate();
    const { data } = useFetch(`/api/alls?populate=*&filters[type]=rooms`);
    if (!data) return;

    return <div className="Rooms-container ">
        <div className="sec-heading pl-8">{heading}</div>
        <div className="Rooms grid grid-cols-5 gap-4 pl-8">
        <>
    
    {data && data.data.map((item)=> (
    
    
     <div className="RelatedRooms-card">
     <div key ={item.id} onClick={()=> Navigate(`/o/${item.id}`) } className="thumbnail">{item.attributes.img.data && <img className="object-contain w-full h-full" src={process.env.REACT_APP_DEV_URL  + item.attributes.img.data[0].attributes.url} alt=""/>}</div>

 <div className="Rooms-details">
 <span key={item.id} className="price">रू {item.attributes.price }</span>
   
     </div> 

     </div> 

    ))}
  
 
 
 </>
              
          </div>
    </div>;
};

export default Rooms;
