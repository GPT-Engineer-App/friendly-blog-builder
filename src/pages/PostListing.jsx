import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const PostListing = () => {
  const posts = [
    { id: 1, title: "First Post", excerpt: "This is the excerpt for the first post." },
    { id: 2, title: "Second Post", excerpt: "This is the excerpt for the second post." },
    { id: 3, title: "Third Post", excerpt: "This is the excerpt for the third post." },
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>Blog Posts</Heading>
      <VStack spacing={4} align="stretch">
        {posts.map((post) => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">
              <Link as={RouterLink} to={`/post/${post.id}`}>
                {post.title}
              </Link>
            </Heading>
            <Text mt={4}>{post.excerpt}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PostListing;