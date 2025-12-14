import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolver App con el ThemeProvider */}
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </StrictMode>,
)