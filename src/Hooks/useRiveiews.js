import React, { useEffect, useState } from 'react';

const useRiveiews = () => {
    const [comments,setComments]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])
    return [comments,setComments]
};

export default useRiveiews;