import store from "../Store";
const fetchData = async (url, options = {}) => {
  const token = store.getState().auth.token;
  let finalOptions = {};
  if (token) {
    finalOptions = {
      ...options,
      headers: {
        ...options.headers,
        "Content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    };
  } else {
    finalOptions = {
      ...options,
      headers: {
        ...options.headers,
        "Content-type": "application/json",
      },
    };
  }
  try {
    const res = await fetch(import.meta.env.VITE_URL_API + url, finalOptions);

    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
export default fetchData
