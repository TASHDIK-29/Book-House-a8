import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import ListedBooks from './pages/ListedBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader : () => fetch('/books.json')
      },
      {
        path: "/book/:id",
        element: <BookDetails/>,
        loader : () => fetch('/books.json')
      },
      {
        path: "/list",
        element: <ListedBooks/>,
        // loader : () => fetch('/books.json')
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
