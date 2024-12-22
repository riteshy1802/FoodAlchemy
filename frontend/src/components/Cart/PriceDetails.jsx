import { useRef, useState } from "react"
import toast from "react-hot-toast";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import { useSelector } from "react-redux";


const PriceDetails = () => {

    const { width, height } = useWindowSize()
    const priceDetails = [
        {id : 1, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", price:2000},
        {id : 2, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", price:2000},
        {id : 3, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", price:2000},
        {id : 4, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", price:2000},
        {id : 5, name:"VeBNoR Printed Men Polo Neck Dark Green T-Shirt", price:2000},
    ]

    const cart = useSelector((state)=>state.cart.cart);


    const [couponApplied, setCouponApplied] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const couponRef = useRef(null);

    const applyCoupon = () => {
        const value = couponRef.current.value;
        if(value){
            if(couponApplied===false){
                if(value==='FA_NEW_YEAR_2024'){
                    toast.success("🎉 Coupon Applied Successfully",{
                        position:'top-right'
                    });
                    couponRef.current.value=""
                    setCouponApplied(true);
                    setShowConfetti(true);
                    setTimeout(() => {
                        setShowConfetti(false);
                    }, 5000);
                }else{
                    toast.error("Invalid Coupon Applied!",{
                        position:'top-right'
                    })
                }
            }else{
                if(value!='FA_NEW_YEAR_2024'){
                    toast.error("Invalid Coupon Applied!",{
                        position:'top-right'
                    })
                }else{
                    toast("😀 Coupon already applied!", {
                        position:'top-right'
                    })
                }
            }
        }else{
            toast("☹️ Please enter a coupon code!", {
                position:'top-right'
            })
        }
    }

    return (
        <>
            {
                showConfetti && 
                    <Confetti
                    width={width}
                    height={height}
                />
            }
            <div className="w-[30%] overflow-x-hidden">
                <div className="w-[100%] px-4 py-3 border-2 border-[#f5f5f5] rounded-[6px] shadow-md">
                    <div className="w-[100%]">
                        <p className="font-[Inter] font-[700] text-[0.9rem] mb-3 text-[#858585]">PRICE DETAILS</p>
                        <hr/>
                    </div>
                    <div className="mt-3">
                        {
                            cart?.map((item)=>(
                                <div key={item.code} className="flex mt-2 mb-2 items-center justify-between gap-[2rem]">
                                    <p className="font-[Inter] text-[0.85rem] text-[#323333] font-[500]">{item.product_name}</p>
                                    <p className="font-[Inter] font-[500] text-[0.9rem]  text-[#323333]">₹2000</p>
                                </div>
                            ))
                        }
                        <hr className="mt-3"/>
                        <div className="w-[100%] flex mt-1 items-center justify-between gap-[2rem]">
                            <p className="font-[Inter] text-[0.8rem] text-[#323333] font-[600] text-[1rem]">{couponApplied ?  "SubTotal" : "Total" }</p>
                            <p className="ml-auto font-[Inter] font-[500] text-[0.9rem] mb-2 text-[#323333] mt-2">₹10000</p>
                        </div>
                        {couponApplied && <div className="w-[100%] flex mt-1 items-center justify-between gap-[2rem]">
                            <p className="font-[Inter] text-[0.8rem] text-[#323333] font-[550] text-[0.85rem]">Discount</p>
                            <p className="ml-auto font-[Inter] font-[500] text-[0.9rem] mb-2 mt-2 text-[green]"><span className="text-[black]">-</span> ₹3333.33</p>
                        </div>}
                        {couponApplied &&
                            <>
                                <hr/>
                                <div className="w-[100%] flex mt-1 items-center justify-between gap-[2rem]">
                                    <p className="font-[Inter] text-[0.8rem] text-[#323333] font-[600] text-[1rem]">Grand Total</p>
                                    <p className="ml-auto font-[Inter] font-[500] text-[0.9rem] mb-2 text-[#323333] mt-2">₹7777.77</p>
                                </div>
                            </>
                        }
                        {couponApplied && 
                            <div className="w-[100%] bg-[#E3F0AF] rounded-[5px] px-4 py-2">
                                <p className="font-[Inter] text-[0.8rem] font-[500] text-[#363636]">🥳 You scored big—30% savings on your purchase!</p>
                            </div>
                        }
                        <div>
                            <button className="bg-[#0c7842] hover:bg-[#0d693b] active:bg-[#05592f] transition duration-200 ease-in-out mt-2 rounded-[3px] px-3 py-2 font-[Inter] font-[500] text-[whitesmoke] w-[100%]">Pay</button>
                        </div>
                    </div>
                </div>
                <div className="mt-3 bg-[white] px-4 py-3 rounded-[6px] border-2 border-[#f5f5f5] shadow-md">
                    <div>
                        <p className="font-[Inter] font-[700] text-[0.9rem] mb-1 text-[#858585]">Coupon</p>
                        {/* <p className="font-[500] text-[#454545]">Coupon</p> */}
                        <p className="text-[0.75rem] text-[gray]">Got a coupon? Save even more by entering it below!</p>
                    </div>
                    <div className="w-[100%] flex items-center mt-2 gap-[1rem]">
                        <input 
                            placeholder="eg. AYE28ks"
                            className="w-[80%] font-[Inter] indent-[2px] text-[0.85rem] px-2 py-1.5 border border-3-gray rounded-[6px] focus:outline-none"
                            ref={couponRef}
                        />
                        <button 
                            type="button" 
                            className="w-[20%] font-[Inter] bg-[#138B4F] text-[white] px-3 py-2 rounded-[6px] hover:bg-[#166b41] active:scale-[0.97] active:bg-[#12633b] transition duration-200 ease-in-out text-[0.8rem]"
                            onClick={applyCoupon}
                        >
                            Apply
                        </button>
                    </div>
                </div>
                <div className="mt-2 bg-[#095931] text-[whitesmoke] mt-3 rounded-[4px] px-4 py-3">
                    <p className="font-[Inter] text-[0.85rem]">🥳 Kickstart 2024 with a Bang! Use code <span className="font-[700]">FA_NEW_YEAR_2024</span> and enjoy exclusive savings!</p>
                </div>
            </div>
        </>
    )
}

export default PriceDetails