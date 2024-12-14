import { configureStore } from '@reduxjs/toolkit';

// Create the store with the reducer
const store = configureStore({
    reducer: {
        // products: productsReducer,
    },
});

export default store;
