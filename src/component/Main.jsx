import React, { useEffect, useState } from 'react';
import AddWorker from './AddWorker';
import Worker from './Worker'
import { sortByAge, sortByName } from './sortByName';

const Main = () => {
  const [workers, setWorkers] = useState([]);
    const [sort ,setSort] = useState([...workers]);

    
    const pushWorker = (worker)=> setWorkers([...workers,worker])

    const removeWorker = (index) => 
    {
      let tempWorker = [...workers]
      tempWorker.splice(index,1)
      setWorkers(tempWorker)
    } 
    useEffect(()=>{
      // sort by last sort
      setSort( sortByName([...workers]))
      
    }, [workers] )
  


  console.log("worker" ,workers);

   


  return (
    <div>
      <AddWorker pushWorker ={pushWorker} />
      <button onClick={()=>{ setSort(sortByName([...workers]))}} >sortByName</button>
      <button onClick={()=>{setSort(sortByAge([...workers]))}} >sortByAge</button>
      {sort.map((worker , index) => {return <Worker  key = {worker.ID} 
      worker ={worker} index= {index} removeWorker = {removeWorker}/>})}


      
      </div>
  )
}

export default Main