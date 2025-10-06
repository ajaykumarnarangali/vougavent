import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home"

function App() {

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
