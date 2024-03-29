import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { getMenuListData } from "./_redux/HeaderAction/HeaderAction";
import Translate from "../translation/Translate";
import { getWebsiteData } from "../../_redux/store/action/globalAction";

const HeaderMenu = ({ navigationToggleHandler, showToolbar }) => {
  const { menuList } = useSelector(state => state.header);
  const router = useRouter();
  const dispatch = useDispatch();

  const listItem = useRef([]);

  useEffect(
    () => {
      if (menuList.length === 0) {
        dispatch(getMenuListData());
      }

      // get html element position
      function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
      }

      listItem.current.forEach(el => {
        const isDisplace = getOffset(el).left / window.innerWidth > 0.6;
        if (isDisplace && el.children.length > 1) {
          el.children[1].classList.add("displace");
        }
      });
    },
    [listItem.current.length]
  );

  const [barVisibility, setBarVisibility] = useState(false);
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    position >= 120 ? setBarVisibility(true) : setBarVisibility(false);
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Click Menu Link & Redirect to that page
   *
   * @since 1.0.0
   *
   * @param string categorySlug
   *
   * return void
   */

  const clickMenuLink = (category, toggleBackdrop, isMainCategory = false) => {
    let categoryType = "";

    if (isMainCategory && category.short_code === "groceries") {
      categoryType = "main-category";
    } else {
      categoryType = "category";
    }

    if (toggleBackdrop) {
      navigationToggleHandler();
    }

    router
      .push(
        `/products?${categoryType}=${encodeURIComponent(
          category.short_code
        )}&name=${encodeURIComponent(category.name)}&filter=paginate_no__40`
      )
      .then(_ => window.scrollTo(0, 0)); // added "name" query param only for collect category name from url on product page
  };

  const navItemExpandHandler = e => {
    e.target.parentElement.classList.toggle("open");
  };

  const onLogoClickHandler = () => {
    navigationToggleHandler();
    router.push("/");
  };

  return (
    <div className={`navbar-main-area ${barVisibility ? 'fixed-nav' : 'not-fixed-nav'}`}>
      <div className="container">
        <nav className={`navigation__navbar  ${showToolbar ? "open" : ""}`}>
          <div className="navigation__toolbar-logo">
            <div>
              <div className="header__logo-box" onClick={onLogoClickHandler}>
                <img
                  src={
                    getWebsiteData("logo").length === 0
                      ? `/images/logos/logo.png`
                      : process.env.NEXT_PUBLIC_URL +
                        "images/website/" +
                        getWebsiteData("logo")
                  }
                  alt="Lacefeeta"
                  className="text-black"
                />
              </div>
            </div>
            <div
              onClick={navigationToggleHandler}
              className="navigation__toolbar-close"
            />
          </div>

          <ul className="navigation__navbar-nav">
            {
              barVisibility &&
              <li className={`navigation__nav-item`}>
                <Link href="/">
                  <img
                    src={
                      getWebsiteData("logo").length === 0
                        ? `/images/logos/logo.png`
                        : process.env.NEXT_PUBLIC_URL +
                          "images/website/" +
                          getWebsiteData("logo")
                    }
                    alt="Lacefeeta"
                    className="text-black"
                    style={{ width: 90, cursor: 'pointer' }}
                  />
                </Link>
              </li>
            }
            <li className={`navigation__nav-item has-child`}>
              <span className="navigation__nav-link">
                <Translate>All</Translate>
              </span>
              <ul className={`navigation__drop-down drop-down-menu-1`}>
                {menuList.map((allMenu, allMenuIndex) => {
                  return (
                    <li key={allMenuIndex} className={`navigation__nav-item`}>
                      <span
                        onClick={() => clickMenuLink(allMenu, false)}
                        className="navigation__nav-link"
                      >
                        <Translate>
                          {allMenu.name}
                        </Translate>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>

            {menuList.map((itemLvl1, indexLvl1) => {
              const itemLvl1HasChild = itemLvl1.childs.length > 0;

              return (
                <li
                  key={indexLvl1}
                  ref={el => (listItem.current[indexLvl1] = el)}
                  className={`navigation__nav-item ${itemLvl1HasChild &&
                    "has-child"}`}
                >
                  <span
                    onClick={() => clickMenuLink(itemLvl1, false, true)}
                    className="navigation__nav-link"
                  >
                    <Translate>
                      {itemLvl1.name}
                    </Translate>
                  </span>

                  {itemLvl1HasChild &&
                    <ul className={`navigation__drop-down drop-down-menu-1`}>
                      {itemLvl1.childs.map((itemLvl2, indexLvl2) => {
                        const itemLvl2HasChild = itemLvl2.childs.length > 0;

                        return (
                          <li
                            key={indexLvl2}
                            className={`navigation__nav-item ${itemLvl2HasChild &&
                              "has-child"}`}
                          >
                            <span
                              onClick={() => clickMenuLink(itemLvl2, false)}
                              className="navigation__nav-link"
                            >
                              <Translate>
                                {itemLvl2.name}
                              </Translate>
                            </span>
                            {itemLvl2HasChild &&
                              <ul className="navigation__drop-down drop-down-menu-2">
                                {itemLvl2.childs.map((itemLvl3, indexLvl3) => {
                                  return (
                                    <li
                                      key={indexLvl3}
                                      className={`navigation__nav-item`}
                                    >
                                      <span
                                        onClick={() =>
                                          clickMenuLink(itemLvl3, false)}
                                        className="navigation__nav-link"
                                      >
                                        <Translate>
                                          {itemLvl3.name}
                                        </Translate>
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>}
                          </li>
                        );
                      })}
                    </ul>}
                </li>
              );
            })}
          </ul>

          <ul className="navigation-mobile">
            {menuList.map((itemLvl1, indexLvl1) => {
              const itemLvl1HasChild = itemLvl1.childs.length > 0;

              return (
                <li
                  key={indexLvl1}
                  className={`navigation-mobile__nav-item ${itemLvl1HasChild
                    ? "has-child"
                    : ""}`}
                >
                  {itemLvl1HasChild &&
                    <span
                      onClick={navItemExpandHandler}
                      className="navigation-mobile__nav-item-expand"
                    />}
                  <span
                    onClick={() => clickMenuLink(itemLvl1, true, true)}
                    className="navigation-mobile__nav-link"
                    href="#"
                  >
                    <Translate>
                      {itemLvl1.name}
                    </Translate>
                  </span>

                  {itemLvl1HasChild &&
                    <ul className="navigation-mobile__drop-down drop-down-menu-1">
                      {itemLvl1.childs.map((itemLvl2, indexLvl2) => {
                        const itemLvl2HasChild = itemLvl2.childs.length > 0;

                        return (
                          <li
                            key={indexLvl2}
                            className={`navigation-mobile__nav-item ${itemLvl2HasChild
                              ? "has-child"
                              : ""}`}
                          >
                            {itemLvl2HasChild &&
                              <span
                                onClick={navItemExpandHandler}
                                className="navigation-mobile__nav-item-expand"
                              />}
                            <span
                              onClick={() => clickMenuLink(itemLvl2, true)}
                              className="navigation-mobile__nav-link"
                            >
                              <Translate>
                                {itemLvl2.name}
                              </Translate>
                            </span>

                            {itemLvl2HasChild &&
                              <ul className="navigation-mobile__drop-down drop-down-menu-2">
                                {itemLvl2.childs.map((itemLvl3, indexLvl3) => {
                                  const itemLvl3HasChild =
                                    itemLvl3.childs.length > 0;

                                  return (
                                    <li
                                      key={indexLvl3}
                                      className={`navigation-mobile__nav-item ${itemLvl3HasChild
                                        ? "has-child"
                                        : ""}`}
                                    >
                                      {itemLvl3HasChild &&
                                        <span
                                          onClick={navItemExpandHandler}
                                          className="navigation-mobile__nav-item-expand"
                                        />}
                                      <span
                                        onClick={() =>
                                          clickMenuLink(itemLvl3, true)}
                                        className="navigation-mobile__nav-link"
                                      >
                                        <Translate>
                                          {itemLvl3.name}
                                        </Translate>
                                      </span>

                                      {itemLvl3HasChild &&
                                        <ul className="navigation-mobile__drop-down drop-down-menu-3">
                                          {itemLvl3.childs.map(
                                            (itemLvl4, indexLvl4) =>
                                              <li
                                                key={indexLvl4}
                                                className="navigation-mobile__nav-item"
                                              >
                                                <span
                                                  onClick={() =>
                                                    clickMenuLink(
                                                      itemLvl1,
                                                      true
                                                    )}
                                                  className="navigation-mobile__nav-link"
                                                >
                                                  <Translate>
                                                    {itemLvl4.name}
                                                  </Translate>
                                                </span>
                                              </li>
                                          )}
                                        </ul>}
                                    </li>
                                  );
                                })}
                              </ul>}
                          </li>
                        );
                      })}
                    </ul>}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default React.memo(HeaderMenu);
