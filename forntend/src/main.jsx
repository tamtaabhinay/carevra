import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/global.css";
import { RouterProvider } from "react-router";
import router from "./routers/routers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
