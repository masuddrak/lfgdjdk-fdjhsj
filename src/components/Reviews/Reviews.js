import React from 'react';
import useRiveiews from '../../Hooks/useRiveiews';
import ReviewsDetails from '../ReviewsDetails/ReviewsDetails';
import './Revies.css'
const Reviews = () => {
    const [comments,setComments]=useRiveiews()
    return (
        <div className='reviews'>
            {
                comments.map(comment=><ReviewsDetails
                key={comment.id}
                commented={comment}
                ></ReviewsDetails>)
            }
        </div>
    );
};

export default Reviews;