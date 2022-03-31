import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  VStack,
  Button
} from "@chakra-ui/react";

import cofee from "../../assets/coffee.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ItemCard = (props) => {
  // service name
  // secondary service name
  // drop down variant
  // timings
  // custom radio button using chakra ui
  // make a json object when hit add with post request
  // make a json payload when hit remove with delete request
  const [action, setAction] = useState({ title: "Add", color: "blue" });
  const [variant, setVariant] = useState("variant");
  const [cardData, setCardData] = useState({
    id: "",
    name: "",
    secondaryname: "",
    timmings: {},
    price: "",
    variant: ""
  });
  const [submit, setSubmit] = useState([]);

  const handleAdd = (e) => {
    if (e.target.innerHTML === "Remove") {
      const cardobj = {
        id: props?.currindex,
        name: "",
        secondaryname: "",
        timmings: {},
        price: "",
        variant: ""
      };
      setAction({ title: "Add", color: "blue" });
      setCardData(cardobj);
      const cards = submit.filter((card) => card.id !== cardobj.id);
      setSubmit(cards);
    } else {
      const cardobj = {
        id: props?.currindex,
        name: props?.servicename,
        secondaryname: props?.secondname,
        timmings: props.timing,
        price: props?.price,
        variation: variant
      };
      setAction({ title: "Remove", color: "red" });
      setCardData(cardobj);
      const cards = [];
      cards.push(cardobj);
      setSubmit(cards);
    }
  };

  const handleSubmit = (e) => {
    console.log(submit);
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleVarient = (e) => {
    setVariant(e.target.innerHTML);
  };

  return (
    <>
      <Box bg="Window" maxW="40rem" overflow="hidden" rounded="md" p="3">
        <HStack spacing={8}>
          <Image src={cofee} alt="cofee" boxSize="10rem" rounded="md" />
          <VStack width={"100%"}>
            <HStack align="baseline" width={"100%"} justify={"space-between"}>
              <Box align="baseline">
                <Text display={"inline"} fontSize={"xl"}>
                  {props?.servicename}
                </Text>
                <Text
                  display={"inline"}
                  fontSize={"sm"}
                  fontWeight={"light"}
                  color={"gray.500"}
                  mx="1"
                >
                  250g
                </Text>
              </Box>
              <Box>
                <FontAwesomeIcon icon={faHeart} />
              </Box>
            </HStack>
            <Text fontSize={"sm"} fontWeight={"light"} color={"gray.400"}>
              {props?.secondservice}
            </Text>
            <Box alignSelf={"flex-start"}>
              <Text fontSize={"md"} fontWeight={"900"}>
                {props?.price}
              </Text>
            </Box>
            <HStack width={"100%"} align="baseline" justify={"space-between"}>
              <Box>
                <Text
                  display={"inline"}
                  fontSize={"sm"}
                  fontWeight="light"
                  color={"gray.400"}
                  mx="1"
                >
                  {props?.timing[0].value +
                    " " +
                    props?.timing[0].key +
                    " : " +
                    props?.timing[1].value +
                    " " +
                    props?.timing[1].key}
                </Text>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                    size="xs"
                  >
                    {variant}
                  </MenuButton>
                  <MenuList onClick={(e) => handleVarient(e)}>
                    {props.servicetype
                      ? props.servicetype.map((value, idx) => {
                          return <MenuItem key={idx}>{value}</MenuItem>;
                        })
                      : console.log("not rendered")}
                  </MenuList>
                </Menu>
              </Box>
              <Button
                className="Add"
                variant={"solid"}
                colorScheme={action.color}
                rounded={"full"}
                size="sm"
                onClick={(e) => handleAdd(e)}
              >
                {action.title}
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </Box>
      {submit.length !== 0
        ? console.log("submit is", submit)
        : console.log("submit line")}
      {props?.currindex === props?.index ? (
        <Button
          variant={"solid"}
          colorScheme={"twitter"}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      ) : (
        console.log("not rendered keys and length")
      )}
    </>
  );
};

export default ItemCard;
