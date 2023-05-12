import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import "./Upload.scss";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postDataToApi } from "../../utils/api";
const Upload = ({ setShowUpload, setShowAccount }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    postDataToApi("/api/alls", { data: data });
  };

  const { user } = useContext(Context);
  const nagivate = useNavigate();
  const nologin = () => {
    alert("login first");
    nagivate("/");
    setShowAccount(true);
    setShowUpload(false);
  };

  return !user ? (
    nologin()
  ) : (
    <>
      <div className="search-modal">
        <div className="form-field">
          <MdClose className="close-btn" onClick={() => setShowUpload(false)} />
        </div>
        <div className="body">
          <div className="search-result-content">
            <div class="center">
              <h1>Upload</h1>
              <form
                className="w-full px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-sm "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div class="inputbox mb-4">
                  <input
                    type="text"
                    required="required"
                    {...register("title", { required: true })}
                  />
                  <span>Title</span>
                </div>
                <div class=" w-full inputbox">
                  <input
                    type="file"
                    placeholder="image"
                    required="required"
                    accept="image/*"
                    {...register("img", { required: true })}
                  />
                </div>
                <div class=" w-full inputbox">
                  <input
                    type="number"
                    required="required"
                    {...register("contact", { required: true })}
                  />
                  <span>Contact</span>
                </div>

                <div class="w-full inputbox">
                  <input
                    type="number"
                    required="required"
                    {...register("price", { required: true })}
                  />
                  <span>Price</span>
                </div>
                <div class="w-full inputbox">
                  <input
                    type="text"
                    required="required"
                    {...register("desc", { required: true })}
                  />
                  <span>Description</span>
                </div>
                <div class="w-full inputbox" style={{ marginBottom: "64px" }}>
                  <p>Type</p>
                  <select
                    required="required"
                    {...register("type", { required: true })}
                    style={{
                      width: "100%",
                      padding: "8px 16px",
                      border: "2px solid black",
                      borderRadius: "8px",
                    }}
                  >
                    <option value="rooms">Room</option>
                    <option value="flats">Flat</option>
                  </select>
                </div>
                <div class=" w-full inputbox">
                  <input
                    type="text"
                    required="required"
                    {...register("location", { required: true })}
                  />
                  <span>Location</span>
                </div>

                <div class="inputbox">
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
