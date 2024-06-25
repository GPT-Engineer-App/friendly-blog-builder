import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
          My Blog
        </Link>
        <Flex>
          <Link as={RouterLink} to="/" color="white" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/posts" color="white">
            Posts
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;