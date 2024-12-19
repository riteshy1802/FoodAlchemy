import Barcode from "react-barcode"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import NutriScore from "./NutriScore";

const ProductDetails = () => {

    const [activeImage, setActiveImage] = useState('https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg');

    const imageClicked = (url) => {
        console.log(url);
        setActiveImage(url);
    }

    const images = [
        {id:1, url:'https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg', brokenImage:'Broken'},
        {id:1, url:'https://images.openfoodfacts.org/images/products/073/762/806/4502/ingredients_en.10.400.jpg', brokenImage:'Broken'},
        {id:1, url:'https://images.openfoodfacts.org/images/products/073/762/806/4502/nutrition_en.12.400.jpg', brokenImage:'Broken'},
    ]

    const ingredients =  [
        "en:rice-noodles",
        "en:seasoning-packet",
        "en:rice",
        "en:water",
        "en:peanut",
        "en:sugar",
        "en:salt",
        "en:corn-starch",
        "en:spice",
        "en:hydrolysed-soy-protein",
        "en:spring-onion",
        "en:e330",
        "en:peanut-oil",
        "en:sesame-oil",
        "en:natural-flavouring",
        "en:chili-pepper",
        "en:cinnamon",
        "en:pepper",
        "en:cumin",
        "en:clove"
    ]

    const removeLangTag = (str) => {
        const splittedString = str.split(":")[1];
        if (!splittedString) return ""; 
        const withoutHyphens = splittedString.replace(/-/g, " ");
        const uppercase = withoutHyphens.charAt(0).toUpperCase() + withoutHyphens.slice(1);
        return uppercase;
    };
    
    


    return (
        <div
            className="mt-28 pb-5 flex items-center justify-center"
        >
            <div className="w-[85%] p-[3%] px-[5] rounded-[6px] flex">
                <div className="w-[100%] flex items-start gap-[2rem]">
                    <div>
                        <div className="w-[100%] px-3 py-5 rounded-[5px] flex justify-center bg-[whitesmoke]">
                            <img src={activeImage} className="h-[30vh] max-w-full rounded-[3px]"/>
                        </div>
                        <div className="w-[100%] flex items-center justify-center gap-[1rem] mt-4">
                            <div className="bg-[#f2f2f2] p-1.5 rounded-[5px] cursor-pointer hover:bg-[#e3e3e3] transition duration-200 ease-in-out">
                                <ArrowLeft size={15} className=""/>
                            </div>
                            <div className="w-[100%] border-l-2 px-3 border-r-2 flex items-center justify-center gap-[0.5rem]">
                                {
                                    images.length>0 &&
                                    images.map(({id, url, brokenImage})=>(
                                        <div 
                                            key={id} 
                                            className={`w-[30%] p-2 rounded-[5px] flex justify-center bg-[whitesmoke] cursor-pointer ${(activeImage===url) ? `border-2 border-[green]` : null}`}
                                            onClick={()=>imageClicked(url)}
                                        >
                                            <img src={url} alt={brokenImage} className="h-[8vh] max-w-full rounded-[3px]"/>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="bg-[#f2f2f2] p-1.5 rounded-[5px] cursor-pointer hover:bg-[#e3e3e3] transition duration-200 ease-in-out">
                                <ArrowRight size={15} className=""/>
                            </div>
                        </div>
                        <div className="flex gap-[1rem] mt-5 items-center justify-center">
                            <button 
                                type="button" 
                                className="font-[Inter] bg-[#28a745] text-[white] px-3 py-1.5 rounded-[4px] hover:bg-[#218838] transition duration-200 ease-in-out text-[0.9rem] flex items-center gap-[1rem]"
                            >
                                <FaShoppingCart/>Add to Cart
                            </button>
                            <button 
                                type="button" 
                                className="font-[Inter] bg-[#ff6b6b] text-[white] px-3 py-1.5 rounded-[4px] hover:bg-[#e05656] transition duration-200 ease-in-out text-[0.9rem] flex items-center gap-[1rem]"
                            >
                                <FaHeart/>Add to Wishlist
                            </button>
                        </div>
                    </div>
                    <div className="w-[70%] rounded-[3px]">
                    <div className="w-[100%]">
                        <p className="text-[1.5rem] text-[#363636] font-[Inter] font-[550] break-words">
                            Thai peanut noodle kit includes stir-fry rice noodles & thai peanut seasoning
                        </p>
                    </div>
                    <p className="text-[0.9rem] mt-1 text-[#616161] font-[Inter] font-[600]">Brand - Thai Kitchen,Simply Asia</p>
                    <div className="w-[100%] flex flex-wrap items-center gap-[0.2rem] mt-3">
                        <p className="text-[#3b3b3b] font-[Inter] text-[0.8rem] font-[Inter] font-[500] rounded-[20px] bg-[#FBF6E9] inline-flex px-1 py-0.5 text-[black]">Gluten-Free</p>
                        <p className="text-[#3b3b3b] font-[Inter] text-[0.8rem] font-[Inter] font-[500] rounded-[20px] bg-[#FBF6E9] inline-flex px-1 py-0.5 text-[black]">Gluten-Free</p>
                        <p className="text-[#3b3b3b] font-[Inter] text-[0.8rem] font-[Inter] font-[500] rounded-[20px] bg-[#FBF6E9] inline-flex px-1 py-0.5 text-[black]">Gluten-Free</p>
                    </div>
                    <div className="flex items-center w-[100%]">
                        <div className="flex items-center">
                            <p className="text-[0.9rem] text-[#616161] font-[Inter] font-[600] mr-3">Nutri-Score - </p>
                            <NutriScore
                                score="C"
                                width={8}
                                height={8}
                            />
                        </div>
                        <Barcode 
                            className="ml-auto"
                            value="3017620425035"
                            format="CODE128"
                            width={1.5}
                            height={40}
                        />
                    </div>
                    <div>
                        <p className="text-[0.9rem] text-[#616161] font-[Inter] font-[600]">Ingredients - </p>
                        <div className="w-[70%]">
                            {ingredients.length > 0 && 
                                ingredients.map((item, index) => (
                                <span key={index} className="text-[#333333]">
                                    {removeLangTag(item)}
                                    {index < ingredients.length - 1 && ", "}
                                </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ProductDetails