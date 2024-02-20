
import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './screens/Login';
import {Signup} from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import Myorder from './screens/Myorder';
// import Cart from './screens/Cart';
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <>
   <CartProvider>
<BrowserRouter>
      <Routes>
       
          
          <Route exact path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/createuser" element={<Signup/>} />
          <Route  path="/myorder" element={<Myorder/>} />
      
        
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
