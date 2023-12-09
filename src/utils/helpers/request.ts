import axios from "axios";

const baseUrl = process.env.BASE_URL || "https://sector-app-api.onrender.com/ap/v1";

const config = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

/**MAKE API REQUESTS */

export const getData = async (url: string, headers?: string) => {
  try {
    const { data } = await axios.get(`${baseUrl}${url}`, config());

    return data;
  } catch (error) {
    return error;
  }
};

export const postData = async (url: string, payload: any, headers?: string): Promise<any> => {
  const postPayload = JSON.stringify(payload);

  try {
    const { data } = await axios.post(`${baseUrl}${url}`, postPayload, config());

    return data;
  } catch (error) {
    return error;
  }
};

export const patchData = async (url: string, payload: any, headers?: string): Promise<any> => {
  const postPayload = JSON.stringify(payload);

  try {
    const { data } = await axios.patch(`${baseUrl}${url}`, postPayload, config());

    return data;
  } catch (error) {
    return error;
  }
};
