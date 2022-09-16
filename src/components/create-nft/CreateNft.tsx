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
  BoxProps,
  ListItem,
  UnorderedList,
  Text,
  Image,
  CircularProgress,
  chakra,
  useStyleConfig,
  Link,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// api
import { GetMarketplaceSnapshotsQuery } from "hyperspace-client-js";
// three.js
import { Website3DDemo } from "../../../public/3dInit";

interface CreateNftProps {
  snapShots: GetMarketplaceSnapshotsQuery["getMarketPlaceSnapshots"]["market_place_snapshots"];
}

const CreateNft: FunctionComponent<CreateNftProps> = ({ snapShots }) => {
  console.log("this is from create NFT page", snapShots);

  let _APP: any = null;
  useEffect(() => {
    _APP = new Website3DDemo();
    const handleScroll = (event: Event) => {
      _APP.OnScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box id="createNFT" layerStyle={"fullPageScrollEffectSection"}>
      <Center>Create your NFT: Convert digital files into an NFT</Center>
      <Center>
        <Button variant="outline">Click me</Button>
      </Center>
      <Center
        id="model"
        height={"400px"}
        width={"600px"}
        overflow={"hidden"}
        margin={"0 auto"}
      ></Center>
      <Link href="#mintNFT" variant={"chevronButton"}>
        <ChevronDownIcon />
      </Link>
      <Text variant={"style3"}>To Next Page</Text>
    </Box>
  );
};

export default CreateNft;
