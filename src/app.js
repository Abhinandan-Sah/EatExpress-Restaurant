import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
// import About from "./component/About.js";
import Error from "./component/Error.js";
import Contact from "./component/Contact.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
// const heading = React.createElement("h1", {id:"heading"}, "I am Iron Man");
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.js";
import Footer from "./component/Footer.js";


const About = lazy(() => import("./component/About.js"));

// Application Layout component
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(()=>{
    const data = {
      username: "Avi"
    };
    setUserName(data.username)
  },[])

  return (
    <div className="app">
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <Header />
        {/** if path = / */}
        {/* <Body /> */}
        {/** if path = /about */}
        {/* <About /> */}
        {/** if path = /contact */}
        {/* <Contact /> */}
        <Outlet  />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </div>
  );
};

// Creating React Routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
