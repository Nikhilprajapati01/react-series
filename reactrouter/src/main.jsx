import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/home.jsx'
import Aboutus from './components/about/Aboutus.jsx'
import Contact from './components/contact/Contactus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[{
      path:"",
      element: <Home />
    },
    {
      path:"about",
      element: <Aboutus />
    },
    {
      path:"contact",
      element: <Contact/>
    },
    {
      path:"user/:userid",
      element: <User/>
    },
    {
      path:"github",
      element: <Github/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
