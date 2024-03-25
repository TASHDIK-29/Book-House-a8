import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader : () => fetch('/books.json')
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
