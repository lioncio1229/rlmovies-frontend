import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Theme from "./Theme";
import { Signin, Signup } from "./features/auth";
import AdminDashboard from "./pages/AdminDashboard";

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