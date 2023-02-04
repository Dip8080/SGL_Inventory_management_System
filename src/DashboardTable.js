
import React, { useEffect, useState } from 'react';

const DashboardTable = () => {
    const [uses, setUses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/uses')
        .then(res=>res.json())
        .then(data=>setUses(data))
    },[])

let sum_value_inner = uses.reduce((sum,current)=>{
    return sum + current.inner;
},0)

let sum_value_outer = uses.reduce((sum,current)=>{
    return sum +current.outer ;
},0)

let sum_value_lemo = uses.reduce((sum,current)=>{
    return sum + current.lemo;
},0)
let sum_value_pouch = uses.reduce((sum,current)=>{
    return sum + current.pouch;
},0)
    return (
        <div>
        <h1 className='text-1xl shadow-2xl shadow-yellow-500 p-6 m-4'>DashBoard - Uses Certificate (SMALL) </h1>
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
          {/* totall */}
         
          <div class="overflow-x-auto">
          <h1 className='text-1xl shadow-2xl shadow-yellow-500 p-6 m-4'>TOTALL USES-SMALL </h1>
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
    );
};

const Table_row_two = ({size,date,inner,outer,lemo,pouch,total})=>{
    let total_inner = 0;
    total_inner = total_inner + inner;  
    return(
         <tr>
         <th>{size}</th> 
         <td>{date}</td> 
         <td>{inner}</td> 
         <td>{outer}</td> 
         <td>{lemo}</td> 
         <td>{pouch}</td> 
         <td>{total}</td>
        
         </tr> 
    
    
       )
     }

export default DashboardTable;