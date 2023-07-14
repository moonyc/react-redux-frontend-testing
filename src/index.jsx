import { RouterProvider } from 'react-router-dom'
import * as React from 'react'
import './style.css'
import { createRoot } from 'react-dom/client'
import router from './routers/Router'

const Jsx = () => {
  return(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

const root = createRoot(document.querySelector('#root'))



root.render(
    <Jsx/>
)