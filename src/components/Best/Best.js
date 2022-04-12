import React, { useEffect, useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import AllBest from '../AllBest/AllBest';
import Photo from '../Photo/Photo';
import './Best.css'
const Best = () => {
    const [photos, setPhotos] = useProduct()
    const [search,setSearch]=useState('')
        useEffect(()=>{
            fetch('photos.json')
            .then(res=>res.json())
            .then(data=>{
                const match=data.filter(photos=>photos.name.toLowerCase().includes(search))
                setPhotos(match)
            })
        },[search])
    const handalSearch=event=>{
        setSearch((event.target.value).toLowerCase())
    }
    return (
        <div className='best'>
            <div className='search-input mt-5 mb-3 '>
            <input onChange={handalSearch} className='border-2 outline-0' type="text" placeholder='Search' />
            </div>
            
                <div className='photo-glary'>
                {
                    photos.map(photo => <AllBest
                        key={photo.id}
                        photo={photo}
                    ></AllBest>)
                }
            </div>
            
        </div>
    );
};

export default Best;