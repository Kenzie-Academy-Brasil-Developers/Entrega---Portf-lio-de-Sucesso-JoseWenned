import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Providers/userContext.provider.tsx'
import { EvaluationProvider } from './Providers/evaluationContext.provider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <EvaluationProvider>
          <App />
        </EvaluationProvider>
      </UserProvider> 
    </BrowserRouter>
  </React.StrictMode>,
)
