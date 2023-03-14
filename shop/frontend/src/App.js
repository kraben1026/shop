import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import './App.css';
import Sell from "./Pages/Sell";
import NotImplemented from "./Pages/NotImplemented";
import Register from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/sell",
    element: <Sell />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/*",
    element: <NotImplemented />
  }
]); 
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
