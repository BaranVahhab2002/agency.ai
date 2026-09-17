import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import { ContactUs } from "../Pages";
import Layout from "../Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;