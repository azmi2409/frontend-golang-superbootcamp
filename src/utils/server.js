import axios from "axios";

const URL = "https://backend-final-beeleaf.herokuapp.com/api/v1";

//**Products */
export const getProducts = async () => {
  const url = `${URL}/product/`;
  const response = await axios.get(url);
  return response.data;
};

export const getProduct = async (slug) => {
  const url = `${URL}/product/${slug}`;
  const response = await axios.get(url);
  return response.data;
};

//** Categories */
export const getCategories = async () => {
  const url = `${URL}/category/`;
  const response = await axios.get(url);
  return response.data;
};

/** Users */
export const userLogin = async (user) => {
  const url = `${URL}/user/login`;
  const response = await axios.post(url, user);
  return response.data;
};

export const userRegister = async (user) => {
  const url = `${URL}/user/register`;
  const response = await axios.post(url, user);
  return response.data;
};

export const getUser = async (id) => {
  const url = `${URL}/user/${id}`;
  const response = await axios.get(url);
  return response.data;
};

//** Cart */
export const addToCart = async (userId, productId) => {
  const url = `${URL}/cart/${userId}/add/${productId}`;
  const response = await axios.post(url);
  return response.data;
};
