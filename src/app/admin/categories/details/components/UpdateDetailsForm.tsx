"use client";

import {
  Box,
  Button,
  Field,
  Input,
  Select,
  Textarea,
  VStack,
  Portal,
  Text,
} from "@chakra-ui/react";

import { useUpdateDetailsForm } from "./hooks/useUpdateDetaisForm";

export const UpdateDetailsForm = () => {
  const { handleSubmit, handleChange, back, handleSelectParentCategoryChange, collection, formData } =
    useUpdateDetailsForm();

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <Box divideY="2px">
        <Box>
          <Text textStyle="lg">
            Mettre à jour la category
          </Text>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <VStack gap={4}>
              {/* Champ Nom */}
              <Field.Root>
                <Field.Label>Nom de la catégorie</Field.Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Smartphones"
                />
              </Field.Root>

              {/* Sélection du parent */}

              {collection != null && (
                <Select.Root collection={collection} name={"parent"} onValueChange={handleSelectParentCategoryChange}>
                  <Select.HiddenSelect />
                  <Select.Label>Category de parent</Select.Label>
                  <Select.Control>
                    <Select.Trigger name="parent">
                      <Select.ValueText placeholder="Select framework" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner >
                      <Select.Content >
                        {collection?.items.map((item) => {
                         
                          return (
                            <Select.Item
                              item={item}
                              key={item.value}
                            >
                              {item.label}
                              <Select.ItemIndicator />
                            </Select.Item>
                          );
                        })}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
              )}

              {/* Description */}
              <Field.Root>
                <Field.Label>Description</Field.Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Décrivez la catégorie..."
                />
              </Field.Root>

              {/* Boutons */}
              <VStack gap={3} w="full">
                <Button type="submit" colorScheme="blue" w="full">
                  Mettre à jour
                </Button>
                <Button colorScheme="gray" w="full" onClick={() => back()}>
                  Retour
                </Button>
              </VStack>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
