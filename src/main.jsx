import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import GraffitiBackground from './components/GraffitiBackground.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <App />
       <GraffitiBackground />
  </StrictMode>,
)
