
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Merch from './pages/Merch'
import Sponsors from './pages/Sponsors'

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
    basename : ''
  })

function App() {

    return (
        <>
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}

export default App
