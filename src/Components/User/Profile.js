import React, { useContext, useState } from "react";
import UserContext from "../Auth/UserContext";
import Alert from "../Loading/Alert";
import {
  FormControl,
  FormHelperText,
  Input,
  Box,
  Flex,
  VStack,
  Center,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import BaseContainer from "../Layouts/BaseContainer";
import Section from "../Layouts/Section";
import Catch from "../Auth/Catch";
import DeFiSignalApi from "../../api/api";

const About = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: currentUser ? currentUser.firstName : null,
    lastName: currentUser ? currentUser.lastName : null,
    email: currentUser ? currentUser.email : null,
  });
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);
  if (!currentUser) {
    return (
      <div className="profile-blank">
        <Catch />
      </div>
    );
  } else {
    //updates state based on change in form
    const handleChange = (evt) => {
      const { name, value } = evt.target;
      setFormData((formData) => ({
        ...formData,
        [name]: value,
      }));
      setFormErrors([]);
    };

    //sends update to backend
    async function handleSubmit(evt) {
      evt.preventDefault();

      let profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };

      let username = currentUser.username;
      let updatedUser;
      console.log(currentUser);
      try {
        updatedUser = await DeFiSignalApi.update(username, profileData);
        console.log(updatedUser.user);
      } catch (errors) {
        setFormErrors(errors);
        return;
      }

      setFormData((f) => ({ ...f, password: "" }));
      setFormErrors([]);
      setSaveConfirmed(true);

      setCurrentUser(updatedUser.user);
    }
    return (
      <BaseContainer px="20px">
        <VStack spacing={8} py="2rem" padding="4">
          <VStack align="center">
            <Heading as="h1" color="brand.gray_dark" m={2} p={2}>
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
            {formErrors.length ? (
              <Alert type="danger" messages={formErrors} />
            ) : null}
            {saveConfirmed ? (
              <Alert type="success" messages={["Updated Successfully"]} />
            ) : null}
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
              Favorites
            </Heading>
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
