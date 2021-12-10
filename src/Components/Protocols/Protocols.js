import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import DeFiSignalApi from "../../api/api";
import { Link } from "react-router-dom";
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
  console.log(protocols);
  if (!infoLoaded) return <Loading />;

  return (
    <>
      <Center p={2}>
        <Heading color="black">Protocols by TVL - DeFi Llama</Heading>
      </Center>
      <Container
        maxW="container.xl"
        centerContent
        borderRadius={6}
        border="2px"
        mt={5}
        borderColor="blue.900"
      >
        <Table size="sm" variant="striped" colorScheme="gray">
          <TableCaption>All Protocols Listed</TableCaption>

          <Thead>
            <Tr>
              <Th fontSize={15} color="black" p={2}>
                Ranking
              </Th>
              <Th fontSize={15} color="black" p={2}>
                Symbol
              </Th>

              <Th fontSize={15} color="black" p={2}>
                Name
              </Th>
              <Th fontSize={15} color="black" p={2}>
                Category
              </Th>
              <Th fontSize={15} color="black" p={2}>
                Chain
              </Th>
              <Th fontSize={15} color="black" p={2}>
                Market Cap
              </Th>
              <Th fontSize={15} color="black" p={2}>
                Total Value Locked
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {protocols.map((protocol, index) => {
              const slug = protocol.slug;
              return (
                <React.Fragment key={protocol.id}>
                  <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{protocol.symbol}</Td>
                    <Td>
                      <Link
                        to={{
                          pathname: `/protocol/${slug}`,
                          state: protocol,
                        }}
                      >
                        {protocol.name}
                      </Link>
                    </Td>
                    <Td>{protocol.category}</Td>
                    <Td>{protocol.chain}</Td>
                    <Td>
                      {protocol.mcap
                        ? `$${protocol.mcap.toLocaleString()}`
                        : "-"}
                    </Td>
                    <Td>${protocol.tvl.toLocaleString()}</Td>
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
