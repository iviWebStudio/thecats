/**
 * Category slicer.
 * There we will make reducer for categories.
 *
 * @since 0.1.0
 */

import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCategories} from "../api";

/**
 * Initial states object for category reducer.
 *
 * categories will store all fetched categories.
 * isLoading will determine fetch end status.
 * error will store all errors during fetch.
 *
 * @type {{isLoading: boolean, categories: *[], error: null}}
 */
const initialState = {
    categories: [],
    isLoading: false,
    error: null,
};

/**
 * Categories slicer.
 * On loading we set isLoading status as true, for detecting fetch in progress status.
 * On success we set isLoading false, clear errors, and store fetched payload to categories.
 * On error we set isLoading false and payload to error field.
 *
 * @type {Slice<{isLoading: boolean, categories: *[], error: null}, {success: reducers.success, loading: reducers.loading, error: reducers.error}, string>}
 */
const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        success: (state, {payload}) => {
            state.isLoading = false;
            state.error = false;
            state.categories = payload ?? [];
        },
        error: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

/**
 * There we assign all actions to categoriesSlicer
 */
export const {loading, success, error} = categoriesSlice.actions;

/**
 * Getting all categories.
 *
 * @return {(function(*): Promise<void>)|*}
 */
export const getCategories = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            dispatch(success(await fetchAllCategories()));
        } catch (error) {
            dispatch(error(error.toString()));
        }
    };
};

export default categoriesSlice.reducer;
