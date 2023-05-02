import React from 'react';
import Slider from 'react-slick';

const Cros = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return (
        <div>
            <Slider {...settings} >
                <div className='slider' >
                    <img src='/sliders/Slider.svg' />
                </div>
            </Slider>
        </div>
    );
};

export default Cros;