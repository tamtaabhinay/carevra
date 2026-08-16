import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout.jsx";
import Home from "../pages/Home/Home";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
