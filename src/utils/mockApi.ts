import users from "../mockUser/users.json";

interface LoginResponse {
  token: string;
}

export const loginApi = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        resolve({ token: user.token });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};
