import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [phots,setPhotos]=useState([])
    useEffect(()=>{
        fetch('photos.json')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])
    return [phots,setPhotos]
};

export default useProduct;