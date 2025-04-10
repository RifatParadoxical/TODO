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
      window.location.reload();
      
    } catch (error) {
      console.log(error)
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('newTodo', {required: true})} type="text" placeholder='Enter Todo' />
        <button type='Submit'>Add</button>
        {errors.newTodo && <p style={{color : "red"}}>To add new Todo, Input can't be Empty.</p>}
      </form>
      {todo ? todo.map((element, key)=>(
        <div key={element.id}>
          <h2>{element.name}</h2>
        </div>
      )) : ( <h2>Loading..</h2> )}
    </div>
  );
};

export default App;