import FilterSection from "./FilterSection"
import ProductsPage from "./ProductsPage"

const Homepage = () => {
    return (
        <div className="flex w-[100%] items-center justify-center gap-[3rem]">
            <div className="w-[100%] h-[150vh] relative flex px-2">
                <div className="w-[20%]"> 
                    <FilterSection/>
                </div>
                <div className=" ml-2 border-l-2 w-[85%] pb-5">
                    <ProductsPage/>
                </div>
            </div>
        </div>
    )
}

export default Homepage