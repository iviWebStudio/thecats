/**
 * Fetchers.
 *
 * There we will make all fetch helpers.
 * @since 0.1.0
 */

import {axiosInstance} from './config';
import axios from "axios";

/**
 * Fetch all categories. from cat API.
 *
 * @return {Promise<any>} Promise object.
 */
export const fetchAllCategories = async () => {
    const response = await axiosInstance.get("/categories");
    return response.data;
}

/**
 * Fetch images by category and page.
 * We are limited fetch results for 10 image per request by defining limit=10.
 *
 * @param {int} [page]     Paged parameter. Default is empty- get first page.
 * @param {int} [category] Category ID or empty string for fetching from all categories.
 *
 * @return {Promise<any>}       Promise object.
 */
export const fetchImages = async (page, category) => {
    const response = await axiosInstance.get(
        `/images/search?limit=10&page=${page}&category_ids=${category}`
    );
    return response.data;
}

/**
 * Fetch single image by ID.
 *
 * @param {int} imageID     Image ID.
 *
 * @return {Promise<any>}   Promise object.
 */
export const fetchImageByID = async (imageID) => {
    const response = await axiosInstance.get(`/images/${imageID}`);
    return response.data;
}

/**
 * Fetch a random quote for showing when user in 404.
 *
 * @return {AxiosPromise} Promise object.
 */
export const fetchRandomQuote = () => axios({
    method: 'get',
    url: 'https://api.quotable.io/random',
    headers: {
        'Content-Type': 'application/json',
    }
})