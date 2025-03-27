import { HStack, Input, Button } from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export const CategorySearchForm = () => {
  const { push } = useRouter()
  return (
    <HStack gap={2}>
      <Input placeholder="Rechercher une catégorie" />
      <Button colorScheme="blue">
        <SearchIcon />
        Rechercher
      </Button>
      <Button colorScheme="green" onClick={()=> push("categories/details")}>
        <AddIcon />
        Nouvelle Catégorie
      </Button>
    </HStack>
  );
};


