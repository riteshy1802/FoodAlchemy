import { ShoppingCart } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import avatar from "../../assets/avatar.png";
const Navbar = () => {
    return (
        <div className="w-[100%] text-[white] bg-[#118B50] py-3 px-10 flex items-center justify-between rounded-b-[4px]">
            <div>
                <p className="font-[Inter] text-lg font-[900]">Food Alchemy</p>
            </div>
            <div className="avatar--cart flex items-center gap-[1.5rem]">
                <img src={avatar} className="w-12 h-12 rounded-full cursor-pointer"/>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="bg-[#57b591] p-2 flex items-center justify-center rounded-[4px] cursor-pointer hover:bg-[#409977] transition duration-200 ease-in-out">
                                <ShoppingCart/>
                                <TooltipContent 
                                    className="mt-1 text-[0.7rem] py-1 px-2 font-[Inter] transition duration-200 ease-in-out duration"
                                >
                                    <p>Show Cart</p>
                                </TooltipContent>
                            </div>
                        </TooltipTrigger>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default Navbar