import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">Welcome to My Blog</Text>
        <Text fontSize="xl">Discover amazing content and stay updated with the latest posts.</Text>
      </VStack>
    </Container>
  );
};

export default Index;