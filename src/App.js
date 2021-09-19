import React, { useState } from "react";
import './style.css';

const App=()=> {
  const[users, setUsers] = useState([]);
  const loadUsers=async()=>{
    const response = await fetch("https://reqres.in/api/users?page=1" );
    const jsonR = await response.json();
    setUsers(jsonR.data);
  };
return (
    <div className="App">
      <header>
      <h1>Welcome</h1>
      <button onClick={loadUsers} > Click Here To Get Users Data</button>
      </header>
      <ul class ="Box">
        {users.map(({ id , email,first_name,last_name,avatar }) => (
          <li class="li"key = {id}> 
            <img src={avatar}></img>
            <li class="list">Name : {first_name} {last_name}</li>
            <li class="list">Email ID : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;