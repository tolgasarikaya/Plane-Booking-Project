import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyFlights from "./pages/MyFlights";
import Layout from "./pages/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "/myflights",
          element: <MyFlights />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
