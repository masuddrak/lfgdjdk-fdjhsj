import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'
const Slider = () => {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100 "
                        src="https://fixthephoto.com/blog/images/uikit_slider/female-poses-editing-after_1593677416.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Slila</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://www.mymypic.net/data/attachment/forum/201701/22/072204x53y3ee363emw33w.jpg.thumb.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Nadia Labonno</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sites.google.com/site/hotescortservicesdelhi/_/rsrc/1520532398090/delhi-call-girl-mobile-number-photo/pussy%20girls.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Mahia Mahi</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;