import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/globalStyle.css'
import { RouterProvider } from 'react-router'
import routers from "./routes/mainRouter"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
