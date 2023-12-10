import axios from "axios";

const baseUrl = process.env.BASE_URL || "https://sector-app-api.onrender.com/api/v1";

interface Config {
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
}

const config = (authToken?: string): Config | any => {
  const headers: Record<string, any> = {
    "Content-Type": "application/json",
  };

  if (authToken) headers["Authorization"] = `Bearer ${authToken}`;

  return { headers };
};

/**MAKE API REQUESTS */

export const getData = async (url: string, authToken?: string) => {
  try {
    const { data } = await axios.get(`${baseUrl}${url}`, config(authToken));

    return data;
  } catch (error) {
    return error;
  }
};

export const postData = async (url: string, payload: any, authToken?: string): Promise<any> => {
  const postPayload = JSON.stringify(payload);

  try {
    const response = await axios.post(`${baseUrl}${url}`, postPayload, config(authToken));

    return response;
  } catch (error) {
    return error;
  }
};

export const patchData = async (url: string, payload: any, authToken?: string): Promise<any> => {
  const postPayload = JSON.stringify(payload);

  try {
    const response = await axios.patch(`${baseUrl}${url}`, postPayload, config(authToken));

    return response;
  } catch (error) {
    return error;
  }
};
