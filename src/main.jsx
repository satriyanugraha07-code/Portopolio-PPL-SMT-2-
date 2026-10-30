import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/welcome.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/artifacts.css'

if (window.location.hash.length > 1) {
  document.documentElement.classList.add('deep-link')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
