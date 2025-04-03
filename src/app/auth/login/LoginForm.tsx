"use client";

import {
    Box,
    Button,
    Field,
    Input,
    VStack,
    Text,
} from "@chakra-ui/react";

import { useSigninForm } from "./hooks/useSigninForm";
export const LoginForm = () => {
    
    const { handleChange, formData, handleSubmit} = useSigninForm()

    return (
        <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
            <Text textStyle="lg" mb={4} textAlign="center">
                Connexion
            </Text>
            <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                    {/* Email Field */}
                    <Field.Root>
                        <Field.Label>User Name:</Field.Label>
                        <Input
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Entrez votre nom d'utilisateur"
                        />
                    </Field.Root>

                    {/* Password Field */}
                    <Field.Root>
                        <Field.Label>Mot de passe</Field.Label>
                        <Input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Entrez votre mot de passe"
                        />
                    </Field.Root>

                    {/* Submit Button */}
                    <Button type="submit" colorScheme="blue" w="full">
                        Se connecter
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};


