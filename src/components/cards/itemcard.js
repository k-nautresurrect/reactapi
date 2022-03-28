import React, { useState } from "react";
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
  const [action, setAction] = useState({ title: "Add", color: "blue" });
  const [selectStaff, setSelectStaff] = useState("staff");
  const [variant, setVariant] = useState("variant");
  const [badgeColor, setBadgeColor] = useState("gray");

  const handleAdd = (e) => {
    if (e.target.innerHTML === "Remove") {
      setAction({ title: "Add", color: "blue" });
    } else {
      setAction({ title: "Remove", color: "red" });
    }
  };

  const handleStaff = (e) => {
    setSelectStaff(e.target.innerHTML);
  };

  const handleVarient = (e) => {
    setVariant(e.target.innerHTML);
  };

  return (
    <Box bg="Window" maxW="40rem" overflow="hidden" rounded="md" p="3">
      <HStack spacing={8}>
        <Image src={cofee} alt="cofee" boxSize="10rem" rounded="md" />
        <VStack width={"100%"}>
          <HStack align="baseline" width={"100%"} justify={"space-between"}>
            <Box align="baseline">
              <Text display={"inline"} fontSize={"xl"}>
                Arabic Coffee
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
            it is a long established fact that a reader will be attracted by the
            readable content of the page while looking at it
          </Text>
          <Box alignSelf={"flex-start"}>
            <Text fontSize={"md"} fontWeight={"900"}>
              $49
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
                size:
              </Text>
              <Button
                colorScheme={badgeColor}
                rounded={"full"}
                size="xs"
                mx="0.5"
              >
                80g
              </Button>
              <Button
                colorScheme={badgeColor}
                rounded={"full"}
                size="xs"
                mx="0.5"
              >
                160g
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                  size="xs"
                  mx="1"
                >
                  {selectStaff}
                </MenuButton>
                <MenuList onClick={(e) => handleStaff(e)}>
                  <MenuItem>staff1</MenuItem>
                  <MenuItem>staff2</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                  size="xs"
                >
                  {variant}
                </MenuButton>
                <MenuList onClick={(e) => handleVarient(e)}>
                  <MenuItem>house guest</MenuItem>
                  <MenuItem>Dine in</MenuItem>
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
  );
};

export default ItemCard;
