import { Container, Text, VStack, Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "/images/photo1.jpg", description: "A beautiful sunrise" },
    { id: 2, src: "/images/photo2.jpg", description: "Mountain landscape" },
    { id: 3, src: "/images/photo3.jpg", description: "City skyline at night" },
  ]);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} mb={10}>
        <Text fontSize="4xl" fontWeight="bold">Photo Sharing Platform</Text>
        <Text fontSize="lg">Share your moments with the world</Text>
      </VStack>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {photos.map(photo => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={photo.src} alt={photo.description} />
            <Box p={6}>
              <Text mt={2}>{photo.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;