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
  useColorMode,
} from "@chakra-ui/react";
//component
import HypeLogo from "../HypeLogo";


const Intro = () => {
    const { colorMode } = useColorMode();

  return (
    <Box>
        <Center>
        <HypeLogo
            fillColor={colorMode === "dark" ? "white" : "black"}
            height={30}
            />
        </Center>
        <Center>
            <Button variant="outline">Click me</Button>
        </Center>
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