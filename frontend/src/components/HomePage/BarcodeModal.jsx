import { X } from "lucide-react"
import PropTypes from "prop-types"

const BarcodeModal = ({modalOpenFunction}) => {
    return (
        <div className="w-[20rem] px-5 py-3 rounded-[5px] shadow-sm bg-white border-2">
            <div className="flex items-center mb-1">
                <p className="mb-2 font-[Inter] text-[#171717] text-[0.9rem]">Search using Barcode</p>
                <div className="ml-auto cursor-pointer rounded-[4px] border-2 hover:bg-[#ededed] transition duration-200 ease-in-out" onClick={modalOpenFunction}>
                    <X size={15} color="#171717"/>
                </div>
            </div>
            <div className="flex items-center gap-[2rem] w-[100%]">
                <input className="px-2 py-1 w-[100%] focus:outline-none font-[Inter] border rounded-[4px] text-[0.8rem] font-[Inter]" placeholder="eg. 737628064502"/>
            </div>
            <div className="w-[100%] flex">
                <button className="bg-[#118B50] px-3 py-1 flex text-[white] text-[0.8rem] mt-2 ml-auto items-center justify-center rounded-[3px]">
                    Find
                </button>
            </div>
        </div>
    )
}

BarcodeModal.propTypes={
    modalOpenFunction : PropTypes.func,
}

export default BarcodeModal