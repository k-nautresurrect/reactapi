import React from "react";
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
  return (
    <Box bg="Window" maxW="40rem" overflow="hidden" rounded="md" p="3">
      <HStack spacing={8}>
        <Image src={cofee} alt="cofee" boxSize="10rem" rounded="md" />
        <VStack width={"100%"}>
          <HStack align="baseline" width={"100%"} justify={"space-between"}>
            <Box align="baseline">
              <Text display={"inline"} fontSize={"xl"}>
                Arabic Coffe
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
              <Button rounded={"full"} size="xs" mx="0.5">
                80g
              </Button>
              <Button rounded={"full"} size="xs" mx="0.5">
                160g
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
                  size="xs"
                  mx="1"
                >
                  Staff
                </MenuButton>
                <MenuList>
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
                  Variant
                </MenuButton>
                <MenuList>
                  <MenuItem>house guest</MenuItem>
                  <MenuItem>Dine in</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Button
              variant={"solid"}
              colorScheme="blue"
              rounded={"full"}
              size="sm"
            >
              Add
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ItemCard;
