import React, { useEffect, useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import coffee from "../../assets/coffee.jpeg";
import { GetValue } from "../../api/getvalues";

const Card = (props) => {
  const [datafetched, setDataFetched] = useState(false);

  const callApi = () => {
    try {
      GetValue().then((res) => {
        if (res !== null) {
          console.log("data is : ", res);
        }
      });
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  useEffect(() => {
    try {
      callApi();
    } catch (err) {
      console.log(err);
    }
  }, []);

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
