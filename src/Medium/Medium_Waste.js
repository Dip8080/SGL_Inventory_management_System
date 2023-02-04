import React, { useState } from 'react';
import { json } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Medium_Waste = () => {
    const [size, setSize ]= useState('');
    const [date, setDate ]= useState('');
    const [inner, setInner ]= useState(0);
    const [outer, setOuter ]= useState(0);
    const [lemo, setLemo ]= useState(0);
    const [pouch, setPouch ]= useState(0);




    const HandleWasteSubmit = ()=>{
    alert("are you sure ?")
    const waste = {size,date,inner,outer,lemo,pouch};
    fetch('http://localhost:5000/waste_med',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'

        },
        body : JSON.stringify(waste)

})
    .then(res=> res.json())
    .then(data=> console.log(data))
    .catch(err=>console.log(err))
    toast("Regular Inventory wastage is updated to the database");

}
    return (
        <>
        <h1 className='text-1xl uppercase p-2 shadow shadow-green-500'>Regular wastage-Medium</h1>
        <div class="form-control input_div">
          
            <label class="input-group">
              {/* <span class="label-text"></span> */}
              <input onChange={e => setSize(e.target.value)} type="text" placeholder="S/m/xl" class="input input-bordered" required />
              <span>Size</span>
            </label>
          </div>
        <div class="form-control input_div">
          
            <label class="input-group">
              {/* <span class="label-text"> </span> */}
              <input onChange={e => setDate(e.target.value)} type="text" placeholder="00/00/00" class="input input-bordered" required />
              <span>date</span>
            </label>
          </div>
          <div class="form-control input_div">
          
            <label class="input-group">
              {/* <span class="label-text">Inner Uses </span> */}
              <input onChange={e => setInner(parseInt(e.target.value))} type="number" placeholder="00" class="input input-bordered" required />
              <span>Inner</span>
            </label>
          </div>
          <div class="form-control input_div">

            <label class="input-group">
              {/* <span className='label-text'> Outer Uses :  </span> */}
              <input onChange={e => setOuter(parseInt(e.target.value))} type="number" placeholder="00" class="input input-bordered" required />
              <span>Outer</span>
            </label>
          </div>
          <div class="form-control input_div">
            <label class="input-group">
              {/* <span className='label-text'>Lemo Uses : </span> */}
              <input onChange={e => setLemo(parseInt(e.target.value))} type="number" placeholder="00" class="input input-bordered " required />
              <span>lemo</span>
            </label>
          </div>
          <div class="form-control input_div">
            <label class="input-group">
              {/* <span className='label-text'>Pouch Uses: </span> */}
              <input onChange={e => setPouch(parseInt(e.target.value))} type="number" placeholder="00" class="input input-bordered" required />
              <span>Pouch</span>
            </label>
          </div>
          <div className='shadow shadow-red-800 '> <button className='btn rounded px-32 my-4 bg-pink-700 ' onClick={HandleWasteSubmit}>Submit </button></div>
          <ToastContainer></ToastContainer>
       
          </>
    );
};

export default Medium_Waste;