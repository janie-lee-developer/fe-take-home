// react
import { useContext, useEffect, useState } from "react";
// next
import { GetServerSideProps } from "next";
// chakra
import { Grid, GridItem, GridProps } from "@chakra-ui/react";
import {
  ListItem,
  UnorderedList,
  Text,
  Image,
  CircularProgress,
} from "@chakra-ui/react";

// api
import { APIContext } from "../../context/APIContext";
import { GetMarketplaceSnapshotsQuery } from "hyperspace-client-js";

type MarketplaceSnapshots =
  GetMarketplaceSnapshotsQuery["getMarketPlaceSnapshots"]["market_place_snapshots"];

const MarketPlace = (props: any) => {
  const [loading, setLoading] = useState(true);
  console.log(props.data);

  //   if (loading) {
  //     return <CircularProgress color="blue.400" isIndeterminate />;
  //   }

  return <UnorderedList></UnorderedList>;
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
//     }
