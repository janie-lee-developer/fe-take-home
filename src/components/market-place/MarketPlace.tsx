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
import { APIContext } from "../../context/APIContext";
import { GetProjectStatsQuery } from "hyperspace-client-js";

interface MarketPlaceProps {
  projectStats: GetProjectStatsQuery["getProjectStats"]["project_stats"];
}

const MarketPlace: FunctionComponent<MarketPlaceProps> = ({ projectStats }) => {
  const [loading, setLoading] = useState(true);
  console.log("this is from marketplace", projectStats);

  const { colorMode } = useColorMode();
  //   if (loading) {
  //     return <CircularProgress color="blue.400" isIndeterminate />;
  //   }

  return (
    <Box
      bg={
        colorMode == "dark"
          ? "rgba(0,0,0,0.5) url('/images/dark_galaxy_1.png')"
          : "rgba(255,255,255,0.7) url('/images/light_galaxy_1.png')"
      }
      layerStyle={"fullPageScrollEffectSection"}
    >
      <SimpleGrid column={[1, 2]}>
        <MarketList projectStats={projectStats} />
        <IntroSection />
      </SimpleGrid>
    </Box>
  );
};

export default MarketPlace;

//   const hyperClient = useContext(APIContext);
//   const [nfts, setNfts] = useState<MarketplaceSnapshots>([]);

//   useEffect(() => {
//     const getData = async () => {
//       const {
//         getMarketPlaceSnapshots: { market_place_snapshots },
//       } = await hyperClient!.getMarketplaceSnapshot({});
//       setNfts(market_place_snapshots);
//       setLoading(false);
//     };

//     getData();
//   }, []);

//     {
//       /* {nfts?.map(({ project_image, name }) => (
//     <ListItem>
//       <Text>{name}</Text>
//       <Image
//         boxSize="100px"
//         src={
//           project_image ??
//           "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
//         }
//       />
//     </ListItem>
//   ))} */
