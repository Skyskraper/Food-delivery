import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Layout/Pages/Home'
import WebLayout from './Layout/WebLayout'
import About from './Layout/Pages/About'
import  Features  from './Layout/Pages/Features'
import Gallery from './Layout/Pages/Gallery'
import Blog from "./Layout/Pages/Blog"
import Contact from "./Layout/Pages/Contact"


function App() {
  const Themeroute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout/>}>
      
        <Route index element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="features" element={<Features/>}/>
       <Route path="gallery" element={<Gallery/>}/>
       <Route path="blog" element={<Blog/>}/>
       <Route path="contact" element={<Contact/>}/>
       
       
        
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={Themeroute}/>
    </>
  )
}

export default App
