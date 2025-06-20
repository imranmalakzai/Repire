import Home from './pages/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Services from './Components/Services'
import  Contact  from './Components/Contact'
import { createRoutesFromElements,createBrowserRouter,Route,RouterProvider } from 'react-router-dom'

const root = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index  element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Services' element={<Services />} />
      <Route path='Contact' element={<Contact />} />
    </Route>
))

const Render = () => {
  return (
    <RouterProvider router={root}/>
  )
}

export default Render