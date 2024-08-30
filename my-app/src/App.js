import React, {useState,useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [name,setName] = useState('')
  const[email,setEmail] = useState('')

  useEffect(() => {
    fetch('')
    .then(response => response.json())
    .then(data => 
      setUser(data)
    

    );
    setLoading(false)
  },[])

  const handleSubmit = (e) => {
    e.preventDafault()
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name,email})

    })
    .then(response => response.json())
    .then(data => console.log(data))
     setUser([...user], data)
     setError(null)
    }

  return (
    <div className="App">
      <ul>
        {user.map(users => (
        <li key={users.id}> {users.name} - {users.email}</li>
        ))}

      </ul>
      <h2>Add user</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input type="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

      </form>
    
    </div>
  );
}

export default App;
