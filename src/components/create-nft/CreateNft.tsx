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
} from "@chakra-ui/react";
import {
  ListItem,
  UnorderedList,
  Text,
  Image,
  CircularProgress,
} from "@chakra-ui/react";
// api
import { GetProjectStatsQuery } from "hyperspace-client-js";
// three.js
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import SceneInit from "../../../public/3dmodel/SceneInit";

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

  //   useEffect(() => {
  //     const test: any = new SceneInit("myThreeJsCanvas");
  //     test.initialize();
  //     test.animate();

  //     let loadedModel: any;
  //     const glftLoader = new GLTFLoader();
  //     glftLoader.load("/3dmodel/scene.gltf", (gltfScene) => {
  //       loadedModel = gltfScene;

  //       gltfScene.scene.rotation.y = Math.PI / 8;
  //       gltfScene.scene.position.y = 3;
  //       gltfScene.scene.scale.set(10, 10, 10);
  //       test.scene.add(gltfScene.scene);
  //     });

  //     const animate = () => {
  //       if (loadedModel) {
  //         loadedModel.scene.rotation.x += 0.01;
  //         loadedModel.scene.rotation.y += 0.01;
  //         loadedModel.scene.rotation.z += 0.01;
  //       }
  //       requestAnimationFrame(animate);
  //     };
  //     animate();
  //   }, []);
  //   if (loading) {
  //     return <CircularProgress color="blue.400" isIndeterminate />;
  //   } 37, 100, 235

  return (
    <Box
      layerStyle={"fullPageScrollEffectSection"}
      backgroundColor={"hyperBlue"}
      {...props}
    >
      <Center>Create your NFT</Center>
      <Center>
        <Button variant="outline">Click me</Button>
      </Center>
      {/* <Box>
        <canvas id="myThreeJsCanvas" />
      </Box> */}
    </Box>
  );
};

export default CreateNft;
