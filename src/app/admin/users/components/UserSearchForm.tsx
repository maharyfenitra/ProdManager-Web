import { HStack, Input, Button } from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

export const UserSearchForm = () => {
  const { push } = useRouter();
  return (
    <HStack gap={2}>
      <Input placeholder="Rechercher un produit" />
      <Button colorScheme="blue">
        <SearchIcon />
        Rechercher
      </Button>
      <Button colorScheme="green" onClick={() => push("users/details")}>
        <AddIcon />
        New user
      </Button>
    </HStack>
  );
};