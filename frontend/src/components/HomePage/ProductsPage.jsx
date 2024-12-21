import { ArrowDown, Barcode, Search } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ProductCard from "./ProductCard";
import { useState } from "react";
import BarcodeModal from "./BarcodeModal";
import Spinner from "../Spinner/Spinner";
const ProductsPage = () => {

    const [showBarcodeInput,setShowBarcodeInput] = useState(false); 

    const modalOpenFunction = () => {
        setShowBarcodeInput((prev)=>!prev);
    }

    const [loading, setLoading] = useState(false);

    const disabledStyles = {
        backgroundColor:"#f5f5f5",
        hover:{
            scale : 0
        }
    }

    const setLoad = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },1000)
    }
    


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
                    <div className="w-[10%]">
                        <button 
                            type="button" 
                            className="font-[Inter] w-[100%] bg-[#138B4F] ml-auto text-[white] px-3 py-1.5 rounded-[4px] hover:bg-[#166b41] transition duration-200 ease-in-out active:scale-[0.98] text-[0.9rem]"
                        >
                            Search
                        </button>
                    </div>
                    <div className="w-[15%]">
                        <div className="w-[100%] flex items-center justify-center bg-[#f2f2f2] rounded-[2px] hover:bg-[#d1d1d1] transition duration-100 ease-in-out cursor-pointer">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className="w-[100%]" onClick={modalOpenFunction}>
                                            <div className="w-[100%] flex items-center justify-center py-1 px-5 rounded-[2px] cursor-pointer">
                                                <p className="flex items-center gap-[0.5rem] text-[0.9rem] text-[#171717] font-[Inter] font-[450]">
                                                    <Barcode size={25} color="#383838"/>Barcode
                                                </p>
                                            </div>
                                        </div>
                                        <TooltipContent className="cursor-default text-[0.6rem] font-medium py-1 px-2 font-[Inter] transition duration-200 ease-in-out">
                                            <p>Search using barcode</p>
                                        </TooltipContent>
                                    </TooltipTrigger>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        {showBarcodeInput && 
                            <div className="absolute bottom right-8 mt-2 z-[100]">
                                <BarcodeModal
                                    modalOpenFunction={modalOpenFunction}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="px-4">
                <p className="font-[600]  text-[1.8rem] text-[#383838]">Something based on recent searches..</p>
            </div>


            <div className="w-[100%] flex px-4 flex-wrap justify-start gap-[0.2rem]">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className="w-[100%] flex px-5">
                {!loading ? 
                    <button 
                        className={`ml-auto mt-2 ${loading ? "border-2 border-[#d4d4d4]" : "border-2 border-[whitesmoke]"} px-4 py-1.5 bg-[#e3e3e3] hover:bg-[#cccccc] font-[Inter] rounded-[3px]`}
                        style={loading ? disabledStyles : null}
                        disabled = {loading}
                        onClick={setLoad}
                    >
                        {loading ? <div className="flex items-center justify-center gap-[0.5rem]">
                            <Spinner
                                width={4}
                                height={4}
                                fillColor="red"
                            />
                            <p className="text-[0.8rem] font-[500] font-[Inter]">Loading...</p>
                        </div>
                        :
                        <div className="flex items-center justify-center gap-[0.2rem]">
                            <p className="text-[0.8rem] font-[500] font-[Inter]">Load More</p>
                            <ArrowDown strokeWidth={1.5} size={15}/>
                        </div>
                    }
                    </button>
                    :
                    <div className="w-[100%] mt-2 flex items-center justify-center">
                        <div>
                            <Spinner
                                width={8}
                                height={8}
                                fillColor="red"
                            />
                        </div>
                    </div>
                }
            </div>
            
        </div>
    )
}

export default ProductsPage