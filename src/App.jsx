import React, { useEffect, useState } from 'react'

const App = () => {
const [todo, setTodo] = useState(null)
useEffect(() => {
  const fetchData = async () => {
    try {
      let url = `http://localhost:3000/repoes`;
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error(`HTTP Error. status: ${res.status}`);
      }
      const post = await res.json()
      setTodo(post)

    } catch (error) {
      console.error("Error fetching data:", error)
    }
  } 
}, [todo])


  return (
      <div className='container'>
      {todo ? (
        Array.isArray(todo) ? (
          todo.map((user, index) => <div key={index}><h2>{user.name || "Unnamed User"}</h2><p>{user.title}</p><button onClick={dlt}>Delete</button></div>)
        ) : (
          <p>{todo.name || "Unnamed User"}</p>
        )
      ) : (
        <p>Loading...</p>
      )}
      </div>
  )
}

export default App