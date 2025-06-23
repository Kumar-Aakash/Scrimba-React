import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import ReactFacts from './ReactFacts.jsx';

import Journal from './Journal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Journal />
  </StrictMode>,
)
