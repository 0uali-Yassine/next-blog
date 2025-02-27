import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import 'boxicons'
import Context from './Context';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
     <App />
    </Context>
  </StrictMode>,
)
