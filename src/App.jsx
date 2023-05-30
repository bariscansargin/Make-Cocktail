import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
//Pages
import PageLayout from "./pages/HomePageLayout/HomePageLayout";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SingleCoctailPage from "./pages/SingleCoctailPage/SingleCoctailPage";
import SingleIngredientPage from "./pages/SingleIngredientPage/SingleIngredientPage";
import CocktailsPage from "./pages/CocktailsPage/CocktailsPage";
import IngredientsPage from "./pages/IngredientsPage/IngredientsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/cocktails", element: <CocktailsPage /> },
      { path: "/cocktails/:cocktailId", element: <SingleCoctailPage /> },
      { path: "/ingredients", element :<IngredientsPage/>},
      {
        path: "/ingredients/:ingredientName",
        element: <SingleIngredientPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
