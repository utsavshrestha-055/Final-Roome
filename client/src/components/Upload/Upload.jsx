import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md';
import "./Upload.scss";
import { Context } from '../../utils/context';
import { useNavigate } from 'react-router-dom';

const Upload = ({setShowUpload, setShowAccount}) => {
    
  const {user}=useContext(Context);
  const nagivate = useNavigate();
  const nologin=()=>{
    alert("login first");
     nagivate('/');
     setShowAccount(true);
     setShowUpload(false);


  }


  
  
  return (<>



  <div className="search-modal">
  <div className="form-field">
 
    <MdClose className="close-btn" onClick={() => setShowUpload(false)} />
  </div>
  <div className="body">
  <div className="search-result-content">
   


<div class="center">
<h1>Upload</h1>
< form className=" w-full bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4">
<div class="inputbox mb-4">
    
  <input  type="text" required="required"/>
  <span>Title</span>
</div>
<div class=" w-full inputbox">

  <input type="file" placeholder="image" required="required"/>
  
</div>
<div class=" w-full inputbox">
  <input  type="number" required="required"/>
  <span>Contact</span>
</div>


<div class="w-full inputbox">
  <input type="number" required="required"/>
  <span>Price</span>
</div>
<div class="w-full inputbox">
  <input type="text" required="required"/>
  <span>Description</span>
</div>
<div class="w-full inputbox">
<input type="text" required="required"/>
  <span>type</span>
</div>
<div class=" w-full inputbox">
  <input type="text" required="required"/>
  <span>Location</span>
</div>

<div class="inputbox">
  <input type="button" value="submit"  />
</div>

</form>
</div>
</div>


  </div>
  </div>

    
      </>
    
  )
}

export default Upload
