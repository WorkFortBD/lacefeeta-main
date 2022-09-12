import router from "next/router";
import React, { useEffect } from "react";
import { translate } from "../../services/translation/translation";
import Button from "../master/Button/Button";
import Translate from "../translation/Translate";

const OfferProducts = () => {
  return (
    <section className="product-container">
      <div className="row">
        <div className="col-md-6">
          <div className="offer_product_section">
            <img
              src={"/images/offer/cars.png"}
              alt="Car offers"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="offer_product_section-right">
            <div className="offer_product_details">
              <h2>
                <Translate>Crazy Offer</Translate>
              </h2>
              <Button
                buttonText={translate("Shop Now")}
                onClick={() =>
                  router.push("/products").then((_) => window.scrollTo(0, 0))
                }
              />
            </div>
            <div className="offer_product_img">
              <img
                src={"/images/offer/bike.png"}
                alt="Car offers"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferProducts;
