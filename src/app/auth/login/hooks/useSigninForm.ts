import { useSignin, useToken } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useSigninForm = () => {
  const { mutateAsync } = useSignin();
  const { setToken } = useToken();
  const { push } = useRouter()
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName || !formData.password) {
      alert("Veuillez remplir tous les champs !");
      return;
    }
    try {
      const res = await mutateAsync(formData);
      
      if (res?.token) {
        setToken(res?.token);
        push("/client")
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    handleChange,
    handleSubmit,
    formData,
  };
};
