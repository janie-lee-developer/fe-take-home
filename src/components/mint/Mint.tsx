// react
import {
  useContext,
  useEffect,
  useState,
  FunctionComponent,
  HTMLAttributes,
} from "react";

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
  useColorMode,
  useStyleConfig,
  Link,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
// api
import { GetProjectStatsQuery } from "hyperspace-client-js";

interface CreateNftProps {
  projectStats?: GetProjectStatsQuery["getProjectStats"]["project_stats"];
}

const CreateNft: FunctionComponent<CreateNftProps> = ({ projectStats }) => {
  console.log("mint page", projectStats);
  const { colorMode } = useColorMode();
  const styles = useStyleConfig("Link");

  return (
    <Box
      id="mintNFT"
      layerStyle={"fullPageScrollEffectSection"}
      bg={
        colorMode == "dark"
          ? "rgba(0,0,0,0.5) url('/images/dark_galaxy_2.png')"
          : "rgba(172, 230, 207,05) url('/images/light_abstract_art.png')"
      }
    >
      <Center>Explore NFT/ Projects Launched by Solana</Center>
      <Center>
        <Button variant="outline">Click me</Button>
      </Center>
      <Link href="#marketPlace" variant={"chevronButton2"}>
        <ChevronUpIcon />
      </Link>
      <Text variant={"style1"}>To top of the page</Text>
    </Box>
  );
};

export default CreateNft;
