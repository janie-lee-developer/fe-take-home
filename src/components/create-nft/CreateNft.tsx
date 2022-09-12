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
} from "@chakra-ui/react";
// api
import { GetProjectStatsQuery } from "hyperspace-client-js";
// three.js
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import SceneInit from "../../../public/SceneInit";

import { Website3DDemo } from "../../../public/3dInit";

type ProjectStatsType =
  GetProjectStatsQuery["getProjectStats"]["project_stats"];

interface CreateNftProps {
  projectStats?: ProjectStatsType;
  children: React.ReactNode;
}

const CreateNft: FunctionComponent<CreateNftProps> = (
  { projectStats, children }: CreateNftProps,
  props: BoxProps
) => {
  const [loading, setLoading] = useState(true);
  console.log("this is from create NFT page", projectStats);

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
    <Box layerStyle={"fullPageScrollEffectSection"} {...props}>
      <Center>Create your NFT</Center>
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
    </Box>
  );
};

export default CreateNft;
