/**
 * Our Redux store reducers.
 *
 * We are importing category and image slicers and append it into our redux.
 *
 * @since 0.1.0
 */

import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import imagesSlice from "./imagesSlice";

const Store = configureStore({
    reducer: {
        categories: categoriesSlice,
        images: imagesSlice,
    },
});

export default Store;