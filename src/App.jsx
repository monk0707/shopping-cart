import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

const App = () => {
  return(
    <div>
      <div className=" bg-slate-900 w-full">
        <Navbar/>
      </div>
      <div className="bg-gradient-to-r from-sky-400 to-blue-500">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
};

export default App;
