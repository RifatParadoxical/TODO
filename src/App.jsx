import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const [todo, setTodo] = useState(null);
  const { register, handleSubmit, formState:{errors} } = useForm()
  function onSubmit(elem) {
    console.log(elem)
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
      <form onSubmit={handleSubmit(onsubmit)}>
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