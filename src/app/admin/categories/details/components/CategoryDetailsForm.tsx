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
  Text
} from "@chakra-ui/react";

import { useCategoryDetailsForm } from "./hooks/useCategoryDetaisForm";

export const CategoryDetailsForm = () => {
  const {handleSubmit, handleChange, back, categories, collection, formData} = useCategoryDetailsForm()
  
  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <Text textStyle="lg">Formulaire de création d&apos;une nouvelle category</Text>
      <form onSubmit={handleSubmit}>
        <VStack gap={4}>
          {/* Champ Nom */}
          <Field.Root>
            <Field.Label>Nom de la catégorie</Field.Label>
            <Input
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Ex: Smartphones"
            />
          </Field.Root>

          {/* Sélection du parent */}

          <Select.Root collection={collection} size="sm">
            <Select.HiddenSelect />
            <Select.Label>Catégorie parente (optionnel)</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {categories.map(([category, items]) => (
                    <Select.ItemGroup key={category}>
                      <Select.ItemGroupLabel>{category}</Select.ItemGroupLabel>
                      {items.map((item) => (
                        <Select.Item item={item} key={item.value}>
                          {item.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.ItemGroup>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

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
              Créer la catégorie
            </Button>
            <Button colorScheme="gray" w="full" onClick={() => back()}>
              Retour
            </Button>
          </VStack>
        </VStack>
      </form>
    </Box>
  );
};

