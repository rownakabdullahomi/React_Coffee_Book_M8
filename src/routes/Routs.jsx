import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Coffees from "../pages/Coffees"
import Dashboard from "../pages/Dashboard"
import CoffeeCards from "../components/CoffeeCards"
import CoffeeDetails from "../pages/CoffeeDetails"

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/categories.json"),
            children: [
                {
                    path: "/",
                    element: <CoffeeCards></CoffeeCards>,
                    loader: () => fetch("/coffeesData.json"),
                },
                {
                    path: "/category/:category",
                    element: <CoffeeCards></CoffeeCards>,
                    loader: () => fetch("/coffeesData.json"),
                }
            ],
        },
        {
            path: "/coffees",
            element: <Coffees></Coffees>,
            loader: () => fetch("/coffeesData.json"),
        },
        {
            path: "dashboard",
            element: <Dashboard></Dashboard>,
        },
        {
            path: "/coffee/:id",
            element: <CoffeeDetails></CoffeeDetails>,
            loader: () => fetch("/coffeesData.json"),
        },
      ]
    },
  ])

  export default routes