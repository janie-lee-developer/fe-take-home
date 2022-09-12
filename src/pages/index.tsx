// react
import { useContext, useEffect, useState, FunctionComponent } from "react";
// next
import { GetServerSideProps } from "next";
// components
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import HypeLogo from "../components/HypeLogo";
import MarketPlace from "../components/market-place/MarketPlace";
// api
import { HyperspaceClient } from "hyperspace-client-js";
import { GetProjectStatsQuery } from "hyperspace-client-js";
import { APIContext } from "../context/APIContext";
// chakra
import { Flex, useColorMode } from "@chakra-ui/react";

type ProjectStatsType =
  GetProjectStatsQuery["getProjectStats"]["project_stats"];

const Index = ({ data }: { data: ProjectStatsType }) => {
  const { colorMode } = useColorMode();

  // API client for accessing Hyperspace data
  const hyperClient = new HyperspaceClient(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGRSBJbnRlcnZpZXciLCJuYW1lIjoiSHlwZXJzcGFjZSIsImlhdCI6MTUxNjIzOTAyMn0.HDfB97Y1pgQqQ6GshXsh5nz7fA1_ban9MTZDAbgobJk"
  );
  console.log("helloooooooo", data);

  const marketPlaceProps = {
    projectStats: data,
  };

  return (
    <APIContext.Provider value={hyperClient}>
      <Container height="100vh">
        <Flex w={"100%"} h={"80px"} alignItems={"center"} px={4}>
          <HypeLogo
            fillColor={colorMode === "dark" ? "white" : "black"}
            height={30}
          />
        </Flex>
        <DarkModeSwitch />
        <Flex
          w={"100%"}
          h={"100vh"}
          overflow={"auto"}
          position={"relative"}
          border={"1px solid red"}
        >
          <MarketPlace children={undefined} {...marketPlaceProps} />
        </Flex>
      </Container>
    </APIContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGRSBJbnRlcnZpZXciLCJuYW1lIjoiSHlwZXJzcGFjZSIsImlhdCI6MTUxNjIzOTAyMn0.HDfB97Y1pgQqQ6GshXsh5nz7fA1_ban9MTZDAbgobJk";

  const headers = {
    Authorization: key,
    "Content-Type": "application/json",
  };

  const payload = JSON.stringify({
    order_by: {
      field_name: "market_cap",
      sort_order: "DESC",
    },
  });

  const url = "https://beta.api.solanalysis.com/rest/get-project-stats";

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: payload,
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Index;

//--------------------------------------snapshots-------------------------
//   const headers = {
//     Authorization: key,
//     "Content-Type": "application/json",
//   };
//
//   const payload = JSON.stringify({
//     condition: {
//       project_ids: [
//         {
//           project_id: "degods",
//         },
//       ],
//     },
//     order_by: {
//       field_name: "lowest_listing_block_timestamp",
//       sort_order: "DESC",
//     },
//     pagination_info: {
//       page_number: 1,
//     },
//   });
//
//   const url =
//     "https://beta.api.solanalysis.com/rest/get-market-place-snapshots";
