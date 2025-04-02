"use client";

import {
    Box,
    Button,
    Field,
    Input,
    VStack,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert("Veuillez remplir tous les champs !");
            return;
        }
        alert(`Connexion réussie pour ${formData.email}`);
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
            <Text textStyle="lg" mb={4} textAlign="center">
                Connexion
            </Text>
            <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                    {/* Email Field */}
                    <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Entrez votre email"
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


