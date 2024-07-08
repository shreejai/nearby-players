import React, { useEffect, useState } from 'react';
import GameList from '../../shared/Data'
import { useSession } from 'next-auth/react';

const Form = () => {
  const [inputs, setInputs] = useState({});
  const {data:session} = useSession();
  useEffect(()=>{
    setInputs((values) => ({...values, userName:session.user.name}));
    setInputs((values) => ({...values, userImage:session.user.image}));
    setInputs((values) => ({...values, email:session.user.email}));
  },[session])
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({...values, [name]:value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("On Submit:", inputs);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Title'
        required
        onChange={handleChange}
        className='w-full mb-4 border-[1px] p-2 rounded-md'
      />
      <textarea
        name='desc'
        placeholder='Write description here...'
        required
        onChange={handleChange}
        className='w-full mb-4 outline-blue-400 border-[1px] p-2 rounded-md'
      />
      <input
        type='date'
        name='date'
        required
        onChange={handleChange}
        className='w-full mb-4 border-[1px] p-2 rounded-md'
      />
      <input
        type='text'
        name='location'
        placeholder='Location'
        required
        onChange={handleChange}
        className='w-full mb-4 border-[1px] p-2 rounded-md'
      />
      <input
        type='text'
        name='zip'
        placeholder='Zipcode'
        required
        onChange={handleChange}
        className='w-full mb-4 border-[1px] p-2 rounded-md'
      />
      <select
        name='game'
        required
        onChange={handleChange}
        className='w-full mb-4 border-[1px] p-2 rounded-md'
      >
        <option>
          Select game
        </option>
        {
          GameList.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))
        }
      </select>
      <input
        type='file'
        accept='image/jpg, image/jpeg, image/png, image/webp'
        className='w-full mb-5 border-[1px] p-2 rounded-md'
        onChange={handleChange}
      />
      <button
        type='submit'
        className='bg-blue-500 w-full p-1 rounded-md text-white'
      >Submit</button>
    </form>
  )
}

export default Form