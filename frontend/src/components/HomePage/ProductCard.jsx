import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Minus, Plus } from "lucide-react";
const ProductCard = () => {

    const trimText = (text) => {
        if (text.length > 30) {
            return text.slice(0, 35) + '...';
        }
        return text;
    }

    return (
        <div className="w-[220px] mr-2 mt-2 rounded-[8px] border pb-3 cursor-pointer hover:shadow-md transition-shadow duration-300">
            <div className="w-[100%] flex items-center justify-center pt-2 pb-2 px-2 bg-[whitesmoke] rounded-bt-[8px]">
                <img src="https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg" className="h-[30vh] max-w-full rounded-[3px]"/>
            </div>
            <div className="w-[100%] flex justify-center items-center px-2 mt-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <p className="font-[Inter] font-[500] text-[#383838] text-[0.9rem]">Stir fry Rice Noodles</p>
                            <TooltipContent className="cursor-default text-[0.6rem] font-medium py-1 px-2 font-[Inter] transition duration-200 ease-in-out">
                                <p className="font-[Inter] text-[0.7rem]">Stir fry Rice Noodles</p>
                            </TooltipContent>
                        </TooltipTrigger>
                        <p className="text-[0.8rem] font-[450] text-[gray] ml-2">Qty:23g</p>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="w-[100%] px-3">
                <p className="text-[#171717] font-[Inter] text-[0.65rem]">{trimText("Categories : Breakfasts, Spreads, Sweet spreads, fr:Pâtes à tartiner, Hazelnut spreads, Chocolate spreads, Cocoa and hazelnuts spreads")}</p>
            </div>
            <div className="w-[100%] px-3 flex flex-wrap items-center gap-[0.2rem] mt-1">
                <p className="text-[#171717] font-[Inter] text-[0.6rem] font-[Inter] rounded-[20px] bg-[#FBF6E9] inline-flex px-1 py-0.5 text-[black]">Gluten-Free</p>
                <p className="teyt-[#171717] font-[Inter] text-[0.6rem] font-[Inter] rounded-[20px] bg-[#FBF6E9] inline-flex px-1 py-0.5 text-[black]">Gluten-Free</p>
                <p className="text-[#171717] font-[Inter] text-[0.6rem] font-[Inter] rounded-[20px] bg-[#FBF6E9] inline-flex px-1 py-0.5 text-[black]">Gluten-Free</p>
            </div>
            <div className="w-[100%] px-3 py-1 flex justify-center">
                <p className="font-[Inter] font-[450] text-[#5c5c5c]">Price : ₹48</p>
            </div>
            <div className="w-[100%] px-3 mt-2">
                {/* <button className="w-[100%] bg-[#118B50] py-1 flex items-center justify-center rounded-[3px]">
                    <Plus color="white"/>
                </button> */}
                <div className="w-[100%] flex items-center justify-center">
                    <button className="px-3 py-1.5 bg-[#138B4F] rounded-[5px]"><Minus size={15} color="white"/></button>
                    <p className="flex justify-center items-center flex-1">4</p>
                    <button className="px-3 py-1.5 bg-[#138B4F] rounded-[5px]"><Plus size={15} color="white"/></button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard