import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/api1/v1/posts`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
