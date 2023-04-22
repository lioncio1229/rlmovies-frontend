import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Theme from "./Theme";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";

const router = createBrowserRouter([
    {
        path: '/signin',
        element: <Signin/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/admin-movies',
        element: <AdminDashboard/>
    },
]);

function App()
{
    return (
        <Theme>
            <RouterProvider router={router} />
        </Theme>
    )
}

export default App;