import { createSlice } from "@reduxjs/toolkit";

export const Products = createSlice({
    name: 'product',
    initialState: {
        image_url:"",
        image_packaging_url:"",
        image_nutrition_url:"",
        image_ingredients_url:"",
        product_name_en: "",
        brands: "",
        nutriscore_grade: "",
        nova_group: "",
        code: "",
        ingredients_tags: [],
        nutriments: ""
    },
    reducers: {
        updateProductDetails: (state, action) => {
            // console.log("Updating state with payload:", action.payload);
            Object.assign(state, action.payload);
        },
    }
});

export const { updateProductDetails } = Products.actions;
export default Products.reducer;
