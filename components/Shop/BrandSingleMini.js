import React from 'react'
import Link from 'next/link';

function BrandSingleMini ({item}) {
    return (
        <>
            <Link href={`/products?brand=${item.slug}&name=${item.name}`}>
                <a>
                    <div className="brand-card">
                        {
                            (item.logo !== null && item.logo !== '')?
                            <div className="brand-logo">
                                <img src={item.image_url} alt={item.name} />
                            </div>
                            :
                            <div className="brand-logo">
                                {item.name}
                            </div>
                        }
                    </div>
                </a>
            </Link>   
        </>
    )
}

export default BrandSingleMini;
