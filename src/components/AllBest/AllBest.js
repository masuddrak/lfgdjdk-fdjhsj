import React from 'react';
import Details from '../Details/Details';

const AllBest = ({photo}) => {
    return (
        <div className='photo'>
            <Details photo={photo}></Details>
        </div>
    );
};

export default AllBest;