// AuthState keeps track of the authentication status
export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// The structure of a User object
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface UsersState {
  users: User[];
}

// UserCredentials represent the data sent when logging in
export interface UserCredentials {
  email: string;
  password: string;
}

// AuthResponse is the structure of data returned from the login API
export interface AuthResponse {
  user: User; // User object
  token: string; // JWT token
}

export interface CustomError extends Error {
  message: string;
}
