/**
 * Main configurator for API calls.
 * There we will configure Axios and export their instance for more productive using.
 *
 * @requires axios
 * @since 0.1.0
 */

import axios from "axios";

/**
 * Our Base URL.
 *
 * All Api calls will be relatively from this url.
 * @see https://docs.thecatapi.com/
 * @type {string}
 */
const baseURL = "https://api.thecatapi.com/v1";

/**
 * Main AXIOS instance
 *
 * @type {AxiosInstance}
 */
export const axiosInstance = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
        contentType: "application/json",
        accept: "application/json, text/plain, */*",
    },
});

/**
 * Success response handler.
 *
 * @param response Axios response.
 * @return response Axios response.
 */
const successResponse = (response) => response;

/**
 * Error response handler.
 *
 * @param error Axios response.
 * @returns {Promise<never>} Promise object.
 */
const errorResponse = (error) => Promise.reject(error);

axiosInstance.interceptors.response.use(successResponse, errorResponse);