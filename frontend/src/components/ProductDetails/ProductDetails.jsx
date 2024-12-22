import Barcode from "react-barcode"
import { ArrowLeft, ArrowRight } from "lucide-react"
import React, { useEffect, useState } from "react"
import { FaHeart, FaShoppingCart  } from "react-icons/fa";
import NutriScore from "./NutriScore";
import Nova from "./Nova";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const ProductDetails = () => {

    const [nutrients, setNutrients] = useState([]);
    const product = useSelector((state) => state.product);
    const [images, setImages] = useState([]); 
    const [activeImage, setActiveImage] = useState("");
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        filterNutriments(product.nutriments);
        if(product){
            console.log(product.labels);
            const labelData = product.labels.split(", ");
            console.log(labelData);
            setLabels(labelData)
        }
        setImages([
            {id: nanoid(), url: product.image_url ? product.image_url : "", brokenImage: 'Broken'},
            {id: nanoid(), url: product.image_packaging_url ? product.image_packaging_url : "", brokenImage: 'Broken'},
            {id: nanoid(), url: product.image_nutrition_url ? product.image_nutrition_url : "", brokenImage: 'Broken'},
            {id: nanoid(), url: product.image_ingredients_url ? product.image_ingredients_url : "", brokenImage: 'Broken'},
        ]);
    }, [product]);

    useEffect(() => {
        if (images.length > 0) {
            setActiveImage(images[0].url);
        }
    }, [images]);  

    const imageClicked = (url) => {
        setActiveImage(url);
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
                    <div className="flex flex-col items-center">
                        <div className="w-[25rem] py-5 rounded-[5px] flex justify-center bg-[whitesmoke]">
                            <img src={activeImage} className=" cursor-pointer h-[30vh] max-w-[80%] object-contain rounded-[3px]"/>
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
                            {product.product_name_en}
                        </p>
                    </div>
                    <p className="text-[0.9rem] mt-1 text-[#616161] font-[Inter] font-[600]">Brand - {product.brands}</p>
                    <div className="w-[100%] flex flex-wrap items-center gap-[0.2rem] mt-3">
                        {
                            labels.map((item)=>(
                                <p key={nanoid()} className="text-[#3b3b3b] font-[Inter] text-[0.8rem] font-[Inter] font-[500] rounded-[20px] bg-[#FBF6E9] inline-flex px-1 py-0.5 text-[black]">{item}</p>
                            ))
                        }
                    </div>
                    <div className="flex items-center w-[100%]">
                        <div className="flex items-center gap-[2rem]">
                            <div className="flex items-center">
                                <p className="text-[0.9rem] text-[#616161] font-[Inter] font-[600] mr-3">Nutri-Score - </p>
                                <NutriScore
                                    score={upperCase(product.nutriscore_grade)}
                                    width={8}
                                    height={8}
                                />
                            </div>
                            <div className="flex inline-block cursor-pointer">
                                <Nova
                                    novaScore={product.nova_group}
                                    pd={'px-2 py-1'}
                                    text={ `text-[0.9rem]`}
                                />
                            </div>
                        </div>
                        <Barcode 
                            className="ml-auto"
                            value={product.code}
                            format="CODE128"
                            width={1.5}
                            height={40}
                        />
                    </div>
                    <div>
                        <p className="text-[0.9rem] text-[#616161] font-[Inter] font-[600]">Ingredients - </p>
                        <div className="w-[70%]">
                            {product.ingredients_tags.length > 0 && 
                                product.ingredients_tags.map((item, index) => (
                                <span key={index} className="text-[#333333]">
                                    {removeLangTag(item)}
                                    {index < product.ingredients_tags.length - 1 && ", "}
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