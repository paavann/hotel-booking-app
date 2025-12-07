import { createBrowserRouter } from "react-router"
import RootLayout from "./routes/rootLayout"
import ErrorPage from "./routes/errorPage"
import SearchPage from "./pages/searchPage"
import AdminMarkupsPage from "./pages/adminMarkupsPage"

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
        { index: true, element: <SearchPage /> },
        { path: "admin/markups", element: <AdminMarkupsPage /> }
    ]
}])

export default router