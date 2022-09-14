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
} from "@chakra-ui/react";
// api
import { GetProjectStatsQuery } from "hyperspace-client-js";
import {
  GetProjectStatsOutput,
  Project,
  ProjectStat,
} from "hyperspace-client-js/dist/sdk";

// type ProjectStats = GetProjectStatsQuery["getProjectStats"]["project_stats"];
// interface MarketListProps {
//   projectStats: ProjectStats;
// }

interface MarketListProps {
  projectStats: GetProjectStatsOutput;
}

interface M {
  s: Project;
}

const MarketList = ({ projectStats }: MarketListProps) => {
  const { colorMode } = useColorMode();
  const [stats, setStats] = useState<any[]>([]);
  let st: any[] = [];

  useEffect(() => {
    if (projectStats?.project_stats) {
      console.log(projectStats.project_stats[0].project_id);
      setStats(projectStats.project_stats);
      // console.log("length is", stats.length);
      // st = projectStats.project_stats;
      // console.log("sttttt", st);
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
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th isNumeric>Avg Price</Th>
            <Th isNumeric>Avg 24h %</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stats[0] ? (
            stats.map(
              ({ project_id, average_price, project: { img_url } }, inx) => {
                return (
                  <Tr key={inx}>
                    <Td>{inx + 1}</Td>
                    <Td>{project_id}</Td>
                    <Td>{average_price}</Td>
                    <Td>
                      <Image
                        boxSize="15px"
                        src={
                          img_url ??
                          "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                        }
                      />
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

// <Tr>
//             <Td>inches</Td>
//             <Td>millimetres (mm)</Td>
//             <Td isNumeric>25.4</Td>
//           </Tr>

//   const hyperClient = useContext(APIContext);
//   const [nfts, setNfts] = useState<MarketplaceSnapshots>([]);

//   useEffect(() => {
//     const getData = async () => {
//       const {
//         getMarketPlaceSnapshots: { market_place_snapshots },
//       } = await hyperClient!.getMarketplaceSnapshot({});
//       setNfts(market_place_snapshots);
//       setLoading(false);
//     };

//     getData();
//   }, []);

//     {
//       /* {nfts?.map(({ project_image, name }) => (
//     <ListItem>
//       <Text>{name}</Text>
//       <Image
//         boxSize="100px"
//         src={
//           project_image ??
//           "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
//         }
//       />
//     </ListItem>
//   ))} */

// average_price
// :
// 413.465837364
// average_price_1day_change
// :
// -0.0301

// project.display_name
// project.img_url
// :
//supply

//# , [project.img_url, project.display_name, supply, badge"trade"] ,avg price, avg24h%

//   {projectStats.project_stats?.map(({ project_stats: {} }) => (

//   <Text>{name}</Text>
//   <Image
//     boxSize="100px"
//     src={
//       project_image ??
//       "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
//     }
//   />

// ))}

//
//# , [project.img_url, project.display_name, supply, badge"trade"] ,avg price, avg24h%

// console.log(
//   "this is from marketplace-janieeeeee",
//   projectStats?.project_stats
// );
