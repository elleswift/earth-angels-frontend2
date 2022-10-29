import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GrantWish = () => {
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const GrantWish = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/?Grantorname=`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => navigate('/wish-list'))
      .catch((err) => console.error(err));
    navigate('/wish-list');

    alert('Thank you. We will be in contact soon with follow-up instructions ');
  };

  return (
    <div>
      {' '}
      <br />
      <h3 className='g-thankyou'>
        {' '}
        Thank you for assisting someone in their time of need. Please complete
        the short form below for follow up instructions.
      </h3>
      <br />
      <div className='g-form'>
        <form className='grant-wish'>
          <input
            className='field'
            onChange={(e) => handleForm(e)}
            type='text'
            placeholder='Name'
            name='Grantorname'
            id='Grantorname'
          />

          <input
            className='field'
            onChange={(e) => handleForm(e)}
            type='date'
            placeholder='Date'
            name='AcceptDate'
            id='AcceptDate'
          />

          <input
            className='field'
            onChange={(e) => handleForm(e)}
            type='text'
            placeholder='Contact Info'
            name='PreferredContact'
            id='PreferredContact'
          />

          <input
            className='field'
            onChange={(e) => handleForm(e)}
            type='text'
            placeholder='Additional Info'
            name='Comments'
            id='Comments'
          />

          <label htmlFor='Status'>
            <p style={{ fontSize: 12 }}>
              {' '}
              By checking this box I certify that the information provided is
              true.
            </p>
          </label>
          <input
            name='Status'
            type='checkbox'
            onChange={(e) => handleForm(e)}
            className='StatusBox'
            id='Status'
            value={'Accepted'}
          />
          <br />
          <button onClick={(event) => GrantWish(event)}>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default GrantWish;
