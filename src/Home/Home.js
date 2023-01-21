import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Waste from '../Waste';



const Home = () => {
  const [size, setSize] = useState('');
  const [datee , setDatee] = useState('');
  const [inner, setInner] = useState(0);
  const [outer, setOuter] = useState(0);
  const [lemo, setLemo] = useState(0);
  const [pouch, setPouch] = useState(0);
  // ......................................>
  // hudai
  const [hudai, setHudai] = useState("certificate");
  //................................>
  // toast
  // const handleToast = () => {
  //   toast("data has been updated to the server")

  // }
  // -------------------------------------->
  // summery
  const [outer_stock, setOuterStock] = useState('2000');
  const [inner_stock, setInnerStock] = useState('1500');
  const [lemo_stock, setLemoStock] = useState('3000');
  const [pouch_stock, setPouchStock] = useState('1200')
  // ----------------------->
  const mediumCertOption = () => {
    setHudai("medium Certificate")
    toast("medium cert is selected");
    
  }
  const smallCertOption = () => {
    toast("small cert is selected");
    setHudai("Small Certificate");
  }

  // handle Uses  submit
  const HandleUseSubmit = () => {
    
    alert('are you sure ?')
   
    const updated_outer_stock = parseInt(outer_stock)+parseInt(outer);
    const updated_inner_stock = parseInt(inner_stock)+parseInt(inner);
    const updated_lemo_stock = parseInt(lemo_stock)+parseInt(lemo);
    const updated_pouch_stock = parseInt(pouch_stock)+parseInt(pouch);

    setOuterStock(updated_outer_stock);
    setInnerStock(updated_inner_stock);
    setLemoStock(updated_lemo_stock);
    setPouchStock(updated_pouch_stock);
    
    const stock = {updated_pouch_stock,updated_inner_stock,updated_lemo_stock,updated_outer_stock};

    const uses = {datee,size,inner,outer,pouch,lemo};

    fetch("http://localhost:5000/uses",{
    method : "POST",
    headers : {
      'content-type' : 'application/json'

    },
    body : JSON.stringify(uses)

    })
    .then(res=> res.json())
    .then(date=>console.log(date))
    .catch(err=>console.log(err))
    toast('Regular inventory uses are updated into Database');

    // end of uses inventory

    //     fetch("http://localhost:5000/stock",{
//       method : "POST",
//       headers : {
//         'content-type' : 'application/json'
//       },
//       body : JSON.stringify(stock)
//       })
//       .then(res=>res.json())
//       .then(data=>console.log(data))
//       .catch(err=>console.log(err))
//       toast("inventory data is sent to server");
//  }
  // ----------------------------
  }

// inventory stock update
const [id, setId] = useState('');
const [date, setDate] = useState('');
const [imprt, setImport] = useState('');
const [im_inner,setImInner]=useState('');
const [im_outer, setImOuter] = useState('');
const [im_lemo,setImLemo] = useState('');
const [im_pouch,setImPouch] = useState('');

const HandleStockUpdate = ()=>{
 alert('Are you sure ?')   
 const New_stock = {id,date,imprt,im_inner,im_outer,im_lemo,im_pouch}; 
 fetch("http://localhost:5000/stock",{
  method : "POST",
  headers : {
    'content-type' : 'application/json'
  },
  body : JSON.stringify(New_stock)
 })
 .then(res=>res.json())
 .then(data=>console.log(data))
 .catch(err=>console.log(err))
 toast("Inventory details is updated to the Database")
 

}
const navigate = useNavigate();
const HandleDashboard = () =>{
  navigate("/dashboard")
}
return (
        <div className="App">
      <>      <h1 className='uppercase font-bold text-3xl my-3'>Inventory management system-sgl</h1>
        <button className='btn rounded' onClick={HandleDashboard}>Dashboard</button>
      <h2 className='text-1xl my-2'> Enter inventory uses of</h2> 
      <select class="select select-bordered">
        <option disabled selected>Cerficate</option>
        <option onClick={mediumCertOption}> Medium Cerficate</option>
        <option onClick={smallCertOption}> Small Cerficate</option>
        <Link to={'/dashboard'}>  DashBoard </Link>
      </select>

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
          <button onClick={HandleStockUpdate} className='btn rounded px-32 my-4 bg-purple-700 sub_btn mx-6 block'>Submit</button>
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
        <div className='p-1 shadow-2xl shadow-red-700'>
        <Waste></Waste>
        </div>
         
    
        <div>

          <div className='col-span-3 P-5  shadow-2xl shadow-red-700'>
          <h1 className='text-1xl uppercase p-2 shadow shadow-red-500'>Regular Uses</h1>
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
            <div className='shadow shadow-red-800 '> <button className='btn rounded px-32 my-4 bg-green-700 ' onClick={HandleUseSubmit}>Submit </button></div>
            <ToastContainer></ToastContainer>
         
          </div>
        </div>
      </div>
      </>
   
      
    </div>
    );
};

export default Home;