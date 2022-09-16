// react
import { useContext, useEffect, useState, FunctionComponent } from "react";
// chakra
import { Center, Button, Box, Text, Link, SimpleGrid } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// three.js
import { Website3DDemo } from "../../../public/3dInit";

const CreateNft = () => {
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
      <SimpleGrid
        columns={[1, null, 2]}
        padding={["0", null, null, "3%"]}
        spacing={"30px"}
        h={"90%"}
      >
        <Center
          id="model"
          width={"100%"}
          overflow={"hidden"}
          margin={"0 auto"}
        ></Center>
        <Box>
          <Center mt={"30px"}>
            <Text variant={"style6"}>
              Create your NFT: Convert digital files into an NFT
            </Text>
          </Center>
          <Box mt={"30px"}>
            <Button variant="outline">Launch now!</Button>
          </Box>
        </Box>
      </SimpleGrid>

      <Link href="#mintNFT" variant={"chevronButton"}>
        <ChevronDownIcon />
      </Link>
      <Text variant={"style3"}>To Next Page</Text>
    </Box>
  );
};

export default CreateNft;
