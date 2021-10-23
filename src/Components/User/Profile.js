/* import React, { useContext } from "react";
import UserContext from "../Auth/UserContext";
import "./Profile.css";
import Catch from "../Auth/Catch";

function UserProfile() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return (
      <div className="profile-blank">
        <Catch />
      </div>
    );
  } else {
    return (
      <div className="profile-container">
        <div className="profile-data">
          <h4 className="profile-header">Your Information</h4>
          <p className="user-data">
            <strong>Username: </strong>
            <span className="user-data-info">{currentUser.username}</span>
          </p>
          <p className="user-data">
            <strong>Email: </strong>
            <span className="user-data-info">{currentUser.email}</span>
          </p>
          <p className="user-data">
            <strong> First name: </strong>
            <span className="user-data-info">{currentUser.firstName}</span>
          </p>
          <p className="user-data">
            <strong> Last name: </strong>
            <span className="user-data-info">{currentUser.lastName}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default UserProfile; */
import React, { useContext } from "react";
import UserContext from "../Auth/UserContext";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Flex,
  VStack,
  Center,
  Heading,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import BaseContainer from "../Layouts/BaseContainer";
import Section from "../Layouts/Section";
import Catch from "../Auth/Catch";

const About = () => {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return (
      <div className="profile-blank">
        <Catch />
      </div>
    );
  } else {
    return (
      <BaseContainer px="20px">
        <VStack spacing={8} py="2rem" padding="4">
          <VStack align="center">
            <Heading as="h1" color="brand.gray_dark">
              Hey {currentUser.username}!
            </Heading>
            <Center color="gray.700">Here is your profile information</Center>{" "}
            <Text color="black" as="cite" fontSize="1.3rem">
              First Name — {currentUser.firstName}
              <FormControl id="first-name">
                <FormLabel>Update</FormLabel>
                <Input placeholder="First name" />
              </FormControl>
            </Text>
            <Text color="black" as="cite" fontSize="1.3rem">
              Last Name — {currentUser.lastName}
            </Text>
            <Text color="black" as="cite" fontSize="1.3rem">
              Username — {currentUser.username}
            </Text>
            <Text color="black" as="cite" fontSize="1.3rem">
              Email — {currentUser.email}
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
            </Text>
            <br />
            <Button colorScheme="blue">Update Info</Button>
          </VStack>
        </VStack>
        <Section bg="#fff" py={{ base: "6rem", md: "7rem", lg: "8rem" }}>
          <Flex
            w="100%"
            direction="column"
            justify="center"
            align="center"
            mx="20px"
            m="0 auto"
          >
            <Heading as="h3" align="center" mb="1rem">
              Favorites & Notes
            </Heading>
            <Text fontSize="md">Your Notes</Text>
            <br />
            <Text fontSize="md">Your favorites</Text>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my="1rem"
            ></Box>
          </Flex>
        </Section>
      </BaseContainer>
    );
  }
};

export default About;
