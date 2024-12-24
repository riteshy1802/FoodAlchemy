import axios from "axios"
import { X } from "lucide-react"
import PropTypes from "prop-types"
import { useRef, useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import Spinner from "../Spinner/Spinner"
import { updateBarcode } from "@/redux/Barcode/Barcode"

const BarcodeModal = ({modalOpenFunction}) => {

    const barcodeInputRef=useRef(null);
    const [loading, setLoading] = useState(false);

    const openInNewTabWithId = (id) => {
        const randomDiscount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        const randomPrice = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        const url = `/product/${id}/price/${randomPrice}/discount/${randomDiscount}`;

        const fullUrl = window.location.origin + url;
        window.open(fullUrl, "_blank");
    };

    const dispatch = useDispatch();

    const fetchProductUsingBarcode = async () => {
        const barcodeInput = barcodeInputRef.current.value;
        try {
            setLoading(true);
            const { data } = await axios.get(
                `https://world.openfoodfacts.org/api/v2/product/${barcodeInput}?fields=product_name_en`
            );
            if (data.status === 0) {
                toast.error("Product not Found! Please recheck your barcode number.");
                setLoading(false);
            } else {
                dispatch(updateBarcode(barcodeInput));
                openInNewTabWithId(barcodeInput);
                console.log(barcodeInput);
                barcodeInputRef.current.value="";
                modalOpenFunction();
                setLoading(false);
            }
        } catch (error) {
            toast.error("Some error occurred. Please retry!");
            console.log(error);
            setLoading(false);
        }
    };
    

    return (
        <div className="w-[20rem] px-5 py-3 rounded-[5px] shadow-sm bg-white border-2">
            <div className="flex items-center mb-1">
                <p className="mb-2 font-[Inter] text-[#171717] text-[0.9rem]">Search using Barcode</p>
                <div className="ml-auto cursor-pointer rounded-[4px] border-2 hover:bg-[#ededed] transition duration-200 ease-in-out" onClick={modalOpenFunction}>
                    <X size={15} color="#171717"/>
                </div>
            </div>
            <div className="flex items-center gap-[2rem] w-[100%]">
                <input ref={barcodeInputRef} className="px-2 py-1 w-[100%] focus:outline-none font-[Inter] border rounded-[4px] text-[0.8rem] font-[Inter]" placeholder="eg. 737628064502"/>
            </div>
            <div className="w-[100%] flex">
                {
                    loading ? 
                    <button
                        className="bg-[#71c99d]  flex items-center justify-center gap-[0.5rem]  font-[500] px-3 py-1 flex text-[white] text-[0.8rem] mt-2 ml-auto items-center justify-center rounded-[3px]"
                        onClick={fetchProductUsingBarcode}
                    >
                        <Spinner width={4} height={4} fillColor="red"/>
                        <p>Finding</p>
                    </button>
                    :
                    <button
                        className="bg-[#118B50] hover:bg-[#0d7a46] flex items-center justify-center gap-[0.5rem] transition duration-200 ease-in-out font-[500] px-3 py-1 flex text-[white] text-[0.8rem] mt-2 ml-auto items-center justify-center rounded-[3px]"
                        onClick={fetchProductUsingBarcode}
                    >
                        <p>Find</p>
                    </button>
                }
            </div>
        </div>
    )
}

BarcodeModal.propTypes={
    modalOpenFunction : PropTypes.func,
}

export default BarcodeModal