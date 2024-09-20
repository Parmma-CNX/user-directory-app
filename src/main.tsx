import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <App />
                </PrivateRoute>
              }
            >
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
