import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './Products/Products';
import categoryReducer from './Categories/Category';
import barcodeReducer from './Barcode/Barcode';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

const store = configureStore({
    reducer: {
        product: persistedReducer,
        category: categoryReducer,
        barcode: barcodeReducer,
    },
});

const persistor = persistStore(store);

export default store;

export { persistor };
