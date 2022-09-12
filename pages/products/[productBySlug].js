import React from "react";
import ProductNoFound from "../../components/master/productNoFound/ProductNoFound";
import ProductDetailInfo from "../../components/product-detail/ProductDetailInfo";
import PageMeta from "../../components/layouts/PageMeta";
import content from '../../content.json';

export default function ProductBySlug({ product }) {
    let productUrl;

    if(product) {
       productUrl = `${content.main_url}/products/${encodeURIComponent(product.sku)}`;
    }

    return (
        <>
            {
                product && (
                    <PageMeta
                        ogpEnabled={true}
                        title={product.name}
                        keywords={product.keywords ? product.keywords : product.name}
                        description={product.short_description}
                        pageSocialMetaUrl={productUrl}
                        pageSocialMetaImage={product.featured_url}
                        type="product" />
                )
            }

            <div className="container">
                {
                    product ?
                        <ProductDetailInfo product={product} /> :
                        <ProductNoFound
                            title="Product details no found !"
                            description="We're sorry. We cannot find this product details at this moment."
                        />
                }
            </div>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const productBySlug = encodeURIComponent(context.params.productBySlug);
    const uri = `${process.env.NEXT_PUBLIC_API_URL}get-item-detail/${productBySlug}`;
    // Don't delete the base api_url from here.

    try {
        const res = await fetch(uri);
    
        const dataJSON = await res.json();
        const data = dataJSON.data;
        if(!data) {
            return {
                notFound: true
            }
        }
        return {
            props: { product: data }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
    

}