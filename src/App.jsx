import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/home/home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';

let x = createBrowserRouter([
{index : true,element:<Home/> },
{path:"about",element:<About/> },
{path:"portfolio",element:<Portfolio/> },
]

)
function App() {


  return (
    <>
   <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
