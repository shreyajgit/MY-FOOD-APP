import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// const Grocery = lazy(() => import("./components/grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  // authentication
  useEffect(() => {
    const data = {
      name: "Shreya Jain",
    };
    setUserName(data.name);
  }, []);

  return (
    // this provider is exported from react-redux library and it takes store as a prop
    <Provider store={appStore}>
    {/* UserContext.Provider is used to provide context values to the component tree */}
    <UserContext.Provider value={{ loggedInUser: userName, setUserName  }}>
      <div className="app px-16">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      // i.e wrapped our grocery in suspense , so that when no code is available then what should react render, so it's a fallback showing loading screen , an intermediate phase before rendering.
      //   path: "grocery",
      //   element: <Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>,
      // },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
