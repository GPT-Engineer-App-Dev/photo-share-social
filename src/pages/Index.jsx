import { Container, Text, VStack, Box, Image, SimpleGrid, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "/images/photo1.jpg", description: "A beautiful sunrise" },
    { id: 2, src: "/images/photo2.jpg", description: "Mountain landscape" },
    { id: 3, src: "/images/photo3.jpg", description: "City skyline at night" },
  ]);

  const [newPhoto, setNewPhoto] = useState({ src: "", description: "" });

  const handlePhotoChange = (e) => {
    const { name, value } = e.target;
    setNewPhoto({ ...newPhoto, [name]: value });
  };

  const handlePhotoUpload = () => {
    if (newPhoto.src && newPhoto.description) {
      setPhotos([...photos, { id: photos.length + 1, ...newPhoto }]);
      setNewPhoto({ src: "", description: "" });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} mb={10}>
        <Text fontSize="4xl" fontWeight="bold">Photo Sharing Platform</Text>
        <Text fontSize="lg">Share your moments with the world</Text>
      </VStack>
      <VStack spacing={4} mb={10}>
        <Input
          placeholder="Photo URL"
          name="src"
          value={newPhoto.src}
          onChange={handlePhotoChange}
        />
        <Input
          placeholder="Photo Description"
          name="description"
          value={newPhoto.description}
          onChange={handlePhotoChange}
        />
        <Button onClick={handlePhotoUpload}>Upload Photo</Button>
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