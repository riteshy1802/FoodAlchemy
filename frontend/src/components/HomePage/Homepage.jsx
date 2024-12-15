import FilterSection from "./FilterSection"
import ProductsPage from "./ProductsPage"

const Homepage = () => {
    return (
        <div className="flex w-[100%] items-center justify-center gap-[3rem]">
            <div className="w-[100%] h-[150vh] relative mb-5 flex px-2">
                <div className="w-[20%]"> 
                    <FilterSection/>
                </div>
                <div className=" ml-2 w-[85%] rounded-[4px]">
                    <ProductsPage/>
                </div>
            </div>
        </div>
    )
}

export default Homepage