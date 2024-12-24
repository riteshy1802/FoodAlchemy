import { ArrowDown, Barcode, Search, X } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ProductCard from "./ProductCard";
import { useEffect, useRef, useState } from "react";
import BarcodeModal from "./BarcodeModal";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateProductsArray } from "@/redux/Products/ProductHome";
import toast from "react-hot-toast";
import LoadingPage from "../Spinner/LoadingPage";
import { updateBarcode } from "@/redux/Barcode/Barcode";
import { replaceSearchList } from "@/redux/Search/Search";

const ProductsPage = () => {
    const popupRef = useRef(null);
    const [showBarcodeInput, setShowBarcodeInput] = useState(false);
    const [page, setPage] = useState(1);
    const [mainLoading, setMainLoading] = useState(true);
    const [fetching, setFetching] = useState(false);
    const searchByTyping = useRef(null);
    const [hasInput,setHasInput] = useState(false);

    const modalOpenFunction = () => {
        setShowBarcodeInput((prev) => !prev);
    };

    const searchHasSomeText = () => {
        if(searchByTyping.current.value){
            setHasInput(true);
        }else{
            setHasInput(false);
        }
    } 

    const products = useSelector((state)=>state.allProducts.allProducts);

    useEffect(()=>{
        console.log(products)
    },[])

    const getIdOfItem = async(id, price, discount) => {
        await fetchProductUsingBarcode(id,price,discount);
    }

    const openInNewTabWithId = (id, price,discount) => {
        const url = `/product/${id}/price/${price}/discount/${discount}`;
        const fullUrl = window.location.origin + url;
        window.open(fullUrl, "_blank");
    };

    const search = useSelector((state)=>state.search.search);
    useEffect(()=>{
        console.log(search);
    },[search])

    const fetchFromSearch = async() => {
        const searchInput = searchByTyping.current.value;
        const plusAddToInput = searchInput.trim().replace(/\s+/g, "+");
        try {
            const response = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${plusAddToInput}&fields=product_name_en,brands,nutriscore_grade,nova_group,code,ingredients_tags,nutriments,image_url,image_packaging_url,image_nutrition_url,image_ingredients_url,labels,categories,quantity&json=true`);
            console.log(response.data);
            dispatch(replaceSearchList(response.data.products));
        } catch (error) {
            console.log(error);
        }
    }

    const fetchProductUsingBarcode = async (id, price, discount) => {
        try {
            const { data } = await axios.get(
                `https://world.openfoodfacts.org/api/v2/product/${id}?fields=product_name_en`
            );
            if (data.status === 0) {
                toast.error("Product not Found! Please recheck your barcode number.");
            } else {
                dispatch(updateBarcode(id));
                openInNewTabWithId(id,price,discount);
            }
        } catch (error) {
            toast.error("Some error occurred. Please retry!");
            console.log(error);
        }
    };

    const dispatch = useDispatch();

    const productsArray = useSelector((state) => state.allProducts.allProducts);

    const fetchProducts = async (isInitialLoad = false) => {
        if (isInitialLoad) setMainLoading(true);
        setFetching(true);
        try {
            const response = await axios.get(`https://world.openfoodfacts.org/api/v2/search`, {
                params: {
                    page_size: 50,
                    page,
                    fields: "product_name_en,product_name,brands,nutriscore_grade,nova_group,code,ingredients_tags,nutriments,image_url,image_packaging_url,image_nutrition_url,image_ingredients_url,labels,categories,quantity",
                },
            });
            const shuffledProducts = response.data.products.sort(() => Math.random() - 0.5).map(product => {
                const randomDiscount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
                const randomPrice = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
                const discountedPrice = Math.floor(randomPrice - (randomPrice * randomDiscount / 100));
                return {
                    ...product,
                    price: randomPrice,
                    discount: randomDiscount,
                    discountedPrice: discountedPrice,
                    qty:0,
                };
            });
            dispatch(updateProductsArray(shuffledProducts));
        } catch (error) {
            console.error(error);
            toast.error("Some error occurred while fetching products!");
        } finally {
            if (isInitialLoad) setMainLoading(false);
            setFetching(false);
        }
    };
    

    const fetchNextPage = () => {
        setPage((prevPage) => prevPage + 1);    
    }

    useEffect(() => {
        fetchProducts(true);
    }, []);

    useEffect(() => {
        if (page > 1) fetchProducts();
    }, [page]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowBarcodeInput(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-[100%] flex flex-col items-start justify-center">
            <div className="w-[100%] mt-2 flex p-4 flex-col justify-between">
                <div className="w-[100%] flex items-center gap-[1rem]">
                    <div className="relative w-[100%] flex items-center">
                        <Search size={20} color="gray" className="absolute  ml-2 left-0" />
                        <div className="flex items-center gap-[2rem] w-[100%]">
                            <input
                                ref={searchByTyping}
                                className="indent-[30px] px-2 py-2 w-[100%] focus:outline-none border rounded-[4px] text-[0.9rem] font-[Inter]"
                                placeholder="Search for something..."
                                onChange={()=>searchHasSomeText()}
                            />
                        </div>
                        {hasInput 
                            && 
                            <X 
                                size={15} 
                                color="gray" 
                                className="cursor-pointer absolute right-0 mr-2"
                                
                            />
                            }
                    </div>
                    <div className="w-[10%]">
                        <button
                            type="button"
                            className="font-[Inter] w-[100%] bg-[#138B4F] ml-auto text-[white] px-3 py-2 rounded-[4px] hover:bg-[#166b41] transition duration-200 ease-in-out active:scale-[0.98] text-[0.9rem]"
                            onClick={()=>fetchFromSearch()}
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
                                            <div className="w-[100%] flex items-center justify-center py-2 px-5 rounded-[2px] cursor-pointer">
                                                <p className="flex items-center gap-[0.5rem] text-[0.9rem] text-[#171717] font-[Inter] font-[450]">
                                                    <Barcode size={25} color="#383838" />Barcode
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
                        {showBarcodeInput && (
                            <div ref={popupRef} className="absolute bottom right-8 mt-2 z-[5]">
                                <BarcodeModal modalOpenFunction={modalOpenFunction} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {mainLoading ? (
                <LoadingPage />
            ) : (
                <>
                    <div className="w-[100%] flex px-4 flex-wrap justify-start gap-[0.2rem]">
                        {productsArray.length > 0 &&
                            productsArray.map((item) => (
                                <ProductCard getIdOfItem={getIdOfItem} key={item.code} item={item} />
                            ))}
                    </div>
                    {!fetching ? 
                        productsArray.length>0 && 
                            (<div className="w-[100%] flex px-5">
                                <button
                                    className={`ml-auto mt-2 ${fetching ? "border-2 border-[#d4d4d4]" : "border-2 border-[whitesmoke]"} px-4 py-1.5 bg-[#e3e3e3] hover:bg-[#cccccc] font-[Inter] rounded-[3px]`}
                                    disabled={fetching}
                                    onClick={fetchNextPage}
                                >
                                    <div className="flex items-center justify-center gap-[0.2rem]">
                                        <p className="text-[0.8rem] font-[500] font-[Inter]">Load More</p>
                                        <ArrowDown strokeWidth={1.5} size={15} />
                                    </div>
                                </button> 
                        </div>)
                        : 
                        <div className="w-[100%] pt-4 pb-4 flex items-center justify-center">
                            <Spinner width={8} height={8} fillColor="red" />
                        </div>
                    }
                </>
            )}
        </div>
    );
};

export default ProductsPage;
