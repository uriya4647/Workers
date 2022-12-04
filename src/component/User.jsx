import React from 'react'

const User = (props) => {
    const {ID,name, age} = props.user;
    console.log(ID,name, age);
  return (
    <div>
    name: {name}
    age:{age}
     ID:{ID}


    </div>
  )
}

export default User