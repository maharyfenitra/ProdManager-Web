import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createListCollection, ListCollection } from "@chakra-ui/react";
import { useCreateProductMutation } from "@/lib/api/mutations/products";

import { useGetAllCategories, CategoryType } from "@/lib/api/";

export const useCreateDetailsForm = () => {
  const { data } = useGetAllCategories();
  const [collection, setCollection] = useState<ListCollection | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const { mutate } = useCreateProductMutation();

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
    categoryId: "",
    description: "",
    price: "",
  });

  const handleSelectCategoryChange = (e: {
    value: string[];
    items: unknown[];
  }) => {
    setCategoryId(Number(e.value[0]));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    mutate({ ...formData, categoryId });
    console.log("Données du formulaire :", { ...formData, categoryId });
    // Envoyer les données à l'API ici
  };

  const back = () => router.back();

  return {
    handleChange,
    handleSubmit,
    handleSelectCategoryChange,
    back,
    collection,
    formData,
  };
};
