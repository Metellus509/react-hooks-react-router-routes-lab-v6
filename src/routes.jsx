// src/routes.jsx
import { createMemoryRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Actors from "./pages/Actors.jsx";
import Directors from "./pages/Directors.jsx";
import Movie from "./pages/Movie.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  },
  {
    path: "*", // pour gérer toutes les routes non définies
    element: <ErrorPage />
  }
];

export default routes;
