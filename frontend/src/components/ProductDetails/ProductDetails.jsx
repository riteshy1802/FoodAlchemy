import Barcode from "react-barcode"
import { ArrowLeft, ArrowRight } from "lucide-react"
import React, { useEffect, useState } from "react"
import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import NutriScore from "./NutriScore";
import Nova from "./Nova";
import { nanoid } from "nanoid";

const ProductDetails = () => {

    const [activeImage, setActiveImage] = useState('https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg');
    const [nutrients, setNutrients] = useState([]);

    const imageClicked = (url) => {
        console.log(url);
        setActiveImage(url);
    }

    const images = [
        {id:1, url:'https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg', brokenImage:'Broken'},
        {id:2, url:'https://images.openfoodfacts.org/images/products/073/762/806/4502/ingredients_en.10.400.jpg', brokenImage:'Broken'},
        {id:3, url:'https://images.openfoodfacts.org/images/products/073/762/806/4502/nutrition_en.12.400.jpg', brokenImage:'Broken'},
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
    const nutriments = {
        "carbohydrates": 9.1,
        "carbohydrates_100g": 9.1,
        "carbohydrates_prepared": 5,
        "carbohydrates_prepared_100g": 5,
        "carbohydrates_prepared_serving": 0.2,
        "carbohydrates_prepared_unit": "g",
        "carbohydrates_prepared_value": 5,
        "carbohydrates_serving": 0.364,
        "carbohydrates_unit": "g",
        "carbohydrates_value": 9.1,
        "carbon-footprint-from-known-ingredients_100g": 540.14,
        "carbon-footprint-from-known-ingredients_product": 1400,
        "carbon-footprint-from-known-ingredients_serving": 21.6,
        "energy": 577,
        "energy-kcal": 141,
        "energy-kcal_100g": 141,
        "energy-kcal_prepared": 50,
        "energy-kcal_prepared_100g": 50,
        "energy-kcal_prepared_serving": 2,
        "energy-kcal_prepared_unit": "kcal",
        "energy-kcal_prepared_value": 50,
        "energy-kcal_serving": 5.64,
        "energy-kcal_unit": "kcal",
        "energy-kcal_value": 141,
        "energy-kcal_value_computed": 142.3,
        "energy-kj": 577,
        "energy-kj_100g": 577,
        "energy-kj_prepared": 211,
        "energy-kj_prepared_100g": 211,
        "energy-kj_prepared_serving": 8.44,
        "energy-kj_prepared_unit": "kJ",
        "energy-kj_prepared_value": 211,
        "energy-kj_serving": 23.1,
        "energy-kj_unit": "kJ",
        "energy-kj_value": 577,
        "energy-kj_value_computed": 581.5,
        "energy_100g": 577,
        "energy_prepared": 211,
        "energy_prepared_100g": 211,
        "energy_prepared_serving": 8.44,
        "energy_prepared_unit": "kJ",
        "energy_prepared_value": 211,
        "energy_serving": 23.1,
        "energy_unit": "kJ",
        "energy_value": 577,
        "fat": 0.5,
        "fat_100g": 0.5,
        "fat_prepared": 1.6,
        "fat_prepared_100g": 1.6,
        "fat_prepared_serving": 0.064,
        "fat_prepared_unit": "g",
        "fat_prepared_value": 1.6,
        "fat_serving": 0.02,
        "fat_unit": "g",
        "fat_value": 0.5,
        "fiber": 45.3,
        "fiber_100g": 45.3,
        "fiber_prepared": 0.9,
        "fiber_prepared_100g": 0.9,
        "fiber_prepared_serving": 0.036,
        "fiber_prepared_unit": "g",
        "fiber_prepared_value": 0.9,
        "fiber_serving": 1.81,
        "fiber_unit": "g",
        "fiber_value": 45.3,
        "fruits-vegetables-legumes-estimate-from-ingredients_100g": 63,
        "fruits-vegetables-legumes-estimate-from-ingredients_serving": 63,
        "fruits-vegetables-nuts-estimate-from-ingredients_100g": 63,
        "fruits-vegetables-nuts-estimate-from-ingredients_serving": 63,
        "magnesium": 0.82,
        "magnesium_100g": 0.82,
        "magnesium_prepared": 0.0282,
        "magnesium_prepared_100g": 0.0282,
        "magnesium_prepared_serving": 0.00113,
        "magnesium_prepared_unit": "mg",
        "magnesium_prepared_value": 28.2,
        "magnesium_serving": 0.0328,
        "magnesium_unit": "mg",
        "magnesium_value": 820,
        "nova-group": 4,
        "nova-group_100g": 4,
        "nova-group_serving": 4,
        "nutrition-score-fr": 0,
        "nutrition-score-fr_100g": 0,
        "proteins": 2.7,
        "proteins_100g": 2.7,
        "proteins_prepared": 3.4,
        "proteins_prepared_100g": 3.4,
        "proteins_prepared_serving": 0.136,
        "proteins_prepared_unit": "g",
        "proteins_prepared_value": 3.4,
        "proteins_serving": 0.108,
        "proteins_unit": "g",
        "proteins_value": 2.7,
        "salt": 0.23,
        "salt_100g": 0.23,
        "salt_prepared": 0.1,
        "salt_prepared_100g": 0.1,
        "salt_prepared_serving": 0.004,
        "salt_prepared_unit": "g",
        "salt_prepared_value": 0.1,
        "salt_serving": 0.0092,
        "salt_unit": "g",
        "salt_value": 0.23,
        "saturated-fat": 0.1,
        "saturated-fat_100g": 0.1,
        "saturated-fat_prepared": 1,
        "saturated-fat_prepared_100g": 1,
        "saturated-fat_prepared_serving": 0.04,
        "saturated-fat_prepared_unit": "g",
        "saturated-fat_prepared_value": 1,
        "saturated-fat_serving": 0.004,
        "saturated-fat_unit": "g",
        "saturated-fat_value": 0.1,
        "sodium": 0.092,
        "sodium_100g": 0.092,
        "sodium_prepared": 0.04,
        "sodium_prepared_100g": 0.04,
        "sodium_prepared_serving": 0.0016,
        "sodium_prepared_unit": "g",
        "sodium_prepared_value": 0.04,
        "sodium_serving": 0.00368,
        "sodium_unit": "g",
        "sodium_value": 0.092,
        "sugars": 9.1,
        "sugars_100g": 9.1,
        "sugars_prepared": 4.9,
        "sugars_prepared_100g": 4.9,
        "sugars_prepared_serving": 0.196,
        "sugars_prepared_unit": "g",
        "sugars_prepared_value": 4.9,
        "sugars_serving": 0.364,
        "sugars_unit": "g",
        "sugars_value": 9.1
    }
    const filterNutriments = (nutriments) => {
        const filtered = Object.keys(nutriments).filter((key) => {
            if (
                key.includes("_100g") || key.includes("_serving") || key.includes("_prepared") || key.includes("_value_computed")
            ) {
            return false;
            }
        
            if (key === "energy-kj" && "energy-kcal" in nutriments) {
                return false;
            }
        
            const unitKey = `${key}_unit`;
            const valueKey = `${key}_value`;
            return nutriments[unitKey] && nutriments[valueKey] != null;
        });
        
        const data = filtered.map((key) => {
            const unitKey = `${key}_unit`;
            const valueKey = `${key}_value`;
            return {
            id: nanoid(),
            name: key,
            unit: nutriments[unitKey],
            value: nutriments[valueKey],
            };
        });
        console.log(data);
        setNutrients(data);
        return data;
    };

    useEffect(()=>{
        filterNutriments(nutriments);
    },[])



    const removeLangTag = (str) => {
        const splittedString = str.split(":")[1];
        if (!splittedString) return ""; 
        const withoutHyphens = splittedString.replace(/-/g, " ");
        const uppercase = withoutHyphens.charAt(0).toUpperCase() + withoutHyphens.slice(1);
        return uppercase;
    };

    const upperCase = (str) => {
        const upper = str.charAt(0).toUpperCase() + str.slice(1)
        return upper
    }
    
    


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
                        <div className="flex items-center gap-[2rem]">
                            <div className="flex items-center">
                                <p className="text-[0.9rem] text-[#616161] font-[Inter] font-[600] mr-3">Nutri-Score - </p>
                                <NutriScore
                                    score="C"
                                    width={8}
                                    height={8}
                                />
                            </div>
                            <div className="flex inline-block cursor-pointer">
                                <Nova
                                    novaScore={'3'}
                                    pd={'px-2 py-1'}
                                    text={ `text-[0.9rem]`}
                                />
                            </div>
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
                        <div>
                            <p className="text-[0.9rem] mt-4 text-[#616161] font-[Inter] font-[600]">Nutriments - </p>
                            <div className="grid w-[50%] grid-cols-[60%_40%] mt-1.5">
                                <div className="border-[1px] border-[#e0e0e0] px-2 py-1 font-[600] rounded-tl-[3px] text-[0.9rem]">Nutrition facts</div>
                                <div className="border-[1px] border-l-0 border-[#e0e0e0] px-2 py-1 rounded-tr-[3px] font-[600] text-[0.9rem]">As Packaged</div>
                                {
                                    nutrients.map((nutrient, index) => {
                                        console.log(index);

                                        return (
                                            <React.Fragment key={nutrient.id}>
                                                <div
                                                    className={`border-[1px] border-[#e0e0e0] border-t-0 px-2 py-1 ${index === nutrients.length - 1 ? "rounded-bl-[3px]" : ""}`}
                                                >
                                                    <p className="text-[0.85rem] text-[#363636] font-[Inter] font-[450]">{upperCase(nutrient.name)}</p>
                                                </div>
                                                <div
                                                    className={`border-[1px] border-l-0 border-t-0 border-[#e0e0e0] px-2 py-1 ${index === nutrients.length - 1 ? "rounded-br-[3px]" : ""}`}
                                                >
                                                    <p className="text-[0.85rem] text-[#363636] font-[Inter] font-[450]">{nutrient.value} (in {nutrient.unit})</p>
                                                    
                                                </div>
                                            </React.Fragment>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ProductDetails