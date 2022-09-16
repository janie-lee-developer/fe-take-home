import { useEffect, useState, FunctionComponent } from "react";
// components
import MarketList from "./MarketList";
import WalletList from "./WalletList";
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
  Link,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// api
import {
  GetProjectStatsOutput,
  GetProjectStatsQuery,
  GetWalletStatsQuery,
} from "hyperspace-client-js/dist/sdk";

interface MarketPlaceProps {
  projectStats: GetProjectStatsOutput;
  walletStats: GetWalletStatsQuery["getWalletStats"];
  popularStats: GetProjectStatsQuery["getProjectStats"];
}

const MarketPlace = ({
  projectStats,
  walletStats,
  popularStats,
}: MarketPlaceProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="marketPlace"
      bg={
        colorMode == "dark"
          ? "rgba(0,0,0,0.5) url('/images/dark_galaxy_1.png')"
          : "rgba(255,255,255,0.7) url('/images/light_galaxy_1.png')"
      }
      layerStyle={"fullPageScrollEffectSection"}
      overflow={"hidden"}
    >
      <SimpleGrid
        columns={[1, null, 2]}
        padding={["0", null, null, "3%"]}
        spacing={"30px"}
        h={"90%"}
      >
        <Box>
          <Tabs
            size={["sm", "md"]}
            align={"center"}
            isFitted={true}
            variant={"enclosed-colored"}
          >
            <TabList>
              <Tab>Popular Collection</Tab>
              <Tab>NFT Leaderboard</Tab>
              <Tab>Top Wallets</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* <MarketList projectStats={sorted1DVolume} /> */}
                <MarketList projectStats={popularStats.project_stats} />
              </TabPanel>
              <TabPanel>
                <MarketList projectStats={projectStats.project_stats} />
              </TabPanel>
              <TabPanel>
                <WalletList walletStats={walletStats.wallet_stats} />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Center mt={"10px"}>
            <Button variant="outline">Trade Now!</Button>
          </Center>
        </Box>
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
