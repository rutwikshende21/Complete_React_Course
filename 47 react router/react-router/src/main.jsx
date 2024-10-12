import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";

// createBrowderRouter is method to create specific paths/url for specific component
const router = createBrowserRouter([
  { path: "/", element: <App /> }, // giving '/' as default url for our whole App component
  { path: "/create-post", element: <CreatePost /> },
  // giving '/create-post' as default url for our CreatePost Component, but it will load only CreatePost component and not other components like header, footer and sidebar
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* instead of loading our App directly we will load our App through RouterProvider */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
