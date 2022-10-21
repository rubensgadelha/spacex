import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Next from "./routes/next";
import Upcoming from "./routes/upcoming";
import Latest from "./routes/latest";
import Past from "./routes/past";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "launches/next", element: <Next /> },
      { path: "launches/upcoming", element: <Upcoming /> },
      { path: "launches/latest", element: <Latest /> },
      { path: "launches/past", element: <Past /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
