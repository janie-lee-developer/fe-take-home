// react
import { useContext, useEffect, useState, FunctionComponent } from "react";
// chakra
import {
  Grid,
  SimpleGrid,
  GridItem,
  GridProps,
  Flex,
  Center,
  Button,
  Box,
  ListItem,
  UnorderedList,
  Text,
  Image,
  CircularProgress,
  useColorMode,
} from "@chakra-ui/react";
// components
import MarketList from "./MarketList";
import IntroSection from "./IntroSection";
// api
import { GetProjectStatsQuery } from "hyperspace-client-js";

interface MarketPlaceProps {
  projectStats: GetProjectStatsQuery["getProjectStats"]["project_stats"];
}

const MarketPlace: FunctionComponent<MarketPlaceProps> = ({ projectStats }) => {
  console.log("this is from marketplace", projectStats);
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={
        colorMode == "dark"
          ? "rgba(0,0,0,0.5) url('/images/dark_galaxy_1.png')"
          : "rgba(255,255,255,0.7) url('/images/light_galaxy_1.png')"
      }
      layerStyle={"fullPageScrollEffectSection"}
    >
      <SimpleGrid
        columns={[1, 2]}
        padding={["3%", "5%"]}
        spacing={"15px"}
        h={"100%"}
      >
        <MarketList projectStats={projectStats} />
        <IntroSection />
      </SimpleGrid>
    </Box>
  );
};

export default MarketPlace;
