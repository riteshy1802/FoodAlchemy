import { addToCart, decreaseCount, removeFromCart } from "@/redux/CartReducer/Cart";
import { Minus, Plus } from "lucide-react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const CartItem = ({element}) => {
    const [deliverDate, setDeliverDate] = useState();

    useEffect(() => {
        const today = new Date();

        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + 3);

        const formattedDate = deliveryDate.toLocaleDateString("en-GB", {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
        });

        setDeliverDate(formattedDate);
    }, []);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="select-none w-[100%] px-4 pt-5 flex items-start rounded-b-[8px] gap-[1rem]">
                <div className="w-[40%] flex flex-col items-center justify-center pt-2  px-2 rounded-[5px]">
                    <div className="w-[100%] flex items-center justify-center bg-[#f7f7f7] rounded-[5px]">
                        <img src={element.image_url} className="h-[15vh] max-w-full rounded-[3px]"/>
                    </div>
                </div>
                <div className="w-[100%] pt-2 flex items-center gap-[1rem]">
                    <div>
                        <div>
                            <p className="text-[1.1rem] hover:underline cursor-pointer overflow-ellipsis whitespace-nowrap overflow-hidden">{element.product_name}</p>
                            <p className="text-[0.8rem] mt-1 font-[500] text-[gray]">Qty : {element.quantity}</p>
                        </div>
                        <p className="text-[0.9rem] mt-2 font-[500]">Delivery by {deliverDate}</p>
                        <div className="flex items-end gap-[0.5rem]">
                            <div className="mt-1 flex items-end gap-[0.5rem]">
                                <p className="text-[0.9rem] font-[500] line-through text-[#a3a3a3]">₹10000</p>
                                <p className="text-[1rem] font-[500] text-[#171717]">₹10000</p>
                            </div>
                            <div>
                                <p className="text-[0.85rem] font-[500] text-[green]">30% Off 1 coupon applied</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="select-none w-[100%] px-4 flex items-center rounded-b-[8px] gap-[1rem]">
                <div className="w-[40%] flex flex-col items-center justify-center px-2 rounded-[5px]">
                    <div className="w-[50%] flex items-center justify-center mt-1 gap-[0.5rem]">
                        <div 
                            className="px-1.5 py-1.5 bg-[#138B4F] cursor-pointer rounded-full"
                            onClick={()=>dispatch(decreaseCount(element))}
                        >
                            <Minus size={15} color="white"/>
                        </div>
                        <p className="flex justify-center border-2 px-5 items-center flex-1">{element.quantity}</p>
                        <div 
                            className="px-1.5 py-1.5 bg-[#138B4F] cursor-pointer rounded-full"
                            onClick={()=>dispatch(addToCart(element))}
                        >
                            <Plus size={15} color="white"/>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] flex items-center mt-2 gap-[1rem]">
                    <p className="font-[Inter] text-[0.8rem] font-[550] cursor-pointer text-[#171717] hover:text-[green]">SAVE FOR LATER</p>
                    <p 
                        className="font-[Inter] text-[0.8rem] font-[550] cursor-pointer text-[#171717] hover:text-[green]"
                        onClick={()=>dispatch(removeFromCart(element))}
                    >REMOVE</p>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes={
    element:PropTypes.object,
}

export default CartItem