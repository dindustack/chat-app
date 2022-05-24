import {
  Button,
  chakra,
  Circle,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import { FaRegFileExcel } from "react-icons/fa";

export function DetailArea() {
  return (
    <Flex
      flexDir="column"
      overflow="auto"
      w="340px"
      flexShrink="0"
      borderLeft="1px solid"
      borderBottomColor={useColorModeValue("borderColor", "darkBorderColor")}
      ml="auto"
      py={5}
      pt={5}
      pb={0}
    >
      <Flex flexDir="column" alignItems="center">
        <chakra.div mr={0} w="60px" h="60px" mb={1}>
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
            <path d="M22 8.5l-10 7-10-7" />
            <path d="M2 15.5l10-7 10 7M12 2v6.5" />
          </svg>
        </chakra.div>
        <chakra.div fontSize="lg" fontWeight="semibold" mb={2.5}>
          CodePen Group
        </chakra.div>
        <chakra.div
          fontSize="xs"
          fontWeight="semibold"
          color={useColorModeValue("messageDate", "darkMessageDate")}
        >
          Created by Chinwendu, 12 May 2022
        </chakra.div>
        <Flex mt={5}>
          <Button
            backgroundColor={"red"}
            px={2.5}
            py={3.5}
            fontWeight="medium"
            fontSize="sm"
            leftIcon={<FiPhoneCall />}
            colorScheme="teal"
            variant="solid"
          >
            Call Group
          </Button>
          <Button
            leftIcon={<FiVideo />}
            ml={2}
            backgroundColor={"red"}
            px={2.5}
            py={3.5}
            fontWeight="medium"
            fontSize="sm"
          >
            Video Chat
          </Button>
        </Flex>

        {/* Conversation */}
        <chakra.div mt={10}>
          <InputGroup border="transparent" px={0} py={15} w="100%">
            <Input
              placeholder="Search in conversation"
              h="100%"
              w="100%"
              display="block"
              bgColor="transparent"
              border="none"
              color="bodyColor"
              px={0}
              py={15}
              fontSize="md"
              fontWeight="semibold"
              _placeholder={{ color: "inputChatColor" }}
              _focus={{
                outline: "none",
              }}
            />
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" mt={9} />
            </InputRightElement>
          </InputGroup>
        </chakra.div>

        {/* divider */}
        <Flex
        justifyContent="space-between"
          fontWeight="semibold"
          fontSize="sm"
          borderBottom="1px solid"
          borderBottomColor={useColorModeValue(
            "borderColor",
            "darkBorderColor"
          )}
          // px={3.5}
          py={0}
        >
          <Text>Change Color</Text>
          <Flex>
            <Circle size={4} bg="blueColor" cursor="pointer" mr={4}></Circle>
            <Circle size={4} bg="purpleColor" cursor="pointer" mr={4}></Circle>
            <Circle size={4} bg="greenColor" cursor="pointer" mr={4}></Circle>
            <Circle size={4} bg="orangeColor" cursor="pointer" ></Circle>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
