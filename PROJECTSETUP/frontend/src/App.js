import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import SignUp from './Components/User/SignUp'
import SignIn from './Components/User/SignIn'
import ChangePassword from './Components/User/ChangePassword'
import CreateProduct from './Components/Product/CreateProduct'
import ListOfProduct from './Components/Product/ProductList'
import ProductDetails from './Components/Product/ProductDetails'
import UpdateProduct from './Components/Product/UpdateProduct'

import Error from './Components/Error'

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" exact element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/change-password" element={<ChangePassword/>}/>

            <Route path="/product" element={<ListOfProduct/>}/>
            <Route path="/product/add" element={<CreateProduct/>}/>
            <Route path="/product/details/:id" element={<ProductDetails/>}/>
            <Route path="/product/update/:id" element={<UpdateProduct/>}/>

            <Route path="*" element={<Error/>}/>

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
