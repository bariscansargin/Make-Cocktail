import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
//Pages
import PageLayout from "./pages/HomePageLayout/HomePageLayout";
import InfoPage from "./pages/InfoPage/InfoPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SingleCoctailPage from "./pages/SingleCoctailPage/SingleCoctailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <InfoPage /> },
      { path: "/cocktails/:cocktailId", element: <SingleCoctailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
