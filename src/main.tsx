import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import AboutPage from './pages/About.tsx'
import { Navigation } from './components/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
