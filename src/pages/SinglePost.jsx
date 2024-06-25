import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();
  const post = {
    title: `Post ${postId}`,
    content: `This is the content for post ${postId}.`,
  };

  return (
    <Box p={4}>
      <Heading mb={4}>{post.title}</Heading>
      <Text>{post.content}</Text>
    </Box>
  );
};

export default SinglePost;