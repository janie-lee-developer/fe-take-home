import { useEffect, useState, FunctionComponent } from "react";
// components
import MarketList from "./MarketList";
import IntroSection from "./IntroSection";
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
  useStyleConfig,
  Link,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// api
import {
  GetProjectStatsOutput,
  GetProjectStatsQuery,
  GetWalletStatsQuery,
} from "hyperspace-client-js/dist/sdk";
import { ProjectStat } from "hyperspace-client-js/dist/sdk";

interface MarketPlaceProps {
  projectStats: GetProjectStatsOutput;
  project: GetProjectStatsQuery["getProjectStats"]["project_stats"];
  walletStats: GetWalletStatsQuery["getWalletStats"];
  popularStats: GetProjectStatsQuery["getProjectStats"];
}

interface sortProps {
  sorted: GetProjectStatsQuery["getProjectStats"]["project_stats"];
}

const MarketPlace = ({
  projectStats,
  walletStats,
  popularStats,
}: MarketPlaceProps) => {
  const { colorMode } = useColorMode();
  const [top6LeaderBoard, setTop6LeaderBoard] = useState<
    MarketPlaceProps["project"]
  >([]);
  // const [sorted1DVolume, setsorted1DVolume] = useState<
  //   MarketPlaceProps["project"]
  // >([]);
  const [sorted1DVolume, setsorted1DVolume] = useState<
    MarketPlaceProps["project"]
  >([]);
  console.log("market place page return: ", projectStats);
  console.log("walleeettttt", walletStats);
  useEffect(() => {
    if (projectStats?.project_stats) {
      setTop6LeaderBoard(projectStats.project_stats.slice(0, 6));

      // const stats: sortProps["sorted"] = projectStats.project_stats;
      // if (stats && stats[0]) {
      //   const sorted = stats
      //     .sort((a, b) => {
      //       if (a.volume_1day && b.volume_1day) {
      //         return b.volume_1day - a.volume_1day;
      //       }
      //       return 0;
      //     })
      //     .slice(0, 6);
      //   setsorted1DVolume(sorted);
      // }

      setsorted1DVolume(popularStats.project_stats?.slice(0, 6));
    }
  }, []);

  return (
    <Box
      id="marketPlace"
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
              {/* <MarketList projectStats={sorted1DVolume} /> */}
              <MarketList projectStats={sorted1DVolume} />
            </TabPanel>
            <TabPanel>
              <MarketList projectStats={top6LeaderBoard} />
            </TabPanel>
            <TabPanel>TBA</TabPanel>
          </TabPanels>
        </Tabs>
        <IntroSection />
      </SimpleGrid>
      <Link href="#createNFT" variant={"chevronButton2"}>
        <ChevronDownIcon />
      </Link>
      <Text variant={"style2"}>To Next Page</Text>
    </Box>
  );
};

export default MarketPlace;
