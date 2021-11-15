import React, { useContext } from "react";
import UserContext from "../Auth/UserContext";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Logo from "./Logo";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  return <>{currentUser ? LoggedInNav() : LoggedOutNav()}</>;
};

function LoggedOutNav(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" color={["white"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <LoggedOutMenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

function LoggedInNav(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" color={["white"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <LoggedInMenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const LoggedInMenuLinks = ({ isOpen }) => {
  const { currentUser } = useContext(UserContext);
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/Learn">Learn </MenuItem>
        <MenuItem to="/profile">{currentUser.username}</MenuItem>
        <MenuItem to="/protocols">Markets </MenuItem>
        <MenuItem to="/news">News </MenuItem>
        <MenuItem to="/logout" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Logout
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const LoggedOutMenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["white", "white", "white", "white"]}
            bg={["primary.500", "primary.500", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.600", "primary.600", "primary.600", "primary.600"],
            }}
          >
            Signup
          </Button>
        </MenuItem>
        <MenuItem to="/login" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["white", "white", "white", "white"]}
            bg={["primary.500", "primary.500", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.600", "primary.600", "primary.600", "primary.600"],
            }}
          >
            Login
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={5}
      bg={["white", "white", "white", "blue.400"]}
      color={["white", "white", "white", "white"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
