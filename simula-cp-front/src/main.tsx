import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home/index.tsx'
import Produto from './routes/Produtos/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error/index.tsx'

// implements {createBrowserRouter}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/produtos",
        element: <Produto/>
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProdutos/>
      },
      {
        path: '/antiga',
        element: <Navigate to= '/'/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
