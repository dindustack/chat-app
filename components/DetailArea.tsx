import {
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

export function DetailArea() {
// change the color using useState
  const [colorMode, setColorMode] = React.useState('blueColor');

  // funtion to change the color based on user selection
  const toggleColorChange = (color: string) => {
    setColorMode(color);
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
            backgroundColor={colorMode}
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
            backgroundColor={colorMode}
            px={2.5}
            py={3.5}
            fontWeight="medium"
            fontSize="sm"
          >
            Video Chat
          </Button>
        </Flex>

        {/* Conversation */}
        <VStack spacing={3} mt={10}>
          <InputGroup
            border="transparent"
            // px={0}
            // py={4}
            // w="100%"
          >
            <Input
              placeholder="Search in conversation"
              // display="block"
              bgColor="transparent"
              border="none"
              color="bodyColor"
              fontSize="md"
              fontWeight="semibold"
              _placeholder={{ color: "inputChatColor" }}
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
          <HStack justifyContent="space-between">
            <Text fontWeight="semibold" fontSize="md" color="inputChatColor">
              Change Color
            </Text>
            <Spacer />
            <Flex>
              <Circle size={4} bg="blueColor" cursor="pointer" mr={4} onClick={() => toggleColorChange('blueColor')}></Circle>
              <Circle
                size={4}
                bg="purpleColor"
                cursor="pointer"
                mr={4}
                onClick={() => toggleColorChange('purpleColor')}
              ></Circle>
              <Circle size={4} bg="greenColor" cursor="pointer" mr={4} onClick={() => toggleColorChange('greenColor')}></Circle>
              <Circle size={4} bg="orangeColor" cursor="pointer" onClick={() => toggleColorChange('orangeColor')}></Circle>
            </Flex>
          </HStack>
          <Divider
            borderBottom="1px solid"
            borderBottomColor={useColorModeValue(
              "borderColor",
              "darkBorderColor"
            )}
          />
        </VStack>

        {/* divider */}
      </Flex>
    </Flex>
  );
}
