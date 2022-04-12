import React, { useEffect, useState } from 'react';

const useTopphoto = () => {
    const [phots,setPhotos]=useState([])
    useEffect(()=>{
        fetch('topPhotos.json')
        .then(res=>res.json())
        .then(data=>setPhotos(data))
    },[])
    return [phots,setPhotos]
};


export default useTopphoto;