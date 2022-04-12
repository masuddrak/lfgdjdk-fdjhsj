import React, { useState } from 'react';

import useProduct from '../../Hooks/useProduct';
import Details from '../Details/Details';
import Photo from '../Photo/Photo';
import Slider from '../Slider/Slider';
import { StarIcon } from '@heroicons/react/solid'
import './Home.css'
const Home = () => {
    const [photos, setPhotos] = useProduct()
    const [detalis,setDetails]=useState({})
    
    return (
        <div>
            <Slider></Slider>
            <marquee className='my-2 ' behavior="" direction=""><h2>Call Now:+880 1721431392</h2> </marquee>
            <h2 className='text-center p-2 mt-5 mb-3 home-title'><StarIcon className='start-icon'></StarIcon> <StarIcon className='start-icon'></StarIcon>TOP SELL <StarIcon className='start-icon'></StarIcon><StarIcon className='start-icon'></StarIcon></h2>
            <div className='photo-glary'>
                {
                   photos.map(photo => <Photo
                        key={photo.id}
                        photo={photo}
                    ></Photo>)
                }
            </div>
        </div>
    );
};

export default Home;