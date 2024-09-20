import { jwtDecode } from "jwt-decode";
interface DecodedToken {
  userId: string;
  username: string;
}

// Function to decode the JWT token and extract user information
export const getUserFromToken = (token: string): DecodedToken | null => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
