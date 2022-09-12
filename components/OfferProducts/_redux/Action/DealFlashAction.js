import Axios from 'axios';
import * as Types from "../Type/Types";

export const getDealFlashList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_FLASH_DEAL_DATA, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "Men's Winder Jacket-Red",
            rating: 5,
            price: 230,
            offerPrice: 200,
            discountPercent: "5%",
            stock: 250,
            countTime: 5.184e+6,
            productImg: "https://media.mauvetree.com/wp-content/uploads/2018/02/slim-fit-red-jacket.jpg"
        },
        {
            title: "Smart Home Devices",
            rating: 3,
            price: 200,
            offerPrice: 170,
            discountPercent: "15%",
            stock: 150,
            countTime: 950400,
            productImg: "https://www.startech.com.bd/image/cache/catalog/gadget/google-home-smart-assistant/google-home-smart-assistant-1-500x500.jpg"
        },
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_FLASH_DEAL_DATA, payload: responseData});
}