import { FunctionComponent } from "react";
// next
import { GetServerSideProps } from "next";
// components
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
// import HypeLogo from "../components/HypeLogo";
import HypeLogo from "../components/HypeLogo_gradient";
import MarketPlace from "../components/market-place/MarketPlace";
import CreateNft from "../components/create-nft/CreateNft";
import Mint from "../components/mint/Mint";
// api
import {
  GetProjectStatsQuery,
  GetMarketplaceSnapshotsQuery,
  GetWalletStatsQuery,
} from "hyperspace-client-js";
// chakra
import {
  Flex,
  useColorMode,
  Box,
  Input,
  useStyleConfig,
} from "@chakra-ui/react";

interface IndexProps {
  dataProjectStats: GetProjectStatsQuery["getProjectStats"];
  dataPopularStats: GetProjectStatsQuery["getProjectStats"];
  dataSnapShots: GetMarketplaceSnapshotsQuery["getMarketPlaceSnapshots"]["market_place_snapshots"];
  dataWalletStats: GetWalletStatsQuery["getWalletStats"];
}

const Index: FunctionComponent<IndexProps> = ({
  dataProjectStats,
  dataPopularStats,
  dataSnapShots,
  dataWalletStats,
}) => {
  const { colorMode } = useColorMode();
  const styles = useStyleConfig("Input");
  return (
    <Container height="100vh">
      <Flex w={"100%"} h={"80px"} alignItems={"center"} px={4}>
        <HypeLogo
          fillColor={
            colorMode === "dark"
              ? "url(#logo-gradient-dark)"
              : "url(#logo-gradient-light)"
          }
          height={30}
        />
        <Input variant={"outline"} placeholder={"Search"} />
      </Flex>
      <DarkModeSwitch />
      <Box
        w={"100%"}
        h={"100vh"}
        overflow={"auto"}
        position={"relative"}
        scrollSnapType={"y mandatory"}
      >
        <MarketPlace
          projectStats={dataProjectStats}
          walletStats={dataWalletStats}
          popularStats={dataPopularStats}
        />
        <CreateNft snapShots={dataSnapShots} />
        <Mint />
      </Box>
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

  const payloadPopularStats = JSON.stringify({
    order_by: {
      field_name: "volume_1day",
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

  const payloadWalletStats = JSON.stringify({
    order_by: {
      field_name: "rank",
      sort_order: "ASC",
    },
    pagination_info: {
      page_number: 1,
      page_size: 6,
    },
  });

  const urlProjectStats =
    "https://beta.api.solanalysis.com/rest/get-project-stats";

  const urlSnapShots =
    "https://beta.api.solanalysis.com/rest/get-market-place-snapshots";

  const urlWalletStats =
    "https://beta.api.solanalysis.com/rest/get-wallet-stats";

  const resProjectStats = await fetch(urlProjectStats, {
    method: "POST",
    headers,
    body: payloadProjectStats,
  });

  const resPopularStats = await fetch(urlProjectStats, {
    method: "POST",
    headers,
    body: payloadPopularStats,
  });

  const resSnapShots = await fetch(urlSnapShots, {
    method: "POST",
    headers,
    body: payloadSnapShots,
  });

  const resWalletStats = await fetch(urlWalletStats, {
    method: "POST",
    headers,
    body: payloadWalletStats,
  });

  const dataProjectStats = await resProjectStats.json();
  const dataPopularStats = await resPopularStats.json();
  const dataSnapShots = await resSnapShots.json();
  const dataWalletStats = await resWalletStats.json();

  return {
    props: {
      dataProjectStats,
      dataPopularStats,
      dataSnapShots,
      dataWalletStats,
    },
  };
};

export default Index;
