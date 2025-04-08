import "./App.css";
import Head from "./Component/Head";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Component/MainContainer";
import Watchpage from "./Component/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch/:id",
        element: <Watchpage />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
          {/*
          Head
          Body
          Sidebar
           -Menuitems
          Maincontainer
           -Buttonlist
           -Videoconatiner
            -videocard
          */}
        </div>
      </Provider>
    </>
  );
}

export default App;
