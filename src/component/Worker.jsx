import React from 'react'

const Worker = (props) => {
    const {ID,name, age} = props.worker;

  return (
    <div>
    name: {name} <br/>
    age:{age}<br/>
     ID:{ID}<br/>

    <button onClick={()=> props.removeWorker(props.index) }>DELTE</button>

    </div>
  )
}

export default Worker