import "./R-view.scss";
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const Rview = ({type}) => {
  const {id}= useParams();
    const Navigate = useNavigate();
    const { data } = useFetch(`/api/alls?populate=*&filters[type]=${type}&filters[id][$ne]=${id}`);
    if (!data) return;
    
    return <div className="Rooms-container">
        <div className="sec-heading">{type}</div>
        <div className="Rooms">

        <>
    
    {data && data.data.map((item)=> (
   
    
     <div className="RelatedRooms-card">
     <div key ={item.id} onClick={()=> Navigate(`/o/${item.id}`) } className="thumbnail"><img  src={process.env.REACT_APP_DEV_URL  + item.attributes.img.data[0].attributes.url} alt=""/></div>

 <div className="Rooms-details">
 <span key={item.id} className="price">&#8377;{item.attributes.price }</span>
   
     </div> 

     </div> 

    ))}
  
 
 
 </>
              
          </div>
    </div>;
};

export default Rview;
