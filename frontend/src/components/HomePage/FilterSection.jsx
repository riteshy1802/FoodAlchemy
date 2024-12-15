import { Check, ChevronsUpDown, RotateCcw, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRef, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { nanoid } from "nanoid";

const FilterSection = () => {

    const frameworks = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },
        {
            value: "nuxt.js",
            label: "Nuxt.js",
        },
        {
            value: "remix",
            label: "Remix",
        },
        {
            value: "astro",
            label: "Astro",
        },
    ]

    const [minValue, setMinValue] = useState(33);
    const [maxValue, setMaxValue] = useState(77);
    const [allergens, setAllergens] = useState([]);
    const allergenInputRef = useRef(null);

    const handleAllergensAddition = () => {
        const allergen = {
            id:nanoid(),
            name : allergenInputRef.current.value
        }
        setAllergens((prev)=>[...prev, allergen]);
        allergenInputRef.current.value="";
    }

    const handleAllergenDelete = (id) => {
        setAllergens((prev)=>prev.filter((item)=>item.id!==id));
    }

    const handleValueChange = (field, value) => {
        if(field==="min"){
            setMinValue(value);
            return;
        }
        if(field==="max"){
            setMaxValue(value);
            return;
        }
    }

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <div className="min-h-[80vh] w-[20%] ml-* border-2 py-2 px-4 sticky top-[6rem] left-0 rounded-[5px]">
            <div className="flex items-center w-[100%]">
                <p className="font-[Inter] text-[1rem] text-[#2e2e2e] font-[500] underline decoration-[#118B50] decoration-[1.5px]">Filters</p>
                    <div className="ml-auto">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="p-2 flex ml-auto bg-[#f2f2f2] hover:bg-[#c9c9c9] active:rotate-[-30deg] transition duration-100 ease-in-out cursor-pointer rounded-full">
                                        <RotateCcw size={15} color="#383838"/>
                                    </div>
                                    <TooltipContent className="cursor-default text-[0.6rem] font-medium py-1 px-2 font-[Inter] transition duration-200 ease-in-out">
                                        <p>Reset all changes</p>
                                    </TooltipContent>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
            </div>
            <div className="mt-4">
                <div className="mt-2">
                    <p className="font-[Inter] text-[gray] mb-1 text-[0.7rem]">Category</p>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[100%] justify-between font-[Inter] text-[0.83rem]"
                            >
                            {value
                                ? frameworks.find((framework) => framework.value === value)?.label
                                : "Select framework..."}
                            <ChevronsUpDown className="ml-1 h-2 w-2 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[100%] p-0">
                            <Command>
                            <CommandInput placeholder="Search framework..." />
                            <CommandList>
                                <CommandEmpty>No framework found.</CommandEmpty>
                                <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    >
                                    <Check
                                        className={cn(
                                        "h-3 w-3",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                    </CommandItem>
                                ))}
                                </CommandGroup>
                            </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>

                    {/* Sort Functionality */}
                    <div className="mt-3">
                        <p className="font-[Inter] text-[gray] mb-1 text-[0.7rem]">Sort By</p>
                        <Select>
                            <SelectTrigger className="w-[100%] h-8 font-[Inter] text-[0.8rem]">
                                <SelectValue placeholder="Sort By" defaultValue="A-Z"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem className="text-[0.8rem]" value="A-Z">A-Z</SelectItem>
                                    <SelectItem className="text-[0.8rem]" value="Z-A">Z-A</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Nutrition grade */}
                    <div className="mt-3">
                        <p className="font-[Inter] text-[gray] mb-1 text-[0.7rem]">Nutrition grade</p>
                        <Select>
                            <SelectTrigger className="w-[100%] h-8 font-[Inter] text-[0.8rem]">
                                <SelectValue placeholder="Nutrition grade" defaultValue="A-Z"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem className="text-[0.8rem]" value="asc">Ascending</SelectItem>
                                    <SelectItem className="text-[0.8rem]" value="desc">Descending</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Energy Inputs */}
                    <div className="mt-3">
                        <p className="font-[Inter] text-[gray] mb-1 text-[0.7rem]">Energy(Calories)</p>
                        <Select>
                            <SelectTrigger className="w-[100%] h-8 font-[Inter] text-[0.8rem]">
                                <SelectValue placeholder="Energy" defaultValue="A-Z"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem className="text-[0.8rem]" value="any">Any</SelectItem>
                                    <SelectItem className="text-[0.8rem]" value="inc">Increasing</SelectItem>
                                    <SelectItem className="text-[0.8rem]" value="dec">Decreasing</SelectItem>
                                    <div className="pb-3 mt-2">
                                        <div className="w-[100%] flex items-center">
                                            <p className="ml-3 font-[Inter] text-[#545454] mb-1 text-[0.7rem]">Custom</p>
                                            <div className="ml-auto mr-3">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <div className="p-1 flex ml-auto bg-[#f2f2f2] hover:bg-[#c9c9c9] active:rotate-[-30deg] transition duration-100 ease-in-out cursor-pointer rounded-full">
                                                                <RotateCcw size={10} color="#383838"/>
                                                            </div>
                                                            <TooltipContent className="cursor-default text-[0.6rem] font-medium py-1 px-2 font-[Inter] transition duration-200 ease-in-out">
                                                                <p>Change to default</p>
                                                            </TooltipContent>
                                                        </TooltipTrigger>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        </div>

                                        <div className="px-3">
                                            <div className="flex w-[100%]">
                                                <p className="font-[Inter] text-[gray] mb-1 text-[0.65rem]">Minimum</p>
                                                <p className="font-[Inter] text-[gray] mb-1 text-[0.65rem] ml-auto">{minValue} cal</p>
                                            </div>
                                            <Slider 
                                                defaultValue={[minValue]} 
                                                max={100} 
                                                step={1}
                                                onValueChange={(value)=>handleValueChange("min", value)} 
                                            />
                                        </div>
                                        <div className="px-3 mt-2">
                                            <div className="flex w-[100%]">
                                                <p className="font-[Inter] text-[gray] mb-1 text-[0.65rem]">Maximum</p>
                                                <p className="font-[Inter] text-[gray] mb-1 text-[0.65rem] ml-auto">{maxValue} cal</p>
                                            </div>
                                            <Slider 
                                                defaultValue={[maxValue]} 
                                                max={100} 
                                                step={1} 
                                                onValueChange={(value)=>handleValueChange("max", value)} 
                                            />
                                        </div>
                                    </div>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mt-3  w-[100%] h-auto">
                        <p className="font-[Inter] text-[gray] mb-1 text-[0.7rem]">Allergic To</p>
                        <input ref={allergenInputRef} className="w-[100%] font-[Inter] indent-[2px] text-[0.8rem] px-2 py-1.5 border border-3-gray rounded-[6px] focus:outline-none"/>
                        <div className="w-[100%] flex mt-2">
                            <button 
                                type="button" 
                                className="font-[Inter] bg-[#138B4F] ml-auto text-[white] px-3 py-1 rounded-[4px] hover:bg-[#166b41] transition duration-200 ease-in-out text-[0.7rem]"
                                onClick={handleAllergensAddition}
                            >
                                Add
                            </button>
                        </div>
                        <div className="mt-2 py-2 rounded-[4px] px-2 bg-[#f5f5f5] flex flex-wrap items-center gap-[0.5rem]">
                            {allergens.length>0 ? allergens.map(({id,name})=>(
                                <div key={id} className="px-2 py-0.5 bg-[#c7eadd] rounded-[10px] inline-flex items-center justify-between gap-[0.2rem]">
                                    <p className="text-[0.8rem]">{name}</p>
                                    <X 
                                        size={12} 
                                        className="cursor-pointer"
                                        onClick={()=>handleAllergenDelete(id)}
                                    /> 
                                </div>
                            ))
                            :
                                <div className="w-[100%] flex items-center justify-center">
                                    <p className="text-[#171717] font-[450] text-[0.8rem] font-[Inter]">No Allergens Added</p>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterSection