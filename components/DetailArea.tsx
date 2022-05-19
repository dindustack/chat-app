import { Button, chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FiPhoneCall, FiVideo } from "react-icons/fi";

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
            stroke-Linecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
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
      </Flex>
    </Flex>
  );
}
