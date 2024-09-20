import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword } from "../../features/auth/authSlice";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { RootState } from "../../app/store";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { error } = useAppSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const resultAction = await dispatch(
      loginWithEmailAndPassword({ email, password })
    );
    if (loginWithEmailAndPassword.fulfilled.match(resultAction)) {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: error || "Invalid Email or Password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Box
        maxW="md"
        mx="auto"
        mt={10}
        p={8}
        borderRadius="md"
        boxShadow="md"
        bg={useColorModeValue("white", "gray.800")}
      >
        <form onSubmit={handleLogin}>
          <Heading textAlign="center" mb={6}>
            Login
          </Heading>

          <FormControl isRequired isInvalid={!!error}>
            <Stack spacing={4}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              {error && <FormErrorMessage>{error}</FormErrorMessage>}
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                size={useBreakpointValue({ base: "md", md: "lg" })}
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default LoginPage;
