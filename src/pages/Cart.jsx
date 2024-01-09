import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart])
  return(
    <div>
    {
      cart.length > 0  ? 
      
      (<div className=" flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
  
        <div className="lg:w-[70%]">
          {
            cart.map( (item,index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />
            } )
          }
        </div>
  
        <div className="w-full flex flex-col gap-8 justify-between sm:items-center md:items-center">
  
          <div className="mt-20">
            <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
            <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>
            <p className="font-[600] text-xl text-slate-700">
              Total Items: <span className="font-normal">{cart.length}</span>
            </p>
          </div>
  
          <div className="mb-20">
            <p className="text-slate-700 text-xl font-[600] mb-5 ">Total Amount: 
              <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>
            </p>
            <button className=" w-full py-2.5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 transition-all duration-300 ease-in">
            <span class=" w-full py-2.5 transition-all ease-in duration-75 bg-green-700 rounded-md group-hover:bg-opacity-0">
              Procced to checkout
            </span>
            </button>
          </div>
  
        </div>
  
  
      </div>) : 
      (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
        <h1 className="font-[600] text-xl">Your Cart is Empty !</h1>
        <Link to={"/"}>
        <button className=" w-40 py-2.5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 transition-all duration-300 ease-in">
            <span class=" w-full py-2.5 transition-all ease-in duration-75 bg-green-700 rounded-md group-hover:bg-opacity-0">
              Shop Now
            </span>
            </button>
        </Link>
      </div>)
    }
      </div>
  )
};

export default Cart;
