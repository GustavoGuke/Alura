import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./routes/Inicio";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Inicio />
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
