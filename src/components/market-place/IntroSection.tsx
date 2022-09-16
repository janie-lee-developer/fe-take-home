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
        {/* <Heading>hyperspace</Heading> */}
      </Center>
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
