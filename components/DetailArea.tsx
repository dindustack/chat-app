import {
  Box,
  Button,
  chakra,
  Circle,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import { FaRegThumbsUp } from "react-icons/fa";

export function DetailArea() {
  // change the color using useState
  const [colorMode, setColorMode] = React.useState("blueColor");
  const [buttonBgColor, setButtonBgColor] = React.useState("blueBgColor");

  const toggleColorChange = (color: string) => {
    setColorMode(color);
  };

  const toggleButtonBgColor = (color: string) => {
    setButtonBgColor(color);
  };

  const handleColorChange = (color: string, btnColorChange: string) => {
    toggleColorChange(color);
    toggleButtonBgColor(btnColorChange);
  };

  return (
    <Flex
      flexDir="column"
      overflow="auto"
      w="340px"
      flexShrink="0"
      borderLeft="1px solid"
      borderBottomColor={useColorModeValue("borderColor", "darkBorderColor")}
      ml="auto"
      px={5}
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
        <Flex mt={5} w="100%">
          <Button
            backgroundColor={buttonBgColor}
            color={colorMode}
            px={2.5}
            py={3.5}
            fontWeight="medium"
            flexGrow="1"
            fontSize="sm"
            leftIcon={<FiPhoneCall color={colorMode} />}
          >
            Call Group
          </Button>
          <Button
            leftIcon={<FiVideo color={colorMode} />}
            ml={2}
            flexGrow="1"
            backgroundColor={buttonBgColor}
            color={colorMode}
            px={2.5}
            py={3.5}
            fontWeight="medium"
            fontSize="sm"
          >
            Video Chat
          </Button>
        </Flex>
      </Flex>

      {/* Detail */}
      <VStack spacing={3} mt={10}>
        <InputGroup border="transparent">
          <Input
            placeholder="Search in conversation"
            bgColor="transparent"
            border="none"
            color="bodyColor"
            fontSize="md"
            fontWeight="semibold"
            _placeholder={{ color: "inputChatColor" }}
            paddingInlineStart={0}
            _focus={{
              outline: "none",
            }}
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>

        <Divider
          borderBottom="1px solid"
          borderBottomColor={useColorModeValue(
            "borderColor",
            "darkBorderColor"
          )}
        />

        <Flex justifyContent="space-between" w="100%">
          <Text fontWeight="semibold" fontSize="md" color="inputChatColor">
            Change Color
          </Text>
          <Flex>
            <Circle
              size={4}
              bg="blueColor"
              cursor="pointer"
              mr={4}
              onClick={() => handleColorChange("blueColor", "blueBgColor")}
            ></Circle>
            <Circle
              size={4}
              bg="purpleColor"
              cursor="pointer"
              mr={4}
              onClick={() => handleColorChange("purpleColor", "purpleBgColor")}
            ></Circle>
            <Circle
              size={4}
              bg="greenColor"
              cursor="pointer"
              mr={4}
              onClick={() => handleColorChange("greenColor", "greenBgColor")}
            ></Circle>
            <Circle
              size={4}
              bg="orangeColor"
              cursor="pointer"
              onClick={() => handleColorChange("orangeColor", "orangeBgColor")}
            ></Circle>
          </Flex>
        </Flex>
        <Divider
          borderBottom="1px solid"
          borderBottomColor={useColorModeValue(
            "borderColor",
            "darkBorderColor"
          )}
        />
        <HStack justifyContent="space-between" w="100%">
          <Text fontWeight="semibold" fontSize="md" color="inputChatColor">
            Change Emoji
          </Text>

          <FaRegThumbsUp color="inputChatColor" />
        </HStack>
        <Divider
          borderBottom="1px solid"
          borderBottomColor={useColorModeValue(
            "borderColor",
            "darkBorderColor"
          )}
        />
      </VStack>
    </Flex>
  );
}
