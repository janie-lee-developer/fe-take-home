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
  useColorMode,
} from "@chakra-ui/react";
// api
import { GetProjectStatsQuery } from "hyperspace-client-js";
// three.js
import { Website3DDemo } from "../../../public/3dInit";

interface CreateNftProps {
  projectStats?: GetProjectStatsQuery["getProjectStats"]["project_stats"];
}

const CreateNft: FunctionComponent<CreateNftProps> = (
  { projectStats }
) => {
  const [loading, setLoading] = useState(true);
  console.log("this is from create NFT page", projectStats);

  const { colorMode } = useColorMode();
//backgroundBlendMode: "multiply", backgroundBlendMode={"multiply"}
  return (
    <Box layerStyle={"fullPageScrollEffectSection"} bg={
        colorMode == "dark"
          ? "rgba(0,0,0,0.5) url('/images/dark_galaxy_2.png')"
          : "rgba(172, 230, 207,05) url('/images/light_abstract_art.png')"
      } >
      <Center>Explore NFT/ Projects Launched by Solana</Center>
      <Center>
        <Button variant="outline">Click me</Button>
      </Center>
    </Box>
  );
};

export default CreateNft;
