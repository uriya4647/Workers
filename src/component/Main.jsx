import React, { useEffect, useState } from 'react';
import AddWorker from './AddWorker';
import Worker from './Worker'
import { sortByAge, sortByName } from './sortByName';

const Main = () => {
  const [workers, setWorkers] = useState([]);
  const [sort, setSort] = useState([...workers]);


  const pushWorker = (worker) => setWorkers([...workers, worker])

  const removeWorker = (id) => {
    
    let index = workers.findIndex(object => {
      return object.ID === id;
    });
    let tempWorker = [...workers]
    tempWorker.splice(index, 1)
    setWorkers(tempWorker)

  }
  const isIdExsist = (id) =>{

    let index = workers.findIndex(object => {
      return object.ID === id;
    });
   
    console.log(index >= 0 );
    return index >= 0 
  }

  useEffect(() => {
    console.log(sort);
    setSort(sortByName([...workers]))

  }, [workers])



  console.log("worker", workers);




  return (
    <div>
      <AddWorker pushWorker={pushWorker} isIdExsist={isIdExsist} />
      <button onClick={() => { setSort(sortByName([...workers])) }} >sortByName</button>
      <button onClick={() => { setSort(sortByAge([...workers])) }} >sortByAge</button>
      {sort.map(( worker ) => {
        return <Worker key={worker.ID}
          worker={worker}  removeWorker={removeWorker} />
      })}



    </div>
  )
}

export default Main