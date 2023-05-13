import React, { useContext } from 'react'
import img from '../../../assets/img.webp'
import { Context } from '../../../utils/context'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const Navigate = useNavigate();
    const {user_data,user,setShowAccount}=useContext(Context);
    
    
   
    
    const { data } = useFetch(`/api/alls?populate=*&filters[username]=${user_data.data[0].attributes.username}`); 
    

 


    return  (
    <div>
   

   
   
    <div className="Overview-main-content">
      <div className="layout">
        <div className="Overview-page">
          <div className="left">
            <img
              alt=""
              src={
                img
              }
            />
          </div>
          {user_data &&   <div className="right">
          <span  className="location">Name: 
             {user_data.data[0].attributes.name}
                </span>
                <span  className="location">Username: 
              {user_data.data[0].attributes.username}
                </span>

          </div>
}
        </div>
      </div>
      
    </div>


    <div className="Rooms-container ">
      <div className="pl-8 sec-heading">Uploads By : {user_data.data[0].attributes.name}</div>
      <div className="grid grid-cols-5 gap-4 pl-8 Rooms">
        <>
          {data &&
            data.data.map((item) => (
              <div className="RelatedRooms-card">
                <div
                  key={item.id}
                  onClick={() => Navigate(`/o/${item.id}`)}
                  className="thumbnail"
                >
                  {item.attributes.img.data && (
                    <img
                      className="object-contain w-full h-full"
                      src={
                        process.env.REACT_APP_DEV_URL +
                        item.attributes.img.data[0].attributes.url
                      }
                      alt=""
                    />
                  )}
                </div>

                <div className="Rooms-details">
                  <div key={item.id} className="location">
                    {item.attributes.location}
                  </div>
                  <span key={`price-${item.id}`} className="price">
                    रू {item.attributes.price}
                  </span>
                </div>
              </div>
            ))}
        </>
      </div>
    </div>

                  


    
    </div>

        
  
  )
                    
}

export default Profile
