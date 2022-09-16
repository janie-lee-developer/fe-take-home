// react
import { useEffect, useState } from "react";
// chakra
import {
  Center,
  Button,
  Box,
  Text,
  Image,
  useColorMode,
  useStyleConfig,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
// api
import { GetMarketplaceSnapshotsQuery } from "hyperspace-client-js";

interface MintProps {
  snapShots: GetMarketplaceSnapshotsQuery["getMarketPlaceSnapshots"];
}

const CreateNft = ({ snapShots }: MintProps) => {
  console.log("mint page", snapShots);
  const { colorMode } = useColorMode();
  const styles = useStyleConfig("Link");
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    if (snapShots && snapShots.market_place_snapshots) {
      setStats(snapShots.market_place_snapshots);
    }
  });

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
      <Center>
        <Text mx={"auto"} w={"80%"} variant={"style6"} textAlign={"center"}>
          Explore NFT/ Projects Launched by Solana
        </Text>
      </Center>
      <Box my={"20px"} mx={"auto"} w={"30px"}>
        <Button variant="outline">Buy now!</Button>
      </Box>
      <SimpleGrid columns={5} row={2} padding={2} spacing={"30px"}>
        {stats.map(({ meta_data_img }) => {
          return (
            <Box>
              <Link>
                <Image __css={styles} src={meta_data_img} alt="img" />
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
      <Link href="#marketPlace" variant={"chevronButton2"}>
        <ChevronUpIcon />
      </Link>
      <Text variant={"style3"}>To top of the page</Text>
    </Box>
  );
};

export default CreateNft;
