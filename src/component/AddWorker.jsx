import { useEffect, useState } from "react"

const AddWorker = ({pushWorker , isIdExsist}) => {
    const[ableButton,setAbleButton] = useState(true);
    const [worker, setWorker] = useState({
    name: '',
    ID: '',
    age: ''});
    
    const handleChange = ( event, prop ) => {
      setWorker({...worker , [prop]: event.target.value})
      console.log(worker);

    };
  
useEffect(()=>{
  worker.name && worker.ID && worker.age && ! isIdExsist(worker.ID)
   ? setAbleButton(false)
   : setAbleButton(true);

  //  worker.ID && isIdExsist(worker.ID)

  },[worker.name ,worker.ID,worker.age])



const removeValue = ()=>{
  setWorker({
    name: '',
    ID: '',
    age: ''})
}
   
const warningIdExists = () =>{
  isIdExsist(worker.ID)&&
  alert("The ID already exists")
}
    return(

        // <form onSubmit={handleSubmit}>
        <form >
     
        <label>
          Name:
          <input type="text" value={worker.name} onChange={(event) => handleChange(event , "name")} />
        </label>
        <label>
          Age:
          <input type="text" value={worker.age} onChange={(event) => handleChange(event , "age")} />
        </label>
        <label>
          ID:
          <input type="text" style={{borderColor: ! isIdExsist(worker.ID) ? 'black' : 'red'}}
           value={worker.ID} onChange={(event) => handleChange(event , "ID")}
           onBlur={warningIdExists} />
        </label>
        <input value="Submit" type="submit"  disabled={ableButton} 
        onClick={(e)=>{ e.preventDefault(); pushWorker(worker); removeValue() }}/>
      </form>
    )
}

export default AddWorker