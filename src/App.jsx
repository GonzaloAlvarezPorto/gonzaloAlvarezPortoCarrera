import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './globals.scss';
import { Footer } from './components/Footer';
import Index from './components/Index';

function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  )
}

export default App
