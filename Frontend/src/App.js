import Products from './Products';
import Navbar from './Navbar';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Category from './Category';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import { Footer } from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider><AuthProvider>
          < Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/category' element={<Category />} />
            <Route path='/products/category/:category' element={<Products />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            {/* <Route path='/create' element={<Create />} /> */}
          </Routes>
          <Footer />
        </AuthProvider></CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
