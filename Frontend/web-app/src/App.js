import Products from './Products';
import Navbar from './Navbar';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Navbar />
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
