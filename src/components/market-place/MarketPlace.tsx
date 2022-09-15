// components
import MarketList from "./MarketList";
import IntroSection from "./IntroSection";
// api
import { GetProjectStatsOutput } from "hyperspace-client-js/dist/sdk";
// chakra
import {
  SimpleGrid,
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  useColorMode,
} from "@chakra-ui/react";

interface MarketPlaceProps {
  projectStats: GetProjectStatsOutput;
}

const MarketPlace = ({ projectStats }: MarketPlaceProps) => {
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
        columns={[1, null, 2]}
        padding={["0", null, null, "3%"]}
        spacing={"15px"}
        h={"90%"}
      >
        <Tabs align={"center"} isFitted={true} variant={"enclosed-colored"}>
          <TabList>
            <Tab>Popular Collection</Tab>
            <Tab>NFT Leaderboard</Tab>
            <Tab>Top Wallets</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MarketList projectStats={projectStats} />
            </TabPanel>
            <TabPanel>TBA</TabPanel>
            <TabPanel>TBA</TabPanel>
          </TabPanels>
        </Tabs>
        <IntroSection />
      </SimpleGrid>
    </Box>
  );
};

export default MarketPlace;
