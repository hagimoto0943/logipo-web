import React from "react";
import { SessionProvider } from "@lib/providers/SessionProvider.jsx";
import { SidebarProvider, SidebarTrigger } from "@components/ui/sidebar";
import { AppSidebar } from '@components/app/Sidebar'  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Training from "./routes/training";
import Dashboard from "./routes/dashboard";
import Test from "./routes/test";

const router = createBrowserRouter([
  {
    path: "/app",
    element: <Root />,
    children: [
      { index: true, element: <Training /> },
      { path: "training", element: <Training /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "test", element: <Test /> },
    ],
  },
]);

export default function App() {
  return (
    <SessionProvider>
      <SidebarProvider>
        <AppSidebar />
          <SidebarTrigger />
          <RouterProvider router={router} />
      </SidebarProvider>
    </SessionProvider>
  );
}
