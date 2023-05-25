import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
//Pages
import PageLayout from "./pages/HomePageLayout/HomePageLayout";
import InfoPage from "./pages/InfoPage/InfoPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage/>,
    children: [{ path: "/", element: <InfoPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
