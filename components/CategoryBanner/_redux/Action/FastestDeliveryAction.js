import Axios from 'axios';
import * as Types from "../Type/Types";

export const getFastestDeliveryProductList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_FASTEST_DELIVERY_PRODUCT, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "Antisocial T-shirt",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://m.media-amazon.com/images/I/61tZQmRl5oL._AC._SR360,460.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://banner2.cleanpng.com/20180624/yiy/kisspng-anti-social-social-club-t-shirt-hoodie-anti-social-5b2f28609eeb85.594243051529817184651.jpg" },
                { img: "https://indie-mag.com/wp-content/uploads/2017/08/ANTI-SOCIAL-SOCIAL-CLUB-RICHARDSON-COLLABORATION-3-e1503053563949.png" },
                { img: "https://cdn.shopify.com/s/files/1/0958/0688/products/DHK-Anti-Social-Techno-Club-T-Shirt-Front.png?v=1564080986" },
            ]
        },
        {
            title: "Valentino Fragrance",
            rating: 4,
            price: 430,
            stock: 250,
            productImg: "https://i.ibb.co/1QWFWqL/axe-signature-deo-500x500.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://fimgs.net/mdimg/perfume/375x500.62754.jpg" },
                { img: "https://cdn.perfumetrader.de/media/catalog/product/cache/3/image/700x860/9df78eab33525d08d6e5fb8d27136e95/a/f/6ad5fe1899bac9d14ab3e88d5ed86143/valentino-uomo-valentino-uomo-intense-eau-de-parfum-100-ml-8411061835555.png" },
                { img: "https://cms.luxurysociety.com/media/images/1726_valentino_MNTTwbA.2e16d0ba.fill-960x540.png" },
            ]
        },
        {
            title: "Men's Watches",
            rating: 3,
            price: 430,
            stock: 250,
            productImg: "https://i.ibb.co/pJ0S828/uniq-w-14.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://www.naviforce.in/wp-content/uploads/2019/12/Mens-Watches-NAVIFORCE-Luxury-Brand-Fashion-Sport-Watches-Men-Quartz-Digital-Clock-Man-Leather-Army-Military.jpg" },
                { img: "https://www.naviforce.in/wp-content/uploads/2019/12/NAVIFORCE-Men-Watches-Top-Luxury-Brand-Fashion-Analog-Digital-Dual-Display-Watch-Men-LED-Chronograph-Sport.jpg" },
                { img: "https://images-na.ssl-images-amazon.com/images/I/61Y4Ji%2BDjjL._AC_UL1000_.jpg" },
                { img: "https://img.staticbg.com/thumb/large/oaupload/banggood/images/EF/6D/09329d35-566a-4e32-a6d4-60631231fb17.jpg" },
            ]
        },

        {
            title: "Girls Maxi/Full Length Party Dress",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://rukminim1.flixcart.com/image/714/857/k5pn6vk0/kids-lehenga-choli/f/e/7/8-9-years-kids-blue-katri-08-rayasa-original-imafhgrxahehxn3v.jpeg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://i.pinimg.com/originals/16/9b/d0/169bd0756b613fddd6e3a635fff21777.jpg" },
                { img: "https://live.staticflickr.com/4604/39269630615_18a62869c4_b.jpg" },
                { img: "https://i.pinimg.com/originals/e4/42/4d/e4424db2f4d1bc95f54a637b7d375e88.jpg" },
            ]
        },
        {
            title: "girl frock suit design",
            rating: 2,
            price: 1230,
            stock: 50,
            productImg: "https://i.pinimg.com/originals/03/b7/ea/03b7ea3ad366cbf9dd45b49bfb9bada9.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://i.pinimg.com/originals/2a/ae/9d/2aae9ddd2c4d2916d7abfcdde966bf09.jpg" },
                { img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-824,/pub/media/catalog/product/f/a/fayon_kids_fk1565_1.jpg?rnd=20200526195200" },
                { img: "https://i.pinimg.com/originals/97/0a/bc/970abc033e049bdff98a057d70322765.jpg" },
            ]
        },
        {
            title: "Digital Camera",
            rating: 5,
            price: 12500,
            stock: 50,
            productImg: "https://i.ibb.co/xYB48B0/q-flora-l-681.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://expertvagabond.com/wp-content/uploads/best-travel-camera-guide-1.jpg" },
                { img: "https://www.alwayswanderlust.com/wp-content/uploads/2019/11/mirrorless-camera-seattle-travel.jpg" },
                { img: "https://miro.medium.com/max/4000/1*LzCqf5KGQebv_g9p1nfgKw.png" },
                { img: "https://i.pinimg.com/originals/b1/48/58/b1485804b19f49ea65d91eefa34a765c.png" },
            ]
        },
        {
            title: "CCTV",
            rating: 3,
            price: 5500,
            stock: 50,
            productImg: "https://i.ibb.co/vwv5Z4H/abor-05.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://lh3.googleusercontent.com/proxy/Lh6hXfb60Xxaabns93aF6ztyBX9na7b5Kn_P6lap7vwjRgIbRNJDMkuwIkYsrbKNYbuSorAOtKbG3vgjPWNtb0ZHOvYF11AuXAD1l4IWQPQGxLxkXvk2e-OFU630Uah7deC4mA" },
                { img: "https://lh3.googleusercontent.com/proxy/Kk-4ECyfirFMe3_hSzO6xQ8IOf0AUypD87UqnyiK2oBFP_o16xJtXHJKK3J3zsfSyfLfvywgPAjlfwXrEBdl_r7_PSerK84by3r07-6kXZOBGn7nYMzXUg_ehrHt" },
                { img: "https://www.vhv.rs/dpng/d/71-714259_video-camera-hd-png-download.png" },
            ]
        },
        {
            title: "Gents Jacket",
            rating: 4,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/3CwKrwx/sdj07f-3.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://www.leatherclue.com/image/cache/catalog/Jackets/NEW%20EDITED/journey-tide-leather-jacket-550x550.jpg" },
                { img: "https://3.imimg.com/data3/AU/KI/MY-646899/men-s-jackets-500x500.jpg" },
                { img: "http://image.dhgate.com/albu_325714216_00/1.0x0.jpg" },
            ]
        },
        {
            title: "Beauty & Care",
            rating: 3,
            price: 130,
            stock: 100,
            productImg: "https://i.ibb.co/D5ww8Dw/d.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://cdn.imgbin.com/15/3/15/imgbin-cosmetics-make-up-face-powder-makeup-set-ctDqt2F8ptCquAT3G4CTzE3VZ.jpg" },
                { img: "https://img2.pngio.com/cosmetic-product-lot-cosmetics-make-up-artist-beauty-parlour-makeup-cosmetics-png-500_353.png" },
                { img: "https://dohafashionbd.com/wp-content/uploads/2020/10/764-7644078_cosmetics-hd-png-download.png" },
            ]
        },
        {
            title: "Gents Jacket",
            rating: 2,
            price: 1030,
            stock: 50,
            productImg: "https://i.ibb.co/x7Dmjtr/quck-c-07-min.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://www.leatherclue.com/image/cache/catalog/Jackets/NEW%20EDITED/journey-tide-leather-jacket-550x550.jpg" },
                { img: "https://3.imimg.com/data3/AU/KI/MY-646899/men-s-jackets-500x500.jpg" },
                { img: "http://image.dhgate.com/albu_325714216_00/1.0x0.jpg" },
            ]
        },
        {
            title: "Wall TV 24' ",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://i.ibb.co/qgjXs7T/ntl-e-71.jpg",
            productDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
            offerPrice: 200,
            categories: "Vegetables, Fresh Vegetables, Daily Food",
            tags: "Vegetables",
            color: [
                { colorCode: "#f94c5a" },
                { colorCode: "#ffd447" },
                { colorCode: "#292929" },
                { colorCode: "#5cb2e1" },
            ],
            productGallery: [
                { img: "https://images.samsung.com/is/image/samsung/levant-fhd-t5300-ua43t5300auxtw-frontblack-229857917?$720_576_PNG$" },
                { img: "https://www.cnet.com/a/img/pkF8PIpQKZcpjdI4SoGwf9NW5oY=/940x528/2021/04/14/58e9b86b-3c3a-4ff9-ac4d-1d1ab7bef323/002-lg-g1-oled-tv.jpg" },
                { img: "https://splaitor.com/wp-content/uploads/2021/02/How-Wide-Is-65-inch-TV-1-696x517.png" },
            ]
        },

    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({ type: Types.GET_FASTEST_DELIVERY_PRODUCT, payload: responseData });
}