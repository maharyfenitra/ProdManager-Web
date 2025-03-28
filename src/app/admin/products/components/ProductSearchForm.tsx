import { HStack, Input, Button } from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export const ProductSearchForm = () => {
  const { push } = useRouter();
  return (
    <HStack gap={2}>
      <Input placeholder="Rechercher un produit" />
      <Button colorScheme="blue">
        <SearchIcon />
        Rechercher
      </Button>
      <Button colorScheme="green" onClick={() => push("products/details")}>
        <AddIcon />
        Nouveau Produit
      </Button>
    </HStack>
  );
};