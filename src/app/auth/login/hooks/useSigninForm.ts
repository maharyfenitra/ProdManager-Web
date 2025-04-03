import { useSignin, useToken } from "@/lib/api";
import { useState, useEffect } from "react";

export const useSigninForm = () => {

  const { mutate,data } = useSignin();
  const { setToken } = useToken()
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  useEffect(()=>{
   
    if(data?.token){
        setToken(data?.token)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName || !formData.password) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    alert(`Connexion réussie pour ${formData.userName}`);
    console.log(formData)
    mutate(formData)
  };
 

  return {
    handleChange,
    handleSubmit,
    formData
  };
};
