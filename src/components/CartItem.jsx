import {AiOutlineDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";


const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("item removed");
  }
  return(
    <div className="p-4 border-b-2 last:border-none border-slate-700">

    <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100 to-blue-300  rounded-lg">

      <div className="md:w-[30%] w-full flex justify-center items-center">
        <img src={item.image} alt="" className="w-[40%] md:w-[50%] lg:w-full rounded-sm hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"/>
      </div>
      <div className="md:w-[70%] w-full flex flex-col gap-5">
        <h1 className="text-xl font-[600] text-slate-700">{item.title}</h1>
        <h1 className="text-slate-700">{
          item.description.split(" ").slice(0,15).join(" ") + "..."}
        </h1>
        <div className="flex justify-between">
          <p className="font-bold text-blue text-lg">${item.price}</p>
          <div
          onClick={removeFromCart}
          className="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center
           hover:bg-red-400 group transition-all">
            <AiOutlineDelete fontSize={25} className="group-hover:text-white text-red-800 transition-all"/>
          </div>
        </div>

      </div>


    </div>

  </div>
  )
};

export default CartItem;
