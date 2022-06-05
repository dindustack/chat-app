import {
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
  chakra,
} from "@chakra-ui/react";

export default function ConversationArea() {
  return (
    <VStack
      overflowY="auto"
      overflowX="hidden"
      pos="relative"
      w="340px"
      flexShrink="0"
      borderRight="1px solid"
      borderRightColor={useColorModeValue("borderColor", "darkBorderColor")}
    >
      <HStack
        p={5}
        cursor="pointer"
        __css={{ transition: "0.2s" }}
        pos="relative"
        _hover={{ bg: "messageHoverBg" }}
        w="100%"
      >
        <Image
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
          alt=""
          boxSize="44px"
          borderRadius="50%"
          objectFit="cover"
          mr={4}
        />
        <VStack>
          <Text fontWeight="semibold" fontSize="md">
            Madison Jones
          </Text>
          <HStack spacing={1} fontSize="sm" fontWeight="medium">
            <chakra.span color="messageColor">
              What time was our meet
            </chakra.span>
            <chakra.span color="messageDate">&bull;</chakra.span>
            <chakra.span color="messageDate" fontSize="sm">20m</chakra.span>
          </HStack>
        </VStack>
      </HStack>
     
      <HStack
        p={5}
        cursor="pointer"
        __css={{ transition: "0.2s" }}
        pos="relative"
        _hover={{ bg: "messageHoverBg" }}
        w="100%"
      >
        <Image
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
          alt=""
          boxSize="44px"
          borderRadius="50%"
          objectFit="cover"
          mr={4}
        />
        <VStack>
          <Text fontWeight="semibold" fontSize="md">
            Madison Jones
          </Text>
          <HStack spacing={1} fontSize="sm" fontWeight="medium">
            <chakra.span color="messageColor">
              What time was our meet
            </chakra.span>
            <chakra.span color="messageDate">&bull;</chakra.span>
            <chakra.span color="messageDate" fontSize="sm">20m</chakra.span>
          </HStack>
        </VStack>
      </HStack>
   
      <HStack
        p={5}
        cursor="pointer"
        __css={{ transition: "0.2s" }}
        pos="relative"
        _hover={{ bg: "messageHoverBg" }}
        w="100%"
      >
        <Image
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png"
          alt=""
          boxSize="44px"
          borderRadius="50%"
          objectFit="cover"
          mr={4}
        />
        <VStack>
          <Text fontWeight="semibold" fontSize="md">
            Madison Jones
          </Text>
          <HStack spacing={1} fontSize="sm" fontWeight="medium">
            <chakra.span color="messageColor">
              What time was our meet
            </chakra.span>
            <chakra.span color="messageDate">&bull;</chakra.span>
            <chakra.span color="messageDate" fontSize="sm">20m</chakra.span>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}

// .msg-username {
//     margin-bottom: 4px;
//     font-weight: 600;
//     font-size: 15px;
//    }
