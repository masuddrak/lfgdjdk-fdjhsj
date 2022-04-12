import React from 'react';
import useTopphoto from '../../Hooks/useTopphoto';
import AllBest from '../AllBest/AllBest';

const TopRat = () => {
    const [photos, setPhotos] = useTopphoto()
    return (
        <div className='photo-glary mt-3'>
            {
                photos.map(photo => <AllBest
                    key={photo.id}
                    photo={photo}
                ></AllBest>)
            }
        </div>
    );
};

export default TopRat;