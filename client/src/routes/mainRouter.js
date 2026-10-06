import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home"

const routers = createBrowserRouter([
    {
        Component : MainLayout,
        children : [
            {
                index : true,
                Component : Home
            }
        ]
    }

])

export default routers