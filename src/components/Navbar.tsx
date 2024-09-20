import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import { useAppSelector } from "../app/hooks";
import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { username } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Box py={"4"} mb={"2"}>
        <Container maxW={"container.2xl"}>
          <Flex justifyContent={"space-between"}>
            <Link to="/">
              <Box
                fontSize={"2xl"}
                fontWeight={"bold"}
                letterSpacing={"widset"}
                fontFamily={"mono"}
              >
                USER APP
              </Box>
            </Link>

            {/* DESKTOP */}
            <Flex
              gap={"4"}
              alignItems={"center"}
              display={{ base: "none", md: "flex" }}
            >
              Welcome! {username}
              <Menu>
                <MenuButton>
                  <Avatar
                    bg={"grey"}
                    color={"white"}
                    size={"sm"}
                    name={`${username}`}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            {/* Mobile */}
            <Flex
              display={{ base: "flex", md: "none" }}
              alignItems={"center"}
              gap="4"
            >
              <IconButton
                aria-label="hamburger-button"
                onClick={onOpen}
                icon={<HamburgerIcon />}
              />
              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg={"white"}>
                  <DrawerCloseButton />
                  <DrawerHeader>
                    {username && (
                      <Flex alignItems="center" gap="2">
                        <Avatar bg="grey" size={"sm"} name={username} />
                        <Box fontSize={"sm"}>{username}</Box>
                      </Flex>
                    )}
                  </DrawerHeader>

                  <DrawerBody>
                    <Flex flexDirection={"column"} gap={"4"} onClick={onClose}>
                      {username && (
                        <>
                          <Button
                            variant={"outline"}
                            colorScheme="black"
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </>
                      )}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
