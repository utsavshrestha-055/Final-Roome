
import { useParams } from "react-router-dom";
import Rview from "./R-view/R-view";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import {AiOutlineHeart} from "react-icons/ai"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest
} from "react-icons/fa";
import "./Overview.scss";
import { Context } from "../../utils/context";

const Overview = () => {
  const { handleAddToFav } = useContext(Context);

  const { id } = useParams();
  const { data } = useFetch(`/api/alls?populate=*&[filters][id]=${id}`);
  if (!data) return;
  const product = data?.data?.[0]?.attributes;
  return (
    
    <>
      <div className="Overview-main-content">
        <div className="layout">
          <div className="Overview-page">
            <div className="left">
              <img
                alt=""
                src={
                  process.env.REACT_APP_DEV_URL +
                  product.img.data[0].attributes.url
                }
              />
            </div>
            <div className="right">
            <span  className="location">Location: {}
                {product.location}
                  </span>
              <span className="name">{product.contact}</span>
              <span className="price">रू {product.price}</span>
              <span className="desc">{product.desc}</span>

              <div className="cart-buttons">
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    handleAddToFav(data.data[0]);
                  }}
                >
                  <AiOutlineHeart size={20} />
                  ADD TO FAVORITES
                </button>
              </div>

              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Category:{product.type}
                  <span></span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedinIn size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Rview type={product.type} />
      </div>
    </>
  );
};
export default Overview;
