import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Checkout from './Components/Checkout/Checkout';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';
import Name from './Components/Login/Name';

function App() {


  return (
 
          
   <AuthProvider>
      <BrowserRouter>
    
      <Routes>
       <Route path='productsdetails' element={<ProductDetails />} />
        <Route path='product/checkout' element={<Checkout/>}></Route>
        <Route path="/" element={<Name></Name>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    
  );
}

export default App;
