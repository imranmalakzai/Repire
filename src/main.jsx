import Rander from './Components/Rander';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rander />
  </StrictMode>,
)
