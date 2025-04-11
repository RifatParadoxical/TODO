import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const [todo, setTodo] = useState(null);
  const { register, handleSubmit, formState:{errors} } = useForm()
  const onSubmit = async (data) =>  {
    const name = { name: data.newTodo }
    try {
      const addingData = await fetch('http://localhost:3000/repoes', {
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(name)
      }) 
      function reload() {
        window.location.reload();
      } 
      reload();
      
    } catch (error) {
      console.log(error)
    }
  }

const dlt = async (element) => {
  
  try { 
    const deletingData = await fetch('http://localhost:3000/repoes/' + element.id,{
      method : 'DELETE'
    })

    function reload() {
      window.location.reload();
    } 
    reload();

  } catch (error) {
    
  }
}

  useEffect(() => {
     const fetchData = async () => {
       try {
      let url = `http://localhost:3000/repoes`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Error found");
      }

        const data = await res.json()
        setTodo(data)

      } catch (error) {
      console.error('Error:', error)
      }
     }
     fetchData()
  }, []);
  

  return (
    <div className="container">
        <form className="todo-form" onSubmit={handleSubmit(onSubmit)}>
    <input
      {...register('newTodo', { required: true })}
      type="text"
      placeholder="Enter Todo"
      className="todo-input"
    />
    <button type="submit" className="add-button">Add</button>
    {errors.newTodo && (
      <p className="error-message">To add new Todo, Input can't be empty.</p>
    )}
  </form>
      {todo ? todo.map((element, key)=>(
          <div key={element.id} className="todo-item">
          <h2 className="todo-title">{element.name}</h2>
          <button className="delete-button" onClick={() => dlt(element)}>Delete</button>
        </div>
      )) : ( <h2>Loading..</h2> )}
    </div>
  );
};

export default App;