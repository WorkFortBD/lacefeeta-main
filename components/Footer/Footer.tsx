import React, { useState, memo, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import FooterBottom from "./FooterBottom";
import SimpleModal from "../master/modal/SimpleModal";
// import SimpleBtn from '../master/SimpleBtn/SimpleBtn';
import { subscribeNewsletter } from "./_redux/Action/FooterAction";
const TrackingForm = dynamic(() => import("../Header/TrackingForm"));
import { IRootReducer } from "../../_redux/RootReducer";
import {
  getWebsiteInfoAction,
  getWebsiteData,
} from "../../_redux/store/action/globalAction";

const Footer = () => {
  const { websiteInfoLoading, websiteInfo } = useSelector(
    (state: IRootReducer) => state.global
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = () => {
    dispatch(subscribeNewsletter(email));
  };

  const [isContactShow, setIsContactShow] = useState(false);

  useEffect(() => {
    if (websiteInfoLoading) {
      dispatch(getWebsiteInfoAction());
    }
  }, [websiteInfoLoading]);

  const toggleContactShow = () => {
    setIsContactShow(!isContactShow);
  };

  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-6 ">
              <div className="footer-info">
                <h3>Customer Care</h3>
                <h3>
                  <Link href="/p/help-center">
                    <a>Help Center</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/how-to-buy">
                    <a>How To Buy</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/return-and-refund-policy">
                    <a>Return &amp; Refund Policy </a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/shipping-method">
                    <a>Payment &amp; Shipping Methods</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/same-day-delivery">
                    <a>Same Day Delivery</a>
                  </Link>
                </h3>
                <h3>
                  <a href="/sitemap.xml">Site Map</a>
                </h3>
                <h3>
                  <Link href="/p/faq">
                    <a>FAQ</a>
                  </Link>
                </h3>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="footer-info">
                <h3>Information</h3>
                <h3>
                  <Link href="/p/about-us">
                    <a>About us</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/career">
                    <a>Career</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/contact">
                    <a>Contact</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/terms-&-condition">
                    <a>Terms &amp; Condition</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </h3>
                <h3>
                  <Link href="/p/blog">
                    <a>Blog</a>
                  </Link>
                </h3>
                {/* <h3>
                                    <Link href="/profile">
                                        <a>My Account</a>
                                    </Link>
                                </h3>

                                <p className="pointer" onClick={() => handleShow()}>
                                    Order Tracking
                                </p> */}

                {/* <div className="mb-2">
                                    <p>Subscribe to our newsletter to get notification about discount information</p>

                                    <div className="">
                                        <div className="mr-2">
                                            <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control mb-3" placeholder="Enter your Email here" />
                                        </div>

                                        <div>
                                            <SimpleBtn onClick={onSubmit} type="submit" variant="danger" style={{width: 'fit-content'}}>
                                                Subscribe
                                                    {
                                                        isLoading && (
                                                            <>
                                                                &#8203;
                                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                            </>
                                                        )
                                                    }
                                            </SimpleBtn>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info">
                <h3>Company Info</h3>

                {getWebsiteData("registered_name").length > 0 && (
                  <div className="mb-2">
                    <div>Registered Name</div>
                    <div style={{ fontSize: "14px" }}>
                      {getWebsiteData("registered_name")}
                    </div>
                  </div>
                )}

                {getWebsiteData("trade_license_no").length > 0 && (
                  <div className="mb-2">
                    <div>Trade License Number</div>
                    <div style={{ fontSize: "14px" }}>
                      {getWebsiteData("trade_license_no")}
                    </div>
                  </div>
                )}

                {getWebsiteData("vat_reg_no").length > 0 && (
                  <div className="mb-2">
                    <div>Vat Registration Number</div>
                    <div style={{ fontSize: "14px" }}>
                      {getWebsiteData("vat_reg_no")}
                    </div>
                  </div>
                )}

                {getWebsiteData("tin").length > 0 && (
                  <div className="mb-2">
                    <div>E-TIN</div>
                    <div style={{ fontSize: "14px" }}>
                      {getWebsiteData("tin")}
                    </div>
                  </div>
                )}
                {getWebsiteData("app_appstore_link") && (
                  <div>
                    <div style={{ width: "80px", height: "80px" }}>
                      <a href={getWebsiteData("app_appstore_link")}>
                        <img
                          width="80"
                          height="80"
                          src="/images/appstore.png"
                          alt="apple store qr code"
                        />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer-info">
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip">
                      Click to show contact information
                    </Tooltip>
                  }
                >
                  <h3 onClick={toggleContactShow} className="pointer">
                    Contact info
                  </h3>
                </OverlayTrigger>

                {isContactShow && (
                  <>
                    <div className="mb-2">
                      <div>Address</div>
                      <div style={{ fontSize: "14px" }}>
                        {getWebsiteData("address")}
                      </div>
                    </div>

                    <div className="mb-2">
                      <div>Phone</div>
                      <div style={{ fontSize: "14px" }}>
                        <a
                          href={`tel:${getWebsiteData("phone_no")}`}
                          className="text-white"
                        >
                          {getWebsiteData("phone_no")}
                        </a>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div>Email</div>
                      <div style={{ fontSize: "14px" }}>
                        <a
                          href={`mailto:${getWebsiteData("email")}`}
                          className="text-white"
                        >
                          {getWebsiteData("email")}
                        </a>
                      </div>
                    </div>
                    {getWebsiteData("app_playstore_link").length > 0 && (
                      <div>
                        <Link
                          href={getWebsiteData("app_playstore_link")}
                          passHref={true}
                        >
                          <a target="_blank">
                            <img
                              src="/images/google-play-badge.png"
                              alt="google-play-badge"
                            />
                          </a>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="my-3">
                <img
                  className="img-responsive"
                  src="/images/footer/shurjoPay.png"
                  alt="shurjoPay"
                  width={1240}
                  height={188}
                />
              </div>
              {/* <div className="my-5">
                                <img className="img-responsive" src="/images/footer/payment-line.png" alt="payment-line" width={1240} height={45} />
                            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <FooterBottom />
      </div>

      <SimpleModal handleClose={handleClose} size={"lg"} show={show}>
        <TrackingForm show={show} setShow={setShow} />
      </SimpleModal>
    </>
  );
};

export default memo(Footer);
