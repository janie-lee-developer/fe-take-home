// react
import { useContext, useEffect, useState, FunctionComponent } from "react";
// chakra
import {
  Grid,
  GridItem,
  GridProps,
  Flex,
  Center,
  Button,
  Box,
  Text,
  Image,
  Heading,
  useColorMode,
  color,
  Container,
} from "@chakra-ui/react";
//component
// import HypeLogo from "../HypeLogo";
import HypeLogo from "../HypeLogo_gradient";

const Intro = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Center>
        <HypeLogo
          fillColor={
            colorMode === "dark"
              ? "url(#logo-gradient-dark)"
              : "url(#logo-gradient-light)"
          }
          width={"80%"}
        />
      </Center>
      <Box mt={"30px"} width={"80%"} margin={"10px auto"}>
        <Text variant={"style4"}>The most powerful NFT</Text>
        <Heading variant="intro">
          <Container variant={"highlight"}>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"} color="red">
                marketplace
              </Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"} color="orange">
                launchpad
              </Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"} color="yellow">
                wallet tracker
              </Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"}>leaderboards</Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"}>aggregator</Text>
            </Box>
          </Container>
        </Heading>
      </Box>
      <Center>{/* <Button variant="outline">Click me</Button> */}</Center>
    </Box>
  );
};

export default Intro;

// The most powerful NFT
//marketplace
//launchpad
//wallet tracker
//leaderboards
//aggregator
