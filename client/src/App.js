
import './componentsStyle/App.css';
import Home from './Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MenSection from './components/Men-section';
import WomenSection from './components/Women-section';
import SignUp from './components/Sign-up';
import ProductInfo from './components/Product-info';
import CartProduct from './components/Cart-product';
import SignIn from './components/Sign-in';
import { AddProduct } from './components/Add-product';
import Cart from './components/Cart'

//react-bootstrap
import { Alerts } from 'react-bootstrap'
import ProductCard from './components/ProductCard';



export default  function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/men-section' element={<MenSection />}/>
       <Route path='/women-section/:id' element={<WomenSection/>} />
       <Route path='/sign-up' element={<SignUp/>}/>
       <Route path='/sign-in' element={<SignIn/>}/>
       <Route path='/product-cart' element={<ProductCard/>}/>
       <Route path='/product-info' element={<ProductInfo/>} />
       <Route path='/product-info/cart-product' element={<CartProduct/>}/>
       <Route path='/add-product' element={<AddProduct/>}/>
       <Route path='/cart' element={<Cart/>}/>
     </Routes>
   </Router>
  );
}


