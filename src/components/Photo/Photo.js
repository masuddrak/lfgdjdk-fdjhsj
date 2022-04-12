import React from 'react';
import Details from '../Details/Details';
import './Photo.css'

const Photo = ({ photo }) => {
    return (
       <div>
            {photo.id<7 && <div className='photo'>
            <Details photo={photo}></Details>
        </div>
    }
       </div>
    );
};

export default Photo;