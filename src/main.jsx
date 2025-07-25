import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient();           // QueryClient 인스턴스 생성

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>    {/* QueryClientProvider로 감싸주기 */}
      <App />
    </QueryClientProvider>
  </StrictMode>
)
