import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Training from "./routes/training";
import Dashboard from "./routes/dashboard";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <Root />,
    children: [
      { index: true, element: <Training /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
