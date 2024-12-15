import { Barcode, Search } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
// import brbon from "../../assets/ProductsImages/brbon.png";
import mummagic from "../../assets/ProductsImages/mummagic.png";
const ProductsPage = () => {
    return (
        <div className="w-[100%] flex flex-col items-start justify-center">
            <div className="w-[100%] mt-2 flex p-4 flex-col justify-between">
                <div className="w-[100%] flex items-center gap-[1rem]">
                    <div className="relative w-[100%]">
                        <Search size={20} color="gray" className="absolute top-1.5 ml-2 left-0"/>
                        <div className="flex items-center gap-[2rem] w-[100%]">
                            <input className="indent-[30px] px-2 py-1.5 w-[100%] focus:outline-none border rounded-[4px] text-[0.9rem] font-[Inter]" placeholder="Search for something..."/>
                        </div>
                    </div>
                    <div className="w-[15%]">
                        <button 
                            type="button" 
                            className="font-[Inter] w-[100%] bg-[#138B4F] ml-auto text-[white] px-3 py-1.5 rounded-[4px] hover:bg-[#166b41] transition duration-200 ease-in-out text-[1rem]"
                        >
                            Search
                        </button>
                    </div>
                    <div className="w-[10%] flex items-center justify-center py-1 bg-[#f2f2f2] rounded-[2px] hover:bg-[#d1d1d1] transition duration-100 ease-in-out cursor-pointer">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                        <div className="w-[100%] flex items-center justify-center py-1 rounded-[2px] cursor-pointer">
                                            <Barcode size={25} color="#383838"/>
                                        </div>
                                    <TooltipContent className="cursor-default text-[0.6rem] font-medium py-1 px-2 font-[Inter] transition duration-200 ease-in-out">
                                        <p>Search using barcode</p>
                                    </TooltipContent>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <p className="font-[600] mt-3 text-[1.8rem] text-[#383838]">Something based on recent searches..</p>
            </div>
            <div className="w-[100%] flex px-4 flex-wrap justify-between">
                <div className="w-[220px] mr-2 rounded-[8px] border pb-3 cursor-pointer">
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
                                <p className="text-[0.8rem] text-[gray] ml-2">Qty:23g</p>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>

                <div className="w-[220px] mr-2 rounded-[8px] border pb-3 cursor-pointer">
                    <div className="w-[100%] flex items-center justify-center pt-2 pb-2 px-2 bg-[whitesmoke] rounded-bt-[8px]">
                        <img src="https://images.openfoodfacts.org/images/products/544/900/000/0996/front_en.782.400.jpg" className="h-[30vh] max-w-full rounded-[3px]"/>
                    </div>
                    <div className="w-[100%] px-2 mt-2">
                        <p className="font-[Inter]  font-[500] text-[#383838] text-[1rem]">Bourbon Biscuit</p>
                    </div>
                </div>

                <div className="w-[220px] mr-2 rounded-[8px] border pb-3 cursor-pointer">
                    <div className="w-[100%] flex items-center justify-center pt-2 pb-2 px-2 bg-[whitesmoke] rounded-bt-[8px]">
                        <img src="https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.633.400.jpg" className="h-[30vh] max-w-full rounded-[3px]"/>
                    </div>
                    <div className="w-[100%] px-2 mt-2">
                        <p className="font-[Inter]  font-[500] text-[#383838] text-[1rem]">Bourbon Biscuit</p>
                    </div>
                </div>

                <div className=" w-[220px] mr-2 rounded-[8px] bg-[gray] pb-3 cursor-pointer">
                    <img src={mummagic} className="w-[100%] h-[30vh] rounded-[8px]"/>

                </div>
                <div className=" w-[220px] mr-2 rounded-[8px] bg-[gray] pb-3 cursor-pointer">
                    <img src={mummagic} className="w-[100%] h-[30vh] rounded-[8px]"/>

                </div>
            </div>
        </div>
    )
}

export default ProductsPage