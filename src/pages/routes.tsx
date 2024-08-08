import { createBrowserRouter } from "react-router-dom";

import { Home } from "./home";
import { Dashboard } from "./dashboard";

export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);
