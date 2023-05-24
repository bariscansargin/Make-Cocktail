import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePageLayout from "./pages/HomePageLayout/HomePageLayout";
import InfoPage from "./pages/InfoPage/InfoPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [{ path: "/", element: <InfoPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
