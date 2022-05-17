import { Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
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
      </Container>
    </div>
  );
}
