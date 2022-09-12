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
  ListItem,
  UnorderedList,
  Text,
  Image,
  CircularProgress,
  useColorMode,
} from "@chakra-ui/react";
// api
import { APIContext } from "../../context/APIContext";
import { GetProjectStatsQuery } from "hyperspace-client-js";

type ProjectStatsType =
  GetProjectStatsQuery["getProjectStats"]["project_stats"];

interface MarketPlaceProps {
  projectStats?: ProjectStatsType;
  children: React.ReactNode;
}

const MarketPlace: FunctionComponent<MarketPlaceProps> = ({
  projectStats,
  children,
}: MarketPlaceProps) => {
  const [loading, setLoading] = useState(true);
  console.log("this is from marketplace", projectStats);

  const { colorMode } = useColorMode();
  //   if (loading) {
  //     return <CircularProgress color="blue.400" isIndeterminate />;
  //   }

  return (
    <Box
      // bg={"rgba(0,0,0,0.5) url('/images/space.png')"}
      bg={
        colorMode == "dark"
          ? "rgba(0,0,0,0.5) url('/images/space.png')"
          : "rgba(255,255,255,0.7) url('/images/space.png')"
      }
      layerStyle={"fullPageScrollEffectSection"}
    >
      <Center>Market Place</Center>
      <Center>
        <Button variant="outline">Click me</Button>
      </Center>
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
