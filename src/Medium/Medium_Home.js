import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Medium_Waste from './Medium_Waste';

const Medium_Home = () => {
    // Medium inventory stock update
const [id, setId] = useState('');
const [date, setDate] = useState('');
const [imprt, setImport] = useState('');
const [im_inner,setImInner]=useState(0);
const [im_outer, setImOuter] = useState(0);
const [im_lemo,setImLemo] = useState(0);
const [im_pouch,setImPouch] = useState(0);

// MEDIUM   uses 
const navigate = useNavigate();
  const [size, setSize] = useState('');
  const [datee , setDatee] = useState('');
  const [inner, setInner] = useState(0);
  const [outer, setOuter] = useState(0);
  const [lemo, setLemo] = useState(0);
  const [pouch, setPouch] = useState(0);

const HandleDashboard =()=>{
    navigate('/medium/dashboardmid')

}
const  HandleStockUpdate=()=>{
    alert("are you sure ?");
    const New_stock_med = {id,date,imprt,im_inner,im_outer,im_lemo,im_pouch};
    console.log(id,date,imprt);
    fetch("http://localhost:5000/stock_med",{

        method : "POST",
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(New_stock_med)


    })
    .then(res=>res.json)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    toast('MEDIUM inventory details is updated to the Database')
  }

  // uses update to database
const HandleUses =()=>{
alert("are you sure ?")
const uses = {size,datee,inner,outer,lemo,pouch}
fetch("http://localhost:5000/uses_med",{

method : "POST",
headers : {
  'content-type' : 'application/json'

},
body : JSON.stringify(uses)

})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))
toast("MEDIUM uses is updated to Database")
}

    return (
       <div className="App">
      <>      <h1 className='uppercase font-bold text-3xl my-3'>Inventory management system-sgl (medium)</h1>
        <button className='btn rounded' onClick={HandleDashboard}>Dashboard</button>
      <h2 className='text-1xl my-2'> Enter inventory uses of</h2> 
      <div class="dropdown shadow-lg p-1 shadow-green-400 rounded">
   <label tabindex="0" class="btn m-1 shadow-sm shadow-green-600">Certificate</label>
  <ul tabindex="0" class=" dropdown-content menu p-2 bg-base-100 rounded-box w-52 border-emerald-400 shadow-lg shadow-green-400">
    <Link to={'/'}> <li><a>Small Certificate</a></li> </Link>
    <Link to={'/medium'}> <li><a>Medium Cerficate</a></li> </Link>
   </ul>
 </div>
      

      {/* Stock update */}
      <div className='p-6'>
        <h1 className='uppercase text-2xl text-center my-2'>update inventory  stock</h1>
        <div>
          <input onChange={e=>{setId(e.target.value)}} type="text" placeholder="Id" className='input input-bordered'></input>
          <input onChange={e=>{setDate(e.target.value)}} type="text" placeholder="Date" className='input input-bordered'></input>
          <input onChange={e=>{setImport(e.target.value)}} type="text" placeholder="Imported from" className='input input-bordered'></input>
        </div>

        <div className='my-4'>
          <input onChange={e=>parseInt(setImInner(e.target.value))} type="number" placeholder='Inner' className='input input-bordered'></input>
          <input onChange={e=>parseInt(setImOuter(e.target.value))} type="number" placeholder='Outer' className='input input-bordered'></input>
          <input onChange={e=>parseInt(setImLemo(e.target.value))} type="number" placeholder='Lemo' className='input input-bordered'></input>
          <input onChange={e=>parseInt(setImPouch(e.target.value))} type="number" placeholder='Pouch' className='input input-bordered'></input>
          <button onClick={HandleStockUpdate} className='btn rounded px-32 my-4 bg-pink-700 sub_btn mx-6 block'>Submit</button>
        </div>
      </div>
      {/* stock update */}
      <div className='grid grid-cols-2 gap-1 my-6 p-6'>
        {/* <div className='p-3 shadow-2xl shadow-red-700'>
          <h2 className='w-64 shadow-2xl shadow-red-500 py-3'>stock summery-<span className='font-bold text-1xl'> {hudai} </span></h2>
          <div className='p-2 my-2'>
            <p className='w-32 my-3 border p-2 font-bold rounded'>Inner : {inner_stock}</p>
            <p className='w-32 my-3 border p-2 font-bold rounded'>Outer : {outer_stock}</p>
            <p className='w-32 my-3 border p-2 font-bold rounded'>Lemo : {lemo_stock}</p>
            <p className='w-32 my-3 border p-2 font-bold rounded'>Pouch : {pouch_stock}</p>
          </div>
         */}
        <div className='p-1 shadow-2xl shadow-green-700'>
        <Medium_Waste></Medium_Waste>
        </div>
         
    
        <div>

          <div className='col-span-3 P-5  shadow-2xl shadow-green-700'>
          <h1 className='text-1xl uppercase p-2 shadow shadow-green-500'>Regular Uses</h1>
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
                <input onChange={e => setDatee(e.target.value)} type="text" placeholder="00/00/00" class="input input-bordered" required />
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
            <div className='shadow shadow-red-800 '> <button onClick={HandleUses} className='btn rounded px-32 my-4 bg-pink-700 ' >Submit </button></div>
            <ToastContainer></ToastContainer>
         
          </div>
        </div>
      </div>
      </>
   
      
    </div>
    );
};

export default Medium_Home;