import { createSlice } from "@reduxjs/toolkit";

export const ProductHome = createSlice ({
    name:"allProdcuts",
    initialState : {
        allProducts : []
    },
    reducers:{
        updateProductsArray:(state, action)=>{
            state.allProducts = action.payload;
        }
    }
})

export const { updateProductsArray } = ProductHome.actions;
export default ProductHome.reducer;
