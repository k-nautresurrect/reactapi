import React from "react";
import { Box, Center, Flex, Image } from "@chakra-ui/react";
import coffee from "../../assets/coffee.jpeg";

const Card = (props) => {
  return (
    <Box bg="Window" overflow="hidden" maxW="30rem">
      <Flex p="3" direction="row" justify="space-evenly">
        <Image src={coffee} alt="cofee" boxSize="20" borderRadius="lg" />
        <Box p="3">this is a sample text.</Box>
      </Flex>
    </Box>
  );
};

export default Card;
