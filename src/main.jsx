import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MultiPage from './Multipage_text.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultiPage/>
  </StrictMode>,
)
