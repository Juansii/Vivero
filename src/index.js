import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './pages/Store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/ErrorPages'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/locations",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/store",
    element: <Store />,
    errorElement: <Store />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);


