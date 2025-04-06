import React, { useEffect, useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
     const fetchData = async () => {
       try {
      const url = 'http://localhost:5173/repoes';
      const res = await fetch(url);
        const data = await res.json()
        setTodo(data)
      } catch (error) {
        console.error(error)
      }
     }
     fetchData()
  }, []);

  return (
    <div className="container">
      
      {todo ? (
        Array.isArray(todo) ? (
          todo.map((user, index) => <p key={index}>{user.name || "Unnamed User"}</p>)
        ) : (
          <p>{todo.name || "Unnamed User"}</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;