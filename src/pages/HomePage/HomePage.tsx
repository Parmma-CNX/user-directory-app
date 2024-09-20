import { Container } from "@chakra-ui/react";
import UserList from "../../components/UserList";

const HomePage = () => {
  return (
    <Container maxW={"container.xl"}>
      <UserList />
    </Container>
  );
};

export default HomePage;
