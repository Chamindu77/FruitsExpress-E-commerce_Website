import './App.css';
import Home from './screens/Home';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login'
import About from './screens/About'
import SignUp from './screens/SignUp'
import MyOrder from './screens/MyOrder';
import Admin from './screens/Admin'
import UserPage from './screens/UserPage';
import FruitsUpdate from './screens/FruitsUpdate';
import FruitsCreat from './screens/FruitsCreat';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from './components/ContextReducer';



function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/creatuser' element={<SignUp />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/myOrder' element={<MyOrder />} />
            <Route exact path='/userpage' element={<UserPage />} />
            <Route exact path='/fruitsupdate/:id' element={<FruitsUpdate />} />
            <Route exact path='/fruitscreat' element={<FruitsCreat />} />


          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
