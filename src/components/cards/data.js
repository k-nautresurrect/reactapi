import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import coffee from "../../assets/coffee.jpeg";
import { GetValue } from "../../api/getvalues";

const CardData = (props) => {
  const [datafetched, setDataFetched] = useState(false);
  const [bookedData, setBookedData] = useState([]);
  const [prices, setPrice] = useState([]);

  const callApi = () => {
    let serviceData = [];
    let priceData = [];
    try {
      GetValue()
        .then((res) => {
          if (res !== null) {
            const data = res.data;
            console.log("data is : ", data);

            for (let i = 0; i < data.length; i++) {
              if (i <= 1) {
                let service = data[0].ServiceTypeRelations[i].ServiceType.name;
                serviceData.push(service);
              }
              const price = data[i].Variations[0].price;
              priceData.push(price);
            }
            return serviceData;
          } else {
            console.log("no data is there");
          }
        })
        .then((service) => setBookedData(service))
        .then(() => setPrice(priceData))
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
  }, []);

  return (
    <Box bg="Window" overflow="hidden" maxW="30rem">
      <Flex p="3" direction="row" justify="space-evenly">
        <Image src={coffee} alt="cofee" boxSize="20" borderRadius="lg" />
        <Box p="3">this is a sample text.</Box>
        {bookedData.length !== 0
          ? bookedData.map((value, index) => {
              return <Text key={index}>{value}</Text>;
            })
          : console.log("not rendered text")}
        {prices.length !== 0
          ? prices.map((value, index) => {
              return <Text key={index}>{value} </Text>;
            })
          : console.log("not redered price")}
      </Flex>
    </Box>
  );
};

export default CardData;
