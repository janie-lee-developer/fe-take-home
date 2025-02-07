// react
import { useEffect, useState } from "react";
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
  StatArrow,
} from "@chakra-ui/react";
// api
import { GetProjectStatsQuery } from "hyperspace-client-js/dist/sdk";

interface MarketListProps {
  projectStats: GetProjectStatsQuery["getProjectStats"]["project_stats"];
}

const MarketList = ({ projectStats }: MarketListProps) => {
  const { colorMode } = useColorMode();
  const [stats, setStats] = useState<any[]>([]);
  const styles = useStyleConfig("ThumbNail");

  useEffect(() => {
    if (projectStats && projectStats[0]) {
      setStats(projectStats);
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
                floor_price,
                volume_1day,
                volume_1day_change,
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
                              volume_1day_change >= 0 ? "increase" : "decrease"
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
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MarketList;
