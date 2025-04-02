"use client";

import { Box, Button, Field, Input, VStack, Text } from "@chakra-ui/react";
import { useSignupForm } from "./hooks/useSignupForm";

export const SignupForm = () => {
  const { handleChange, handleSubmit, formData } = useSignupForm();

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth="1px" borderRadius="lg">
      <Text textStyle="lg" mb={4} textAlign="center">
        Inscription
      </Text>
      <form onSubmit={handleSubmit}>
        <VStack gap={4}>
          <Field.Root>
            <Field.Label>Nom d&apos;utilisateur</Field.Label>
            <Input
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="johndoe"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Prénom</Field.Label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Nom</Field.Label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Mot de passe</Field.Label>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="SecurePassword123!"
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Numéro de téléphone</Field.Label>
            <Input
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1234567890"
            />
          </Field.Root>

          <Button type="submit" colorScheme="blue" w="full">
            S&apos;inscrire
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
