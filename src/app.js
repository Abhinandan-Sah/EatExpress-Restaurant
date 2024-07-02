import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet   } from "react-router-dom";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import About from "./component/About.js";
import Error from "./component/Error.js";
import Contact from "./component/Contact.js";
import RestaurantMenu from "./component/RestaurantMenu.js"
// const heading = React.createElement("h1", {id:"heading"}, "I am Iron Man");

// Application Layout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/** if path = / */}
      {/* <Body /> */}
      {/** if path = /about */}
      {/* <About /> */}
      {/** if path = /contact */}
      {/* <Contact /> */}
      <Outlet />
    </div>
  );
};

// Creating React Routing
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />
    },
  ],
    errorElement: <Error />,
  },
  
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
