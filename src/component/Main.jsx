import React, { useState } from 'react';
import User from './User'

const Main = () => {
const [users, setUsers] = useState(
    [{name: ' 1',
    ID: '1 ',
    age: '1 '},
    {name: ' 2',
    ID: '2 ',
    age: ' 2'}]);


  return (
    users.map((user) => {return <User key = {user.ID} user ={user}/>})
  )
}

export default Main