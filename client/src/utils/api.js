import axios from "axios";

const params = {};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const postDataToApi = async (url, formData) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      formData,
      params
    );
    return data;
    console.log(data);
  } catch (err) {
    console.log(err);
    return err;
  }
};
