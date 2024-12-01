import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './assets/global/AuthContext.jsx'
import  GlobalDataProvider  from './assets/global/HandleGlobalThings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalDataProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </GlobalDataProvider>
  </StrictMode>,
)
