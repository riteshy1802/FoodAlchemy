import { createSlice } from "@reduxjs/toolkit";

export const Category = createSlice({
    name:'categories',
    initialState:[],
    reducers : {
        updateCategoryIfAdded : (state, action) => {
            return action.payload;
        }
    }
})

export const {updateCategoryIfAdded} = Category.actions;
export default Category.reducer;