import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms
    const SITE_URL = process.env.SITE_URL;
    const fields = [];
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'items/all/for-dropdown');
    const data = await res.json();
    const products = data.data;

    // Loop through all products
    products.forEach(product => {
        // Add product to sitemap
        fields.push({
            loc: `${SITE_URL}/products/${product.sku}`,
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.8,
        });
    });

    return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() { }