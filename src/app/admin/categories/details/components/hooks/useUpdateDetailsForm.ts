import { useState } from "react";
import { useRouter } from "next/navigation";
import { createListCollection } from "@chakra-ui/react";
import {
  useGetAllCategories,
  CategoryType,
} from "@/lib/api/";
import { useGetCategoryQuery } from "@/lib/api";

import { useUpdateCategoryMutation } from "@/lib/api/";

import { useEffect } from "react";
import { ListCollection } from "@chakra-ui/react";
import { useParams } from "next/navigation";
export const useUpdateDetailsForm = () => {

  const { data } = useGetAllCategories();
  const [collection, setCollection] = useState<ListCollection | null>(null);
  const [parentId, setParentId] = useState<number | null>(null)
  const params = useParams();
  const id = params?.id;
  const { data: details } = useGetCategoryQuery(Number(id))
  const { mutate } = useUpdateCategoryMutation(Number(id))

  useEffect(() => {
    if (data != null) {
      const categories: CategoryType[] = data;
      const items = categories.map((category) => ({
        label: category.name,
        key: category.id,
        value: category.id,
      }));
      const collection = createListCollection({ items });
      setCollection(collection);
    }
  }, [data]);

  useEffect(()=>{
    console.log("====================================================")
    console.log(id)
    console.log(details)
    setFormData({
      name: details?.name || "",
      description: details?.description || "",
      parentId: ""
    })
  }, [id, details])

  

  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    parentId: "",
    description: "",
  });

  const handleSelectParentCategoryChange = (e: {
    value: string[];
    items: unknown[];
}) =>{
    setParentId(Number(e.value[0]))
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    mutate({...formData, parentId})
    console.log("Données du formulaire :", {...formData, parentId});
    // Envoyer les données à l'API ici
  };

  const back = () => router.back();

  return {
    handleChange,
    handleSubmit,
    handleSelectParentCategoryChange,
    back,
    collection,
    formData,
  };
};
