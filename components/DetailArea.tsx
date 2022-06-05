import Link from 'next/link'
// import { useDisclosure } from "@chakra-ui/react"
import {
  Box,
  Button,
  Center,
  chakra,
  Circle,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiImage, FiPhoneCall, FiVideo } from "react-icons/fi";
import { SearchIcon } from "@chakra-ui/icons";
import { FaRegThumbsUp } from "react-icons/fa";

import { images } from "../Utils/Image";

interface IDetailAreaProps {
  color: string;
  backgroundColor: string;
  toggleBlueColor: any;
  togglePurpleColor: any;
  toggleGreenColor: any;
  toggleOrangeColor: any;
}

export function DetailArea({
  color,
  backgroundColor,
  toggleBlueColor,
  togglePurpleColor,
  toggleGreenColor,
  toggleOrangeColor,
}: IDetailAreaProps) {
  // const { isOpen, onOpen, onClose } = useDisclosure()
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
            backgroundColor={backgroundColor}
            color={color}
            px={2.5}
            py={3.5}
            fontWeight="medium"
            flexGrow="1"
            fontSize="sm"
            leftIcon={<FiPhoneCall color={color} />}
          >
            Call Group
          </Button>
          <Button
            leftIcon={<FiVideo color={color} />}
            ml={2}
            flexGrow="1"
            backgroundColor={backgroundColor}
            color={color}
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
              onClick={toggleBlueColor}
            ></Circle>
            <Circle
              size={4}
              bg="purpleColor"
              cursor="pointer"
              mr={4}
              onClick={togglePurpleColor}
            ></Circle>
            <Circle
              size={4}
              bg="greenColor"
              cursor="pointer"
              mr={4}
              onClick={toggleGreenColor}
            ></Circle>
            <Circle
              size={4}
              bg="orangeColor"
              cursor="pointer"
              onClick={toggleOrangeColor}
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

      <chakra.div mt={8}>
        <HStack mb={5}>
          <Icon as={FiImage} w={6} h={6} mr={2} color="detailFontColor" />
          <Text fontSize="sm" fontWeight={600} color="detailFontColor">
            Shared photos
          </Text>
        </HStack>

        {/* Images*/}

        <SimpleGrid columns={4} spacing={2} mb={5}>
          {React.Children.toArray(
            images.map((image) => (
              // eslint-disable-next-line react/jsx-key
              <Image
                alt="random"
                src={image.src}
                boxSize="70px"
                objectFit="cover"
                borderRadius="lg"
                objectPosition="center"
              />
            ))
          )}
        </SimpleGrid>

        <Center mb={5}>
          <Text color={color} fontSize="md" fontWeight="semibold">View more</Text>
        </Center>

        <chakra.div mb={0} mt="auto" >
        <Link href="https://twitter.com/dindustack" target="_blank">
          <Center __css={{ transition: "0.3s"}}>
            <Text>Follow me on twitter</Text>
          </Center>
        </Link>
        </chakra.div>
      </chakra.div>
    </Flex>
  );
}
