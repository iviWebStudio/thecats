/**
 * Image slicer.
 * There we will make reducer for images.
 *
 * @since 0.1.0
 */

import {createSlice} from "@reduxjs/toolkit";
import {fetchImages} from "../api";

/**
 * Initial states object for images reducer.
 *
 * images will store all fetched images.
 * page will store current page number.
 * isLoading will determine fetch end status.
 * error will store all errors during fetch.
 *
 * @type {{isLoading: boolean, images: *[], page: number, error: null}}
 */
const initialState = {
  images: [],
  page: 1,
  isLoading: false,
  error: null,
};

/**
 * Images slicer.
 * On loading we set isLoading status as true, for detecting fetch in progress status.
 * On success we set isLoading false, clear errors, and store fetched payload to images and increment page.
 * On error we set isLoading false and payload to error field.
 *
 * @type {Slice<{isLoading: boolean, images: *[], page: number, error: null}, {success: reducers.success, loading: reducers.loading, error: reducers.error}, string>}
 */
const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    success: (state, {payload}) => {
      state.isLoading = false;
      state.error = false;
      state.images = payload ?? [];
      state.page += 1;
    },
    error: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

/**
 * There we assign all actions to imagesSlicer
 */
export const {loading, success, error, page} = imagesSlice.actions;

/**
 * Getting images per category and page.
 *
 * @param {int} page Page number.
 * @param {int|string} categoryID Category ID. Default is empty string fro fetching from all categories.
 * @return {(function(*): Promise<void>)|*}
 */
export const getImages = (page = 1, categoryID = "") => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      dispatch(success(await fetchImages(page, categoryID)));
    } catch (error) {
      dispatch(error(error.toString()));
    }
  };
};

export default imagesSlice.reducer;
