import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';

//Test for stripe

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pay from './test/Pay';
// import Success from './test/Success';

const App = () => {
  // return <Cart />;
  //Test for stripe
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Pay' element={<Pay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
