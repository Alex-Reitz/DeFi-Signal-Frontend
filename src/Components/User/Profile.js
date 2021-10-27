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

import React, { useContext, useState } from "react";
import UserContext from "../Auth/UserContext";
import {
  FormControl,
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
import DeFiSignalApi from "../../api/api";

const About = () => {
  const { currentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  //updates state based on change in form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  //Sends the patch request out to backend
  const gatherInput = (evt) => {
    evt.preventDefault();
    update(currentUser.username, { ...formData });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  //sends update to backend
  const update = (username, data) => {
    async function updateUser(username, data) {
      const res = await DeFiSignalApi.update(username, data);
      return res;
    }
    updateUser(username, data);
  };

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
            <Text align="center" color="black" as="cite" fontSize="1.3rem">
              First Name — {currentUser.firstName}
              <FormControl id="first-name">
                <Input
                  placeholder="Update First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                  name="firstName"
                />
              </FormControl>
            </Text>
            <Text align="center" color="black" as="cite" fontSize="1.3rem">
              Last Name — {currentUser.lastName}
              <FormControl id="last-name">
                <Input
                  placeholder="Update Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                  name="lastName"
                />{" "}
              </FormControl>
            </Text>
            <Text align="center" color="black" as="cite" fontSize="1.3rem">
              Email — {currentUser.email}
              <FormControl id="email">
                <Input
                  type="email"
                  placeholder="Update Email"
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                />
                <FormHelperText align="center">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
            </Text>
            <br />
            <Button colorScheme="blue" onClick={gatherInput}>
              Update Info
            </Button>
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
