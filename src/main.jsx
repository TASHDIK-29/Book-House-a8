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
import Read from './components/Read';
import Wish from './components/Wish';
import PagesToRead from './pages/PagesToRead';
import ErrorPage from './pages/ErrorPage';
import Trending from './pages/Trending';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
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
        children:[
          {
            index: true,
            element: <Read/>,
          },
          {
            path: "/list/wishList",
            element: <Wish/>,
          },
        ]
      },
      {
        path : "/stat",
        element : <PagesToRead/>
      },
      {
        path: "/trend",
        element: <Trending/>,
        loader: () => fetch('/books.json')
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
