import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Subject from "./Subject/Subject";
import Signup from "./components/signup";
import BookDetails from "./components/BookDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cards";
import AddCart from "./components/AddCart";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Subject /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="book/:id" element={<BookDetails/>}/>
           <Route path="/Addcart" element={<AddCart/>}/> 
        </Routes>
        <Toaster />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
