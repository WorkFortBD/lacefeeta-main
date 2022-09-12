import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import { getImageUrl } from './../../services/FormatHelper';
import Link from 'next/link';

const HomeBannerCarousel = ({ slider }) => {

  const { isMobile } = useSelector((state) => state.global);

  return (
    <>
      <Carousel>
        {slider && slider.length > 0 &&
          slider.map((item, index) => {
            const background = parseBgColorFromTitle(item)

            return (
              <Carousel.Item style={{ background: background }} className="home-banner-carousel pointer" key={index + 1}>
                <Link href={item?.button_link || '/'}>
                  <img
                    className="d-block"
                    style={{ margin: '0 auto' }}
                    width={1440}
                    height={!isMobile ? 450 : 944}
                    src={getImageUrl(!isMobile ? item.image : item.mobile_image, 'slider')}
                    alt={item.title}
                  />
                </Link>
              </Carousel.Item>
            )
          })}
      </Carousel>
    </>
  );
};

/**
 * parse background color from slider title. ex: electronics---#ddd3F,#fffff
 * @param {Object} slider
 * @returns String -> linear-gradient(90deg, #ffff 0%, #dfdfdf 100%)
 */

function parseBgColorFromTitle(slider) {
  const bgColors = slider?.title.split('---')[1]?.split?.(',');
  const bgOne = '#ffff'; // bgColors[0] ?? '#ffff';
  const bgTwo = '#ffff'; // bgColors[1] ?? '#ffff';

  return `linear-gradient(90deg, ${bgOne} 0%, ${bgTwo} 100%)`;
}

export default HomeBannerCarousel;
