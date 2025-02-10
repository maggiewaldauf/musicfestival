import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/HomePage";
import StagePage from "./views/StagePage";
import PerformanceDetailPage from "./views/PerformanceDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: "/musicfestival/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "stagepage/:stageId",
                element: <StagePage />,
            },
            {
                path: "detailpage/:eventId",
                element: <PerformanceDetailPage />
            }
        ]
    }
])

export default function App() {
    return <RouterProvider router={router}/>
}
