// react
import { useContext, useEffect, useState, FunctionComponent } from "react";
// chakra
import {
  Grid,
  GridItem,
  GridProps,
  SimpleGrid,
  Flex,
  Center,
  Button,
  Box,
  Text,
  Image,
  Heading,
  useColorMode,
  color,
  Container,
  Link,
  useStyleConfig,
} from "@chakra-ui/react";
import HypeLogo from "../HypeLogo_gradient";

const Intro = () => {
  const { colorMode } = useColorMode();
  const styles = useStyleConfig("Image");
  return (
    <Box>
      <Center>
        <HypeLogo
          fillColor={
            colorMode === "dark"
              ? "url(#logo-gradient-dark)"
              : "url(#logo-gradient-light)"
          }
          width={"80%"}
        />
      </Center>
      <Box mt={"20px"} width={"80%"} margin={"10px auto"}>
        <Text variant={"style4"}>The most powerful NFT</Text>
        <Heading variant="intro">
          <Container variant={"highlight"}>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"}>marketplace</Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"}>launchpad</Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"}>wallet tracker</Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"}>leaderboards</Text>
            </Box>
            <Box overflow={"hidden"} height={"45px"}>
              <Text variant={"style5"}>aggregator</Text>
            </Box>
          </Container>
        </Heading>
      </Box>
      <SimpleGrid
        columns={3}
        // padding={["0", null, null, "3%"]}
        spacing={"15px"}
      >
        <Box>
          <Link>
            <Image
              __css={styles}
              src={"/images/marketplace.png"}
              alt="marketplace"
            />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image
              __css={styles}
              src={"/images/wallet.png"}
              alt="wallettracker"
            />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image __css={styles} src={"/images/launch.png"} alt="launchpad" />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image
              __css={styles}
              src={"/images/aggregator.png"}
              alt="aggregator"
            />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image
              __css={styles}
              src={"/images/leaderboard.png"}
              alt="leaderboard"
            />
          </Link>
        </Box>
        <Box>
          <Link>
            <Image __css={styles} src={"/images/dev.png"} alt="dev" />
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Intro;

// The most powerful NFT
//marketplace
//launchpad
//wallet tracker
//leaderboards
//aggregator
