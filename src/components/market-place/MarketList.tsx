// react
import { useEffect, useState, FunctionComponent } from "react";
// chakra
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Image,
  useColorMode,
  Center,
  Button,
  Box,
  Flex,
  Grid,
  GridItem,
  useStyleConfig,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
// api
import { GetProjectStatsOutput } from "hyperspace-client-js/dist/sdk";

interface MarketListProps {
  projectStats: GetProjectStatsOutput;
}

const MarketList = ({ projectStats }: MarketListProps) => {
  const { colorMode } = useColorMode();
  const [stats, setStats] = useState<any[]>([]);
  const styles = useStyleConfig("ThumbNail");

  useEffect(() => {
    if (projectStats?.project_stats) {
      console.log(projectStats);
      setStats(projectStats.project_stats);
    }
  }, []);

  return (
    <TableContainer>
      <Table
        variant="simple"
        bgColor={
          colorMode == "dark" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)"
        }
      >
        <Tbody>
          {stats[0] ? (
            stats.map(
              (
                {
                  average_price,
                  floor_price,
                  volume_1day,
                  volume_1day_change,
                  volume_7day,
                  project: { img_url, display_name },
                },
                inx
              ) => {
                return (
                  <Tr key={inx}>
                    <Td p={"16px 0 16px 20px"}>
                      <Text fontWeight={"semibold"}>{inx + 1}</Text>
                    </Td>
                    <Td px={"0px 10px"}>
                      <Flex>
                        <Box w={"50px"} h={"50px"}>
                          <Image
                            src={img_url}
                            fallbackSrc={
                              "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                            }
                            alt={display_name ?? "n/a"}
                            __css={styles}
                          />
                        </Box>
                        <Flex
                          flexDirection={"column"}
                          overflow={"hidden"}
                          alignItems={"flex-start"}
                          justifyContent={"center"}
                          pl={"10px"}
                          maxW={["125px", "100%", "150px", "100%"]}
                          textOverflow={"ellipsis"}
                        >
                          <p style={{ fontWeight: "bold" }}>{display_name}</p>
                          <Text
                            fontWeight={"semibold"}
                            color={colorMode == "dark" ? "cloud" : "charcoal"}
                          >
                            Floor: {floor_price}
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td px={"0"}>
                      <Flex justifyContent={"flex-end"}>
                        <Stat>
                          <StatNumber fontSize={"md"}>
                            ${volume_1day.toLocaleString()}
                          </StatNumber>
                          <StatHelpText mb={"0"}>
                            <StatArrow
                              type={
                                volume_1day_change >= 0
                                  ? "increase"
                                  : "decrease"
                              }
                            />
                            {(volume_1day_change * 100).toFixed(1)} %
                          </StatHelpText>
                        </Stat>
                      </Flex>
                    </Td>
                  </Tr>
                );
              }
            )
          ) : (
            <Tr></Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MarketList;
