import { useEffect, useState } from "react";




    const DashboardTable_Waste = () => {
    const [waste,setWaste] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/waste_med')
        .then(res=>res.json())
        .then(data=>setWaste(data))



    },[])

    let sum_value_inner = waste.reduce((sum,current)=>{
        return sum + parseInt(current.inner);
    },0)
    
    let sum_value_outer = waste.reduce((sum,current)=>{
        return sum + parseInt(current.outer) ;
    },0)
    
    let sum_value_lemo = waste.reduce((sum,current)=>{
        return sum + parseInt(current.lemo);
    },0)
    let sum_value_pouch = waste.reduce((sum,current)=>{
        return sum + parseInt(current.pouch);
    },0)


    return (
        <div>
        <h1 className='text-1xl shadow-2xl shadow-green-500 p-6 m-4'>DashBoard - Waste Certificate </h1>
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
                   waste.map(x=><WasteTable
                        key={x._id}
                        size ={x.size}
                        date = {x.date}
                        inner = {x.inner}
                        outer = {x.outer}
                        lemo = {x.lemo}
                        pouch = {x.pouch}
                        
                            
                    ></WasteTable>)
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

          <div class="overflow-x-auto">
          <h1 className='text-1xl shadow-2xl shadow-green-500 p-6 m-4 uppercase'>TOTALL wastage-Medium </h1>
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

const WasteTable =({size,date,inner,outer,pouch,lemo})=>{

    return(
        
        <tr>
         <th>{size}</th> 
         <td>{date}</td> 
         <td>{inner}</td> 
         <td>{outer}</td> 
         <td>{lemo}</td> 
         <td>{pouch}</td> 
         
        
         </tr> 
        
    )


}

export default DashboardTable_Waste;