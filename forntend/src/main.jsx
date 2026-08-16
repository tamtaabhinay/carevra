import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router/dom";

import router from "./routes/mainRoutes.jsx";

import './assets/css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)