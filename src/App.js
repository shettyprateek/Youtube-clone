import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContext from "./utils/VideoContext";
import { useState, useEffect } from "react";
import DemoUseMemo from "./components/DemoUseMemo";
import DemoUseRef from "./components/DemoUseRef";

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
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/demo",
        element: (
          <>
            <DemoUseMemo />
            <DemoUseRef />
          </>
        ),
      },
    ],
  },
]);

function App() {
  const [hellos, setVideos] = useState([]);
  useEffect(() => {
    setVideos([]);
  }, []);
  return (
    <Provider store={store}>
      <VideoContext.Provider value={{ videos: hellos, setVideos }}>
        <div>
          <RouterProvider router={appRouter} />
        </div>
      </VideoContext.Provider>
    </Provider>
  );
}

export default App;
