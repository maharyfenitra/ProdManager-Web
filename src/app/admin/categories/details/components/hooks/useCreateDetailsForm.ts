import { useState } from "react";
import { useRouter } from "next/navigation";
import { createListCollection } from "@chakra-ui/react";
import {
  useGetAllCategories,
  CategoryType,
} from "@/lib/api/";

import { useCreateCategoryMutation } from "@/lib/api/mutations/categories";

import { useEffect } from "react";
import { ListCollection } from "@chakra-ui/react";
export const useCreateDetailsForm = () => {

  const { data } = useGetAllCategories();
  const [collection, setCollection] = useState<ListCollection | null>(null);
  const [parentId, setParentId] = useState<number | null>(null)
  const { mutate } = useCreateCategoryMutation()

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
