import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(`https://json-server-beta-six.vercel.app/api/v1/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
