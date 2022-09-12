import React from 'react'
import Link from 'next/link';

function StoreSingleMini({item}) {
    return (
        <>
            <Link href={`/store/${item.slug}`}>
                <a>
                    <div className="shop-card">
                        {
                            (item.logo !== null && item.logo !== '')?
                            <div className="shop-logo">
                                <img src={`${process.env.NEXT_PUBLIC_URL}/images/vendors/${item.logo}`} alt={item.name} />
                            </div>
                            :
                            <div className="shop-logo">
                                {item.name}
                            </div>
                        }
                    </div>
                </a>
            </Link>   
        </>
    )
}

export default StoreSingleMini
