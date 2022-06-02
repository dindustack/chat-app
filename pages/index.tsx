import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { DetailArea } from "../components/DetailArea";
import { Header } from "../components/Header";

export default function Home() {
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
    <div>
      <Head>
        <title>Messaging App</title>
        <meta name="Chat App" content="Next.js, GraphQL powered by StepZen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        display="flex"
        flexDir="column"
        maxW="1600px"
        h="100vh"
        bg={useColorModeValue("white", "themeBgColor")}
        px={0}
        py="auto"
        overflow="hidden"
      >
        <Header />

        <Flex w="full" flexGrow={1} overflow="hidden">
          <DetailArea
            color={colorMode}
            backgroundColor={buttonBgColor}
            toggleBlueColor={() =>
              handleColorChange("blueColor", "blueBgColor")
            }
            togglePurpleColor={() =>
              handleColorChange("purpleColor", "purpleBgColor")
            }
            toggleGreenColor={() =>
              handleColorChange("greenColor", "greenBgColor")
            }
            toggleOrangeColor={() =>
              handleColorChange("orangeColor", "orangeBgColor")
            }
          />
        </Flex>
      </Container>
    </div>
  );
}
