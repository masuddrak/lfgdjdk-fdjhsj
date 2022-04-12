import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './ReviewsDetails.css'
const ReviewsDetails = ({commented}) => {
    const {name,img,comment,date,reviewname}=commented
    return (
        <div className='reviews-details p-3'>
            <div className='reviews-img'>
                <img src={img} alt="" />
                <h6 className='fw-bold'>{name}</h6>
            </div>
            <div className='reviews-info'>
                <p>{date}</p>
                <p className='fw-bold m-1'>By:{reviewname}</p>
            <p className='m-0'>{comment}</p>
            <p><StarIcon className='review-icon'></StarIcon><StarIcon className='review-icon'></StarIcon><StarIcon className='review-icon'></StarIcon><StarIcon className='review-icon'></StarIcon><StarIcon className='review-icon'></StarIcon></p>
            </div>
        </div>
    );
};

export default ReviewsDetails;