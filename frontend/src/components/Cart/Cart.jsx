import { ArrowLeft, MoveRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import PriceDetails from "./PriceDetails";
import CartItem from "./CartItem";

const Cart = () => {

    const navigate = useNavigate();
    const handleBackToShoppping = () => {
        navigate('/')
    }


    const items = [
        {id:1, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", qty:10, price:10000, afterDiscount:null},
        {id:2, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", qty:10, price:10000, afterDiscount:null},
        {id:3, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", qty:10, price:10000, afterDiscount:null},
        {id:4, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", qty:10, price:10000, afterDiscount:null},
        {id:5, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", qty:10, price:10000, afterDiscount:null},
        {id:6, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", qty:10, price:10000, afterDiscount:null},
        {id:7, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", qty:10, price:10000, afterDiscount:null},
    ]

    const continueShopping = () => {
        navigate('/');
    }


    return (
        <div className="w-[100%] mt-20 px-6 py-3 mb-10 flex justify-center">
            <div className="w-[80%] flex items-start gap-[1rem]">
                <div className="w-[70%]">
                    {/* Heading */}
                    <div>
                        <div className="shadow-md rounded-[5px] pb-5">
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
                                    <p className="font-[Inter] font-[450] text-[0.85rem] text-[whitesmoke]">Total items : 10</p>
                                </div>
                            </div>

                            {/* Product CartItems */}

                            {items.length>0 &&
                                    items.map((item)=>(
                                    <div key={item.id} className="">
                                        <CartItem/>
                                        <div className="w-[100%] px-5">
                                            <hr className="mt-5"/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-[100%]  py-3 flex justify-end">
                    <button 
                        type="button" 
                        className="font-[Inter] bg-[#138B4F] ml-auto text-[white] px-5 py-1.5 rounded-[4px] hover:bg-[#166b41] transition duration-200 ease-in-out text-[0.9rem] flex items-center gap-[1rem]"
                        onClick={continueShopping}
                    >
                        Continue Shopping <MoveRight/>
                    </button>
                    </div>
                </div>
                <PriceDetails/>
            </div>
        </div>
    )
}

export default Cart