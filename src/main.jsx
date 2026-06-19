import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Cart from './components/page/Cart.jsx'
import Home from './components/page/Home.jsx'
import MainLayout from './components/common/MainLayout.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<MainLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
