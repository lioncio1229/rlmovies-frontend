import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Theme from "./Theme";
import { Provider } from "react-redux";
import { store } from './store';
import { Signin, Signup } from "./features/auth";
import AdminDashboard from "./pages/AdminMovieDashboard";
import SnackbarManager from "./features/Snackbar";


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
            <Provider store={store}>
                <SnackbarManager/>
                <RouterProvider router={router} />
            </Provider>
        </Theme>
    )
}

export default App;