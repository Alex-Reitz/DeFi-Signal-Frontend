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
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formErrors, setFormErrors] = useState([]);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });
  //updates state based on change in form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  /* //Sends the patch request out to backend
  const gatherInput = (evt) => {
    evt.preventDefault();
    update(currentUser.username, { ...formData });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }; */
  //sends update to backend
  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await DeFiSignalApi.update(username, profileData);
    } catch (errors) {
      debugger;
      setFormErrors(errors);
      return;
    }

    setFormData((f) => ({ ...f, password: "" }));
    setFormErrors([]);

    // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
  }

  /*  const update = (username, data) => {
    async function updateUser(username, data) {
      const res = await DeFiSignalApi.update(username, data);
      console.log(res);
      return res;
    }
    updateUser(username, data);
  }; */

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
            <Text align="center" color="black" as="cite" fontSize="1.3rem">
              Password
              <FormControl id="password">
                <Input
                  type="password"
                  placeholder="Your Password"
                  onChange={handleChange}
                  value={formData.password}
                  name="password"
                />
                <FormHelperText align="center">
                  Enter your password to confirm change
                </FormHelperText>
              </FormControl>
            </Text>
            <br />
            <Button colorScheme="blue" onClick={handleSubmit}>
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
