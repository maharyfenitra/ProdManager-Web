"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Navbar, LinkType } from "../components/navbar/navbar";

const queryClient = new QueryClient();

export function MainLayout({ children, links }: { children: ReactNode, links: LinkType[] }) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarDisplay = useBreakpointValue({ base: "none", md: "block" });

  return (
    <QueryClientProvider client={queryClient}>
      
        <Navbar links={links}/>
        <Flex direction="column" minHeight="100vh">
          {/* Main content */}
          <Flex flex="1" direction={{ base: "column", md: "row" }}>
            {/* Left Sidebar - caché sur mobile */}
            <Box 
              as="aside" 
              bg="gray.100" 
              width={{ base: "100%", md: "200px" }}
              display={sidebarDisplay}
              p={4}
              order={{ base: 2, md: 1 }}
            >
              {isMobile && (
                <Button 
                  width="100%" 
                  mt={2}
                  onClick={() => console.log('Menu gauche mobile')}
                >
                  Menu Gauche
                </Button>
              )}
            </Box>

            {/* Main content area */}
            <Box 
              as="main" 
              flex="1" 
              p={4}
              order={{ base: 1, md: 2 }}
              minWidth="0" // Empêche le débordement
            >
              {children}
            </Box>

            {/* Right Sidebar - caché sur mobile */}
            <Box 
              as="aside" 
              bg="gray.100" 
              width={{ base: "100%", md: "200px" }}
              display={sidebarDisplay}
              p={4}
              order={3}
            >
              {isMobile && (
                <Button 
                  width="100%" 
                  mt={2}
                  onClick={() => console.log('Menu droit mobile')}
                >
                  Menu Droit
                </Button>
              )}
            </Box>
          </Flex>

          {/* Footer */}
          <Box as="footer" bg="teal.500" p={4} height={{ base: "auto", md: "60px" }}>
            <Text color="white" textAlign="center">
              Footer
            </Text>
          </Box>
        </Flex>
      
    </QueryClientProvider>
  );
}