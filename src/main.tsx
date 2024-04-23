import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  // createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Sponsors from './pages/Sponsors.tsx';
import Footer from './components/Footer.tsx';
import Merch from './pages/Merch.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/sponsors',
    element: <Sponsors />
  },
  {
    path: '/merch',
    element: <Merch />
  }
], {
  basename: import.meta.env.DEV ? '/' : '/lady-luck/'
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
