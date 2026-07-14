import Products from './Products';
import Navbar from './Navbar';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Category from './Category';
import { CartProvider } from './CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          < Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/category' element={<Category />} />
            <Route path='/products/category/:category' element={<Products />} />
            {/* <Route path='/create' element={<Create />} /> */}
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
