import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import DeFiSignalApi from "../../api/api";
import { Link } from "react-router-dom";
import { CheckIcon, AddIcon } from "@chakra-ui/icons";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  Heading,
  Center,
} from "@chakra-ui/react";

function Protocols() {
  const [protocols, setProtocols] = useState([]);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    async function getProtocolData() {
      const res = await DeFiSignalApi.getProtocols();
      setProtocols(res.protocols.slice(50));
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getProtocolData();
  }, []);

  if (!infoLoaded) return <Loading />;

  return (
    <>
      <Center p={2}>
        <Heading
          fontSize={{ xl: "26", lg: "24", md: "22", sm: "20" }}
          color="black"
          m={2}
        >
          Protocols by TVL - DeFi Llama
        </Heading>
      </Center>
      <Container
        maxW={{
          xl: "container.xl",
          lg: "container.lg",
          md: "container.md",
          sm: "container.sm",
        }}
        borderRadius={6}
        border="2px"
        borderColor="blue.900"
      >
        <Table size="sm" variant="striped" colorScheme="gray">
          <TableCaption>All Protocols Listed</TableCaption>

          <Thead>
            <Tr>
              <Th
                display={{
                  xl: "table-cell",
                  lg: "table-cell",
                  md: "table-cell",
                  sm: "none",
                }}
                fontSize={15}
                color="black"
                p={2}
              >
                <Center>Ranking</Center>
              </Th>
              <Th
                display={{
                  xl: "table-cell",
                  lg: "none",
                  md: "none",
                  sm: "none",
                }}
                fontSize={15}
                color="black"
                p={2}
              >
                <Center>Symbol</Center>
              </Th>
              <Th fontSize={15} color="black" p={2}>
                Name
              </Th>
              <Th
                display={{ xl: "flex", lg: "none", md: "none", sm: "none" }}
                fontSize={15}
                color="black"
                p={2}
              >
                <Center> Category</Center>
              </Th>
              <Th
                display={{
                  xl: "table-cell",
                  lg: "table-cell",
                  md: "none",
                  sm: "none",
                }}
                fontSize={15}
                color="black"
                p={2}
              >
                <Center>Chain</Center>
              </Th>
              <Th
                display={{
                  xl: "table-cell",
                  lg: "none",
                  md: "none",
                  sm: "none",
                }}
                fontSize={15}
                color="black"
                p={2}
              >
                <Center> Market Cap </Center>
              </Th>
              <Th fontSize={15} color="black" p={2}>
                <Center>Total Value Locked</Center>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {protocols.map((protocol, index) => {
              const slug = protocol.slug;
              return (
                <React.Fragment key={protocol.id}>
                  <Tr>
                    <Td
                      display={{
                        xl: "table-cell",
                        lg: "table-cell",
                        md: "table-cell",
                        sm: "none",
                      }}
                    >
                      <Center>{index + 1}</Center>
                    </Td>
                    <Td
                      display={{
                        xl: "table-cell",
                        lg: "none",
                        md: "none",
                        sm: "none",
                      }}
                    >
                      <Center> {protocol.symbol}</Center>
                    </Td>
                    <Td>
                      <AddIcon
                        _hover={{ cursor: "pointer" }}
                        w={2.5}
                        h={2.5}
                        mr={2}
                        p={0}
                      />
                      <Link
                        to={{
                          pathname: `/protocol/${slug}`,
                          state: protocol,
                        }}
                      >
                        <Center display={"table-cell"} m={0} p={0}>
                          {protocol.name}
                        </Center>
                      </Link>
                    </Td>
                    <Td
                      display={{
                        xl: "flex",
                        lg: "none",
                        md: "none",
                        sm: "none",
                      }}
                    >
                      <Center> {protocol.category} </Center>
                    </Td>
                    <Td
                      display={{
                        xl: "table-cell",
                        lg: "table-cell",
                        md: "none",
                        sm: "none",
                      }}
                    >
                      <Center> {protocol.chain} </Center>
                    </Td>
                    <Td
                      display={{
                        xl: "table-cell",
                        lg: "none",
                        md: "none",
                        sm: "none",
                      }}
                    >
                      {protocol.mcap ? (
                        <Center>${protocol.mcap.toLocaleString()}</Center>
                      ) : (
                        <Center>-</Center>
                      )}
                    </Td>
                    <Td>
                      <Center>${protocol.tvl.toLocaleString()}</Center>
                    </Td>
                  </Tr>
                </React.Fragment>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}

export default Protocols;
