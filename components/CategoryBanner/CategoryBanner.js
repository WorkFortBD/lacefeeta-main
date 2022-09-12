import React from 'react';

const CategoryBanner = () => {
    return (
        <section className="category_banner_section">
            <img src={"/images/banner/Image 51@2x.png"} alt="category banner" className="img-fluid" />
            <div className="category_direction">
                <div className="d-flex">
                    <p className="mr-2">HOME </p>
                    <p className="ml-2 text-danger">ELECTRONICS</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryBanner;