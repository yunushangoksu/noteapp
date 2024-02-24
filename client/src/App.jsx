import "./App.css";
import MainPage from "./routes/MainPage";
import AuthScreen from "./routes/AuthScreen";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthScreen />,
  },
  {
    path: "/home",
    element: <MainPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
