import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

// createBrowderRouter is method to create specific paths/url for specific component
const router = createBrowserRouter([
  {
    path: "/", // for default path '/#'
    element: <App />, // whole App component should load, with Home page(PostList here) as default main componet
    children: [
      { path: "/", element: <PostList />, loader: postLoader }, // as our website is loaded for the  default path '/', first the loader will load/fetch the data from postLoader method
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      }, // action method will perform the actions inside createPostAction method which performs an ation on submission of form
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* instead of loading our App directly we will load our App through RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
