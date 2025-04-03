export const useToken = () => {
    const setToken = (token: string) => {
      sessionStorage.setItem("token", token);
    };
  
    const getToken = () => {
      return sessionStorage.getItem("token");
    };
  
    const removeToken = () => {
      sessionStorage.removeItem("token");
    };
  
    return {
      setToken,
      getToken,
      removeToken,
    };
  };
  