import { ArrowLeft } from "lucide-react"
// import { MoveRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import PriceDetails from "./PriceDetails";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {

    const navigate = useNavigate();
    const handleBackToShoppping = () => {
        navigate('/')
    }

    const cart = useSelector((state)=>state.cart.cart);

    // const continueShopping = () => {
    //     navigate('/');
    // }

    const totalItems = (cartItems) => {
        console.log(cartItems);
        const sum = cartItems.reduce((accumulator, currentValue)=>accumulator+currentValue.quantity,0);
        return sum;
    }


    return (
        <div className="w-[100%] mt-20 px-6 py-3 mb-10 flex justify-center">
            <div className="w-[80%] flex items-start gap-[1rem]">
                <div className="w-[70%]">
                    {/* Heading */}
                    <div>
                        <div className="shadow-md rounded-[5px] pb-10">
                            <div className="w-[100%] bg-[#036E39] rounded-[5px] p-4 flex items-center">
                                <div className="w-[100] flex items-center">
                                    <div 
                                        className="p-1 bg-[#f7f7f7] border-2 mr-5 rounded-[5px] hover:bg-[#e0e0e0] transition duration-200 cursor-pointer"
                                        onClick={handleBackToShoppping}
                                    >
                                        <ArrowLeft size={18} color="#171717"/>
                                    </div>
                                    <p className="font-[550] text-[1.2rem] text-[whitesmoke] font-[Inter]">Shopping Cart</p>
                                </div>
                                <div className="ml-auto">
                                    <p className="font-[Inter] font-[450] text-[0.85rem] text-[whitesmoke]">Total items : {totalItems(cart)}</p>
                                </div>
                            </div>

                            {/* Product CartItems */}
                            {cart?.length>0 &&
                                    cart.map((item, index)=>(
                                    <div key={item.id} className="">
                                        <CartItem
                                            element={item}
                                        />
                                        {index!==cart.length-1 && 
                                            <div className="w-[100%] px-5">
                                            <hr className="mt-5"/>
                                        </div>}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* <div className="w-[100%]  py-3 flex justify-end">
                        <button 
                            type="button" 
                            className="font-[Inter] bg-[#138B4F] ml-auto text-[white] px-5 py-1.5 rounded-[4px] hover:bg-[#166b41] transition duration-200 ease-in-out text-[0.9rem] flex items-center gap-[1rem]"
                            onClick={continueShopping}
                        >
                            Continue Shopping <MoveRight/>
                        </button>
                    </div> */}
                </div>
                <PriceDetails/>
            </div>
        </div>
    )
}

export default Cart