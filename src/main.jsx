import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

requestAnimationFrame(function() {
  requestAnimationFrame(function() {
    window.dispatchEvent(new Event('react-mounted'));
  });
})
