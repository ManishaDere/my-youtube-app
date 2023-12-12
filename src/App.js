import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
]);

export default App;

/**
 * Head - serach functionality
 * Body
 * - Sidebar - different menus
 * - MainContainer
 * - different buttons at the top
 * - list of videos
 */
