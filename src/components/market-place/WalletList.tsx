// react
import { useEffect, useState, FunctionComponent } from "react";
// chakra
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Text,
  Image,
  useColorMode,
  Box,
  Flex,
  useStyleConfig,
  Stat,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
// api
import { GetWalletStatsQuery } from "hyperspace-client-js/dist/sdk";

interface MarketListProps {
  walletStats: GetWalletStatsQuery["getWalletStats"]["wallet_stats"];
}

const WalletList = ({ walletStats }: MarketListProps) => {
  const { colorMode } = useColorMode();
  const [stats, setStats] = useState<any[]>([]);
  const styles = useStyleConfig("ThumbNail");

  useEffect(() => {
    if (walletStats && walletStats[0]) {
      setStats(walletStats);
    }
  });

  return (
    <TableContainer>
      <Table
        variant="simple"
        bgColor={
          colorMode == "dark" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)"
        }
      >
        <Tbody>
          {stats.map(
            (
              {
                address,
                portfolio_value,
                num_bought,
                max_purchase_item: { metadata_img, name },
              },
              inx
            ) => {
              return (
                <Tr key={inx}>
                  <Td p={"16px 0 16px 20px"}>
                    <Text fontWeight={"semibold"}>{inx + 1}</Text>
                  </Td>
                  <Td>
                    <Flex>
                      <Box w={"50px"} h={"50px"}>
                        <Image
                          src={"images/no_img.png"}
                          fallbackSrc={"images/no_img.png"}
                          alt={address ?? "n/a"}
                          __css={styles}
                        />
                      </Box>
                      <Flex
                        flexDirection={"column"}
                        overflow={"hidden"}
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                        pl={"10px"}
                        maxW={["125px", "250px", "150px", "200px"]}
                        textOverflow={"ellipsis"}
                      >
                        <p style={{ fontWeight: "bold" }}>{address}</p>
                        <Text
                          fontWeight={"semibold"}
                          color={colorMode == "dark" ? "cloud" : "charcoal"}
                        >
                          #NFTs Bought: {num_bought}
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td px={"0"}>
                    <Flex justifyContent={"flex-end"}>
                      <Stat>
                        <StatNumber fontSize={"md"}>
                          {portfolio_value.toLocaleString()} SOL
                        </StatNumber>
                        <StatHelpText mb={"0"}></StatHelpText>
                      </Stat>
                    </Flex>
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default WalletList;
