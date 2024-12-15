import { ShoppingCart } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import avatar from "../../assets/avatar.png";

const Navbar = () => {
    return (
        <div className="w-full text-white bg-[#118B50] py-3 sticky top-0 left-0 z-50 rounded-b-[5px]">
            <div className="w-[98%] px-2 mx-auto flex items-center justify-between">
                <div className="flex">
                    <p className="font-[Inter] text-[whitesmoke] text-lg font-bold cursor-pointer bg-[#409977] rounded-bl-[4px] rounded-tl-[4px] py-1 px-2">
                        Food
                    </p>
                    <p className="font-[Inter] text-lg text-[#409977] font-bold cursor-pointer bg-[whitesmoke] rounded-br-[4px] rounded-tr-[4px] py-1 px-2">
                        Alchemy
                    </p>
                </div>
                <div className="avatar--cart flex items-center gap-[1.5rem]">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <img src={avatar} className="w-12 h-12 rounded-full cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent className="cursor-default text-[0.6rem] font-medium py-1 px-2 font-[Inter] transition duration-200 ease-in-out">
                                <p>Profile</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="bg-[#419977] p-2 flex items-center justify-center rounded-[4px] cursor-pointer hover:bg-[#449173] transition duration-200 ease-in-out">
                                    <ShoppingCart />
                                </div>
                                <TooltipContent className="cursor-default text-[0.6rem] font-medium py-1 px-2 font-[Inter] transition duration-200 ease-in-out">
                                    <p>Show Cart</p>
                                </TooltipContent>
                            </TooltipTrigger>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
