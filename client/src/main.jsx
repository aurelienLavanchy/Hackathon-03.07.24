import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddOfferPage from "./pages/AddOfferPage/AddOfferPage";
import App from "./App";
import HomePage from "./pages/homepage/HomePage"
import OffersPage from "./pages/OffersPage";
import EntreprisesPage from "./pages/EntreprisesPage";
import DashboardEntreprise from "./pages/DashboardEntreprise";
import EntrepriseDetailsPage from "./pages/EntrepriseDetailsPage";
import OfferDetailsPage from "./pages/OfferDetailsPage";
import ConnectionPage from "./pages/connectionPage/ConnectionPage";
import SafeZonePage from "./pages/SafeZonePage";
import IntroPage from "./pages/intro/IntroPage";

const express = import.meta.env.VITE_API_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <IntroPage /> },
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
        loader: () => fetch(`${express}/api/companies`),
      },
      {
        path: "/dashboard",
        element: <DashboardEntreprise />,
      },
      {
        path: "/entreprise/:id",
        element: <EntrepriseDetailsPage />,
        loader: ({ params }) => fetch(`${express}/api/companies/${params.id}`),
      },
      {
        path: "/offer/:id",
        element: <OfferDetailsPage />,
        loader: ({ params }) => fetch(`${express}/api/job/${params.id}`),
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
        path: "/addOffer",
        element: <AddOfferPage />,
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
