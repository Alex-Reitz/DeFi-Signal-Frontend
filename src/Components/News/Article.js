import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

function Article({ info }) {
  return (
    <Center py={6}>
      <Box
        maxW={"50rem"}
        H={"20rem"}
        w={"full"}
        bg={useColorModeValue("gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={4}
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {info.title}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          ></Heading>
          <Text color={"blue.200"}>{info.content.slice(0, 250)}...</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            {info.tags.length ? (
              <Text color={"blue.200"} fontWeight={600}>
                Tags:
                {info.tags.map((material) => {
                  return ` ${material} `;
                })}
              </Text>
            ) : (
              <Text color={"blue.200"} fontWeight={600}>
                Tags: None
              </Text>
            )}
            <Text color={"blue.200"} fontWeight={600}>
              Author: {info.author.name}
            </Text>
            <Text color={"blue.200"}>{info.published_at}</Text>
            <Text>
              <a href={info.url}>Read the full article</a>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Article;
