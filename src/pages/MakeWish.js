import { useState } from 'react';
import {Navigate, useNavigate } from 'react-router-dom';

const MakeWish = () => {
  const [form, setForm] = useState({status:'new'});
  const [count, setCount] = useState('');

  const navigate = useNavigate();

  const addWish = (event) => {
    event.preventDefault();
    console.log('Wish sending to API 🪄');

    fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then((res) => res.json())
    .then(() => navigate('/wish-list'))
    .catch((err) => console.error(err))
    navigate('/wish-list')

    alert('Your request is under review')
    console.log('Wish sent to API 🪄')
    
  };

  const handleForm = (e) => {
    if (e.target.name === 'Request') {
      setCount(e.target.value.length);
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='m-form'>
      <form className='make-wish'>
        <p>
          If submitting a request for clothing, please specify sizes, genders
          and if casual or business. If your need has a deadline date be sure to
          include.
        </p>{' '}
        <br />
        <input
          className='field'
          onChange={(e) => handleForm(e)}
          type='text' required='required'
          placeholder='Name'
          name='Name'
          id='Name'
        />
        <input
          className='field'
          onChange={(e) => handleForm(e)}
          type='date' 
          placeholder='RequestDate'
          name='RequestDate'
          id='RequestDate'
        />
        <input
          className='field'
          onChange={(e) => handleForm(e)}
          type='text' required='required'
          placeholder='Contact Info'
          name='PreferredContact'
          id='PreferredContact'
        />
        <textarea
          input
          maxLength={250}
          className='field'
          onChange={(e) => handleForm(e)}
          type='text' required='required'
          placeholder='Max 250 characters'
          name='Request'
          id='Request'
        />
        <div>
          <p style={{ fontSize: 12, color: 'red', fontWeight: 'bold' }}>
            Maximum characters 250. <br />
            Characters used {count}
          </p>
        </div>{' '}
        <br />
         <label htmlFor='Status'><p style={{fontSize: 12}}> By checking this box I certify that the information provided is true.</p></label>
          < input 
          name='Status' 
          type='checkbox' 
          onChange={(e) => handleForm(e)}
          className='StatusBox' 
          required={true}
          id='Status' 
          value={'underReview'}
          /> <br /> 
        
        <button onClick={(event) => addWish(event)}>Submit Wish</button>
      </form>
    </div>
  );
};
export default MakeWish;
