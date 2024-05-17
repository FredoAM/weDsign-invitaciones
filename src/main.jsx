import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Confirm from './Confirm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/confirm/:id" element={<Confirm />} />
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  </React.StrictMode>,
)
