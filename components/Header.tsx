import {
  Avatar,
  chakra,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";

import React from "react";
SearchIcon;
import { ColorModeSwitcher } from "../Utils/ColorModeSwitcher";

export function Header() {
  return (
    <Flex
      alignItems="center"
      px={0}
      py={5}
      h="20"
      w="full"
      borderBottom="1px solid"
      borderBottomColor="borderColor"
    >
      <chakra.div>Logo</chakra.div>
      <chakra.div h="80px" zIndex={3} pos="relative" ml="280px">
        <InputGroup border="transparent" px={0} py={15} w="100%">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" mt={9} />
          </InputLeftElement>

          <Input
            placeholder="Search..."
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
        </InputGroup>
      </chakra.div>
      <HStack
        spacing={4}
        alignItems="center"
        cursor="pointer"
        ml="auto"
        flexShrink="0"
      >
        <ColorModeSwitcher />
        <SettingsIcon />
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="md"
        />
      </HStack>
    </Flex>
  );
}
