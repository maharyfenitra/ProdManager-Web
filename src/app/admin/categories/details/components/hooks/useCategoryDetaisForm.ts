import { useState } from "react";
import { useRouter } from "next/navigation";
import { createListCollection } from "@chakra-ui/react";
import { groupBy } from "es-toolkit";
export const useCategoryDetailsForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nom: "",
    parent: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire :", formData);
    // Envoyer les données à l'API ici
  };

  const back = () => router.back();

  return {
    handleChange,
    handleSubmit,
    back,
    categories,
    collection,
    formData
  };
};

const collection = createListCollection({
  items: [
    { label: "Naruto", value: "naruto", category: "Anime" },
    { label: "One Piece", value: "one-piece", category: "Anime" },
    { label: "Dragon Ball", value: "dragon-ball", category: "Anime" },
    {
      label: "The Shawshank Redemption",
      value: "the-shawshank-redemption",
      category: "Movies",
    },
    { label: "The Godfather", value: "the-godfather", category: "Movies" },
    { label: "The Dark Knight", value: "the-dark-knight", category: "Movies" },
  ],
});

const categories = Object.entries(
  groupBy(collection.items, (item) => item.category)
);
