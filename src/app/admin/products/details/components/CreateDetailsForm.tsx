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

import { useCreateDetailsForm } from "./hooks/useCreateDetailsForm";

export const CreateDetailsForm = () => {
    const { handleSubmit, handleChange, back, handleSelectCategoryChange, collection, formData } =
        useCreateDetailsForm();

    return (
        <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
            <Box divideY="2px">
                <Box>
                    <Text textStyle="lg">
                        Product Creation Form
                    </Text>
                </Box>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <VStack gap={4}>
                            
                            {/* Category Selection */}
                            {collection != null && (
                                <Select.Root collection={collection} name={"category"} onValueChange={handleSelectCategoryChange}>
                                    <Select.HiddenSelect />
                                    <Select.Label>Category</Select.Label>
                                    <Select.Control>
                                        <Select.Trigger name="category">
                                            <Select.ValueText placeholder="Select a category" />
                                        </Select.Trigger>
                                        <Select.IndicatorGroup>
                                            <Select.Indicator />
                                        </Select.IndicatorGroup>
                                    </Select.Control>
                                    <Portal>
                                        <Select.Positioner>
                                            <Select.Content>
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

                            {/* Product Name Field */}
                            <Field.Root>
                                <Field.Label>Product Name</Field.Label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="E.g., iPhone 14"
                                />
                            </Field.Root>

                            {/* Product Description Field */}
                            <Field.Root>
                                <Field.Label>Description</Field.Label>
                                <Textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe the product..."
                                />
                            </Field.Root>

                            {/* Product Price Field */}
                            <Field.Root>
                                <Field.Label>Price</Field.Label>
                                <Input
                                    name="price"
                                    type="number"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="E.g., 999.99"
                                />
                            </Field.Root>

                            {/* Action Buttons */}
                            <VStack gap={3} w="full">
                                {/* Submit Button */}
                                <Button type="submit" colorScheme="blue" w="full">
                                    Create Product
                                </Button>
                                {/* Back Button */}
                                <Button colorScheme="gray" w="full" onClick={() => back()}>
                                    Back
                                </Button>
                            </VStack>
                        </VStack>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};