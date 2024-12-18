import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import PriceDetails from "./PriceDetails";

const Cart = () => {

    const navigate = useNavigate();
    const handleBackToShoppping = () => {
        navigate('/')
    }

    return (
        <div className="w-[100%] mt-5 px-6 py-3 mb-10 flex justify-center">
            <div className="w-[80%] flex items-start gap-[1rem]">
                <div className="w-[70%]">
                    {/* Heading */}
                    <div className="w-[100%] bg-[#FBF6E9] rounded-t-[8px] p-4 flex items-center">
                        <div className="w-[100] flex items-center">
                            <div 
                                className="p-1 bg-[#f7f7f7] border-2 mr-5 rounded-[5px] hover:bg-[#e0e0e0] transition duration-200 cursor-pointer"
                                onClick={handleBackToShoppping}
                            >
                                <ArrowLeft size={18} color="#171717"/>
                            </div>
                            <p className="font-[500] text-[1.5rem] text-[#171717] font-[Inter]">Shopping Cart</p>
                        </div>
                        <div className="ml-auto">
                            <p className="font-[Inter] font-[450] text-[0.9rem] text-[#666666]">Total items : 10</p>
                        </div>
                    </div>

                    {/* Product CartItems */}
                    <div className="w-[100%] bg-[#effaed] px-4 py-5 flex rounded-b-[8px] gap-[1rem]">
                        <div className="w-[40%] flex items-center justify-center pt-2 pb-2 px-2 bg-[whitesmoke] rounded-[5px]">
                            <img src="https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg" className="h-[25vh] max-w-full rounded-[3px]"/>
                        </div>
                        <div className="w-[100%] bg-red-500">
                            hello
                        </div>
                    </div>
                </div>
                <PriceDetails/>
            </div>
        </div>
    )
}

export default Cart