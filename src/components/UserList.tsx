import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { User } from "../types/types";

const UserList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const users = useAppSelector((state: RootState) => state.users);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onOpen = (user: User) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const onClose = () => {
    setSelectedUser(null);
    setIsOpen(false);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box>
        <Input
          placeholder="Search by username"
          value={searchTerm}
          onChange={handleSearch}
          mb={4}
        />
        {isMobile ? (
          // Mobile View
          <Stack spacing={4}>
            {filteredUsers.map((user) => (
              <Box
                key={user.id}
                borderWidth="1px"
                borderRadius="lg"
                padding="4"
                boxShadow="md"
                onClick={() => onOpen(user)}
                cursor="pointer"
              >
                <Text fontWeight="bold">ID: {user.id}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Username: {user.username}</Text>
              </Box>
            ))}
          </Stack>
        ) : (
          // Desktop View

          <Table variant="simple" size="lg" width="100%">
            <TableCaption>List of Users</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Email</Th>
                <Th>Username</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredUsers.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.username}</Td>
                  <Td>
                    <Button colorScheme="blue" onClick={() => onOpen(user)}>
                      Details
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}

        {/* Modal for User Details */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedUser && (
                <>
                  <p>
                    <strong>ID:</strong> {selectedUser.id}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedUser.phone}
                  </p>
                  <p>
                    <strong>website:</strong>{" "}
                    <a href={`${selectedUser.website}`} target="_blank">
                      {selectedUser.website}
                    </a>
                  </p>
                </>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default UserList;
