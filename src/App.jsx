import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';

//Test for stripe

import { Switch, Route, Redirect } from 'react-router-dom';
import Pay from './test/Pay';

// import Success from './test/Success';

const App = () => {
  // return <Cart />;
  //Test for stripe
  const user = true;
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/products/:category'>
        <ProductList />
      </Route>
      <Route path='/product/:id'>
        <Product />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
      <Route path='/register'>
        {user ? <Redirect to='/login' /> : <Register />}
      </Route>
      {/* <Route path='/register'>
        <Register />
      </Route> */}
      {/* <Route path='/login'>
        <Login />
      </Route> */}
      <Route path='/pay'>
        <Pay />
      </Route>
    </Switch>
  );
};

export default App;
