import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyled from './styledGlobal.ts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'
import JovemSheldon from './routes/JovemSheldon/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/js',
        element: <JovemSheldon/>
      }
    ]
  }
])
   

  createRoot(document.getElementById('root')!).render(
        <StrictMode>
          <RouterProvider router={router} />
          <GlobalStyled/>
        </StrictMode>,
      )
