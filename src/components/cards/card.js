import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import coffee from "../../assets/coffee.jpeg";
import { GetValue } from "../../api/getvalues";

const Card = (props) => {
  const [datafetched, setDataFetched] = useState(false);
  const [bookedData, setBookedData] = useState([]);

  const callApi = () => {
    let serviceData = [];
    try {
      GetValue()
        .then((res) => {
          if (res !== null) {
            const data = res.data;
            console.log("data is : ", data);

            for (let i = 0; i < data.length; i++) {
              const service = data[i].ServiceTypeRelations[i].ServiceType.name;
              // const price = data[0].Variations;
              console.log(service);
              serviceData.push(service);
            }
            setBookedData([...serviceData]);
          } else {
            console.log("no data is there");
          }
        })
        .catch((err) => console.log("serviceData: ", err));
    } catch (err) {
      console.log("Error : ", err);
      setDataFetched(false);
    }
  };

  useEffect(() => {
    try {
      callApi();
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Box bg="Window" overflow="hidden" maxW="30rem">
      <Flex p="3" direction="row" justify="space-evenly">
        <Image src={coffee} alt="cofee" boxSize="20" borderRadius="lg" />
        <Box p="3">this is a sample text.</Box>
        {bookedData !== null
          ? bookedData.map((value) => {
              console.log("this is value ", value);
              return <Text>{value}</Text>;
            })
          : console.log("not rendered text")}
      </Flex>
    </Box>
  );
};

export default Card;
