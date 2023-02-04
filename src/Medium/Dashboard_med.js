import React, { useEffect, useState } from 'react';
import DashboardTable_mid from './DashboardTable_mid';
import DashboardTable_waste from './DashboardTable_waste';

const Dashboard_med = () => {
    const [stock, setStock] = useState([]);
   
    useEffect(()=>{
        fetch('http://localhost:5000/stock_med')
    .then(res=>res.json())
    .then(data=>setStock(data))
    
    },[])
    // console.log(stock)
    let sum_value_inner = stock.reduce((sum,current)=>{
      return sum + parseInt(current.im_inner);
  },0)
  
  let sum_value_outer = stock.reduce((sum,current)=>{
      return sum + parseInt(current.im_outer) ;
  },0)
  
  let sum_value_lemo = stock.reduce((sum,current)=>{
      return sum + parseInt(current.im_lemo);
  },0)
  let sum_value_pouch = stock.reduce((sum,current)=>{
      return sum + parseInt(current.im_pouch);
  },0)
   
  console.log( sum_value_inner, sum_value_lemo , sum_value_outer)
    return (
        <>
        <div>
        <h1 className='text-1xl shadow-2xl shadow-red-500 p-6 m-4'>Dashboard- Certificate Stock(Medium) </h1>
        <div class="overflow-x-auto p-6">
  <table class="table table-compact w-full">
    <thead>
      <tr>
         
        <th>Invoice Id</th> 
        <th>Date</th> 
        <th>Inner</th> 
        <th>Outer</th> 
        <th>Lemo</th> 
        <th>Pouch</th>
        <th>Supplier</th>
      </tr>
    </thead> 
    <tbody>
        {
            stock.map(x=><Table_row 
                key={x._id}
                id={x.id}
                date = {x.date}
                inner = {x.im_inner}
                outer = {x.im_outer}
                lemo = {x.im_lemo}
                pouch = {x.im_pouch}
                region = {x.imprt}    
            ></Table_row>)
        }
        
    </tbody> 
    <tfoot>
      <tr>
         
        <th>Invoice Id</th> 
        <th>Date</th> 
        <th> Inner</th> 
        <th>Outer</th> 
        <th> Lemo</th> 
        <th>Pouch</th>
        <th>Supplier</th>
      </tr>
    </tfoot>
  </table>

  <div class="overflow-x-auto">
          <h1 className='text-1xl shadow-2xl shadow-red-500 p-6 m-4'>TOTALL STOCK - Medium </h1>
  <table class="table w-full p-6 my-6">
  
    <thead className='p-5 my-2'> 
      <tr>
        <th>Inner</th>
        <th>Outer</th>
        <th>Lemo</th>
        <th>Pouch</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
       
        <td className='font-2xl font-bold'>{sum_value_inner}</td>
        <td className='font-2xl font-bold'>{sum_value_outer}</td>
        <td className='font-2xl font-bold'>{sum_value_lemo}</td>
        <td className='font-2xl font-bold'>{sum_value_pouch}</td>
      </tr>
      
      
    </tbody>
  </table>
</div>
</div>
</div>
<DashboardTable_mid></DashboardTable_mid>

{/* uses data of regualr use */}
{/* <div>
<h1 className='text-1xl shadow-2xl shadow-red-900 p-6 m-4'>DashBoard - Uses Certificate </h1>
        <div class="overflow-x-auto p-6">
  <table class="table table-compact w-full">
    <thead>
      <tr>
         
        <th>Size</th> 
        <th>Date</th> 
        <th>Inner</th> 
        <th>Outer</th> 
        <th>Lemo</th> 
        <th>Pouch</th>
       
      </tr>
    </thead> 
    <tbody>
        {
            uses.map(x=><Table_row_two 
                key={x._id}
                size ={x.size}
                date = {x.datee}
                inner = {x.inner}
                outer = {x.outer}
                lemo = {x.lemo}
                pouch = {x.pouch}
                    
            ></Table_row_two>)
        }
        
    </tbody> 
    <tfoot>
      <tr>
         
      <th>Size</th> 
        <th>Date</th> 
        <th>Inner</th> 
        <th>Outer</th> 
        <th>Lemo</th> 
        <th>Pouch</th>
      </tr>
    </tfoot>
  </table>
</div>  
</div> */}
<DashboardTable_waste></DashboardTable_waste>

</>
    );
};

const Table_row = ({id,date,inner,outer,pouch,region,lemo})=>{

return(

<tr>
        <th>{id}</th> 
        <td>{date}</td> 
        <td>{inner}</td> 
        <td>{outer}</td> 
        <td>{lemo}</td> 
        <td>{pouch}</td> 
        <td>{region}</td> 
        </tr> 

)
}

// const Table_row_two = (size,date,inner,outer,lemo,pouch)=>{
//   return(
//     <tr>
//     <th>{size}</th> 
//     <td>{date}</td> 
//     <td>{inner}</td> 
//     <td>{outer}</td> 
//     <td>{lemo}</td> 
//     <td>{pouch}</td> 
     
//     </tr> 


//   )
// }
{/* <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr> */}



export default Dashboard_med;