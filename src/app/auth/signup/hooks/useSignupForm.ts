import { useSignup } from "@/lib/api";
import { useState } from "react";
export const useSignupForm = () => {
    const { mutate } = useSignup()
    const [formData, setFormData] = useState({
            userName: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
        });
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            for (const key in formData) {
                if (!formData[key as keyof typeof formData]) {
                    alert("Veuillez remplir tous les champs !");
                    return;
                }
            }
            mutate({...formData})
            console.log("Utilisateur inscrit :", formData);
            alert(`Inscription réussie pour ${formData.userName} !`);
        };

        return {
            handleChange,
            handleSubmit,
            formData
        }
    
};
