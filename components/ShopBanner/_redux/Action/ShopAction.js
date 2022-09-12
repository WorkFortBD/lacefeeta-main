import Axios from 'axios';
import * as Types from "../Type/Types";

export const getShopList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_SHOP_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            name: "infinity",
            logo: "http://pngimg.com/uploads/amazon/amazon_PNG6.png"
        },
        {
            name: "shopify",
            logo: "https://img.favpng.com/22/24/7/shopify-e-commerce-logo-magento-sales-png-favpng-vmicNyBBvrArijGgZ1yGNCtu4.jpg"
        },
        {
            name: "amzon",
            logo: "http://pngimg.com/uploads/amazon/amazon_PNG6.png"
        },
        {
            name: "daraz",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Daraz_logo_color.png"
        },
        // {
        //     name: "ali express",
        //     logo: "https://banner2.cleanpng.com/20180608/tyj/kisspng-aliexpress-amazon-com-alibaba-group-online-shoppin-5b1ab812727954.9954669215284777144689.jpg"
        // },
        // {
        //     name: "ali baba",
        //     logo: "https://play-lh.googleusercontent.com/Btfes5_yrMt5peCLS3QDjKYZN9rUYqGdPxrmBXdJ0b-6SJFI5-JLd5QSHl4aAplt_FE"
        // },
       
        {
            name: "shohoz",
            logo: "https://blog.shohoz.com/wp-content/uploads/2020/04/Shohoz-Food-01.png"
        },
        {
            name: "othoboa",
            logo: "https://www.contrivance-bd.com/contrivance/wp-content/uploads/2017/12/othoba.com_.png"
        },
        {
            name: "sheba",
            logo: "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/accounts/logo.png"
        },
        // {
        //     name: "ali baba",
        //     logo: "https://play-lh.googleusercontent.com/Btfes5_yrMt5peCLS3QDjKYZN9rUYqGdPxrmBXdJ0b-6SJFI5-JLd5QSHl4aAplt_FE"
        // },
       
        {
            name: "shohoz",
            logo: "https://blog.shohoz.com/wp-content/uploads/2020/04/Shohoz-Food-01.png"
        },
        {
            name: "othoboa",
            logo: "https://www.contrivance-bd.com/contrivance/wp-content/uploads/2017/12/othoba.com_.png"
        },
        {
            name: "sheba",
            logo: "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/accounts/logo.png"
        },
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_SHOP_LIST, payload: responseData});
}