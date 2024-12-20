import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Minus, Plus } from "lucide-react";
import NutriScore from "../ProductDetails/NutriScore";
import Nova from "../ProductDetails/Nova";
const ProductCard = () => {

    const trimText = (text) => {
        if (text.length > 30) {
            return text.slice(0, 35) + '...';
        }
        return text;
    }

    return (
        <div className="w-[220px] mr-2 mt-2 rounded-[8px] border pb-3 cursor-pointer border-2 border-[white] hover:border-2 hover:border-[#078246] transition-shadow duration-300">
            <div className="w-[100%] flex items-center justify-center pt-2 pb-2 px-2 bg-[whitesmoke] rounded-t-[8px]">
                <img src="https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg" className="h-[25vh] max-w-full rounded-[3px]"/>
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
            <div className="w-[100%] px-3 py-1 flex items-center mt-2">
                <p className="font-[Inter] font-[450] text-[#5c5c5c]">₹48</p>
                <div className="ml-auto flex items-center gap-[0.5rem]">
                    <div className="ml-auto">
                        <NutriScore
                            score="B"
                            width={3}
                            height={4}
                        />
                    </div>
                    <Nova
                        novaScore={3}
                        pd={'px-1 py-0.5'}
                        text={ `text-[0.7rem]`}
                    />
                </div>
            </div>
            <div className="w-[100%] px-3 mt-2">
                <button className="w-[100%] bg-[#118B50] active:bg-[#0e7342] transition duration-150 ease-in-out py-1 flex items-center gap-[0.5rem] justify-center rounded-[3px] text-[white]">
                    <Plus color="white" size={18}/>Add
                </button>
                {/* <div className="w-[100%] flex items-center justify-center gap-1">
                    <button className="px-3 py-1.5 bg-[#138B4F] rounded-[5px]"><Minus size={15} color="white"/></button>
                    <p className="flex justify-center items-center w-[20%] border-2 rounded-[2px]">4</p>
                    <button className="px-3 py-1.5 bg-[#138B4F] rounded-[5px]"><Plus size={15} color="white"/></button>
                </div> */}
            </div>
        </div>
    )
}

export default ProductCard