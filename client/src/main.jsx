import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import EntreprisesPage from "./pages/EntreprisesPage";
import DashboardEntreprise from "./pages/DashboardEntreprise";
import EntrepriseDetailsPage from "./pages/EntrepriseDetailsPage";
import OfferDetailsPage from "./pages/OfferDetailsPage";
import ConnectionPage from "./pages/ConnectionPage/ConnectionPage";
import SafeZonePage from "./pages/SafeZonePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/offers",
        element: <OffersPage />,
      },
      {
        path: "/entreprises",
        element: <EntreprisesPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardEntreprise />,
      },
      {
        path: "/entreprise/:id",
        element: <EntrepriseDetailsPage />,
      },
      {
        path: "/offer/:id",
        element: <OfferDetailsPage />,
      },
      {
        path: "/connection",
        element: <ConnectionPage />,
      },
      {
        path: "/safezone",
        element: <SafeZonePage />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
