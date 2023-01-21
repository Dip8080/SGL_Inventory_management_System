import React, { useEffect, useState } from 'react';


const Shared = () => {
    const [waste, setWaste] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/waste')
        .then(res=>res.json())
        .then(data=>setWaste(waste))
},[])

return [waste];
    
};

export default Shared ;