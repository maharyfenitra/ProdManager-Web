import axios from "axios"
export const useFetch = () => {
  const sendRequest = async (
    method: string,
    endpoint: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params: any,
    headers = {}
  ) => {

    console.log(endpoint);
    //try {
    let response;

    switch (method.toUpperCase()) {
      case "GET":
        response = await axios.get(endpoint, {
          params,
          headers,
        });
        break;
      case "POST":
        response = await axios.post(endpoint, params, { headers });
        break;
      case "PUT":
        response = await axios.put(endpoint, params, { headers });
        break;
      case "DELETE":
        response = await axios.delete(endpoint, { headers, data: params });
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response;
  };

  return sendRequest;
};
