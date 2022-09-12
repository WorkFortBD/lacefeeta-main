import * as Types from "./types";
import axios from "axios";

/**
 * Get Country List
 * 
 * @since 0.0.1
 * 
 * @returns void
 */
export const getCountries = () => (dispatch) => {
    axios.get(`counties`)
        .then((res) => {
            dispatch({ type: Types.GET_COUNTRIES, payload: res.data })
        })
}

/**
 * Get City by country id or name
 * 
 * @since 0.0.1
 * 
 * @param int|string country 
 * 
 * @returns void
 */
export const getCitiesByCountry = (country = 'Bangladesh') => (dispatch) => {
    country = country.trim();
    axios.get(`cities?country=${country}`)
        .then((res) => {
            dispatch({ type: Types.GET_CITIES, payload: res.data })
        })
}

/**
 * Get Area by city id or name
 * 
 * @since 0.0.1
 * 
 * @param int|string city id or name
 * 
 * @returns void
 */
export const getAreasByCity = (city) => (dispatch) => {
    axios.get(`areas?city=${city}`)
        .then((res) => {
            dispatch({ type: Types.GET_AREAS, payload: res.data })
        })
}