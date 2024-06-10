import Home from './pages/home/home';
import Users from './pages/users/users';
import Products from './pages/products/products';

import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';

function App() {
    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div>
                    <div className="menuContainer">
                        <Menu />
                    </div>
                    <div className="contentContainer">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: 'users',
                    element: <Users />,
                },
                {
                    path: 'products',
                    element: <Products />,
                },
            ],
        },
        {
            path: 'login',
            element: <Login />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
