import React from 'react'

const Worker = (props) => {
    const {ID,name, age} = props.worker;

  return (
    <div>
    name: {name} <br/>
    age:{age}<br/>
     ID:{ID}<br/>

    <button onClick={()=> props.removeWorker(ID) }>DELTE</button>

    </div>
  )
}

export default Worker