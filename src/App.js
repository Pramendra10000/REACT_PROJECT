
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import ProductDetails from './Pages/ProductDetails';




function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route path='/' element={<Shop/>}/>
       <Route path='/shop' element={<Shop/>}/>
       <Route path='/mens' element={<ShopCategory category="mens"/>}/>
       <Route path='/womens' element={<ShopCategory category="womens"/>}/>
       <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
       <Route path="/product/:id" component={ProductDetails} />
        </Route>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<LoginSignUp/>}/>
      </Routes> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;
