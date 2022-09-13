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

interface MarketPlaceProps {
  projectStats?: GetProjectStatsQuery["getProjectStats"]["project_stats"];
}

const MarketList: FunctionComponent<MarketPlaceProps> = ({ projectStats }) => {
  const { colorMode } = useColorMode();
  console.log("this is from marketplace", projectStats);

  return (
    <TableContainer>
      <Table
        variant="simple"
        bgColor={
          colorMode == "dark" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)"
        }
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default MarketList;
