import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ButtonTheme } from './components/ButtonTheme'
import ThemeContextProvider from './hooks/useTheme'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ButtonTheme />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>
)
