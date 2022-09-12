import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";

/**
 *
 * @param {href} string //path direction
 * @param {activeLink} string //active className which will be dynamic
 *
 * @returns ActiveLink
 */

const ActiveLink = ({ router, href, children, activeLink }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href).then((_) => window.scrollTo(0, 0));
  };

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return (
    <div>
      <Link href={href} onClick={handleClick}>
        <a className={isCurrentPath ? activeLink : "inActiveLink"}>
          {children}
        </a>
      </Link>
    </div>
  );
};

export default withRouter(ActiveLink);
