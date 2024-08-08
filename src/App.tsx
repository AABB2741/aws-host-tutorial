import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./pages/routes";

export function App() {
    return <RouterProvider router={appRoutes} />;
}
