import { FunctionComponent } from "react";
// next
import { GetServerSideProps } from "next";
import Link from "next/link";
// components
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import HypeLogo from "../components/HypeLogo";
import MarketPlace from "../components/market-place/MarketPlace";
import CreateNft from "../components/create-nft/CreateNft";
import Mint from "../components/mint/Mint";
// api
import {
  GetProjectStatsQuery,
  GetMarketplaceSnapshotsQuery,
} from "hyperspace-client-js";
// chakra
import { Flex, useColorMode, Box, useStyleConfig } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface IndexProps {
  dataProjectStats: GetProjectStatsQuery["getProjectStats"];
  dataSnapShots: GetMarketplaceSnapshotsQuery["getMarketPlaceSnapshots"]["market_place_snapshots"];
}

const Index: FunctionComponent<IndexProps> = ({
  dataProjectStats,
  dataSnapShots,
}) => {
  const { colorMode } = useColorMode();
  const styles = useStyleConfig("DownChevron");

  const handleChevronDown = () => {
    console.log("this is height", window.innerHeight);

    // window.scrollBy(0, window.innerHeight + 500);
    // window.scrollBy({
    //   top: 500,
    //   left: 100,
    //   behavior: "smooth",
    // });
  };

  return (
    <Container height="100vh">
      <Flex w={"100%"} h={"80px"} alignItems={"center"} px={4}>
        <HypeLogo
          fillColor={colorMode === "dark" ? "white" : "black"}
          height={30}
        />
      </Flex>
      <DarkModeSwitch />
      <Box
        w={"100%"}
        h={"100vh"}
        overflow={"auto"}
        position={"relative"}
        scrollSnapType={"y mandatory"}
      >
        <MarketPlace projectStats={dataProjectStats} />
        <CreateNft snapShots={dataSnapShots} />
        <Mint />
      </Box>
      {/* <ChevronDownIcon
        __css={styles}
        onClick={handleChevronDown}
        id="chevronDown"
      /> */}
      {/* <a href="#mintNFT">
        <ChevronDownIcon __css={styles} id="chevronDown" />
      </a> */}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGRSBJbnRlcnZpZXciLCJuYW1lIjoiSHlwZXJzcGFjZSIsImlhdCI6MTUxNjIzOTAyMn0.HDfB97Y1pgQqQ6GshXsh5nz7fA1_ban9MTZDAbgobJk";

  const headers = {
    Authorization: key,
    "Content-Type": "application/json",
  };

  const payloadProjectStats = JSON.stringify({
    order_by: {
      field_name: "market_cap",
      sort_order: "DESC",
    },
    pagination_info: {
      page_number: 1,
      page_size: 6,
    },
  });

  const payloadSnapShots = JSON.stringify({
    condition: {
      project_ids: [
        {
          project_id: "degods",
        },
      ],
    },
    order_by: {
      field_name: "lowest_listing_block_timestamp",
      sort_order: "DESC",
    },
    pagination_info: {
      page_number: 1,
    },
  });

  const urlProjectStats =
    "https://beta.api.solanalysis.com/rest/get-project-stats";

  const urlSnapShots =
    "https://beta.api.solanalysis.com/rest/get-market-place-snapshots";

  const resProjectStats = await fetch(urlProjectStats, {
    method: "POST",
    headers,
    body: payloadProjectStats,
  });

  const resSnapShots = await fetch(urlSnapShots, {
    method: "POST",
    headers,
    body: payloadSnapShots,
  });

  const dataProjectStats = await resProjectStats.json();
  const dataSnapShots = await resSnapShots.json();

  return {
    props: {
      dataProjectStats,
      dataSnapShots,
    },
  };
};

export default Index;
