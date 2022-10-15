import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AdminWish = () => {

 const [form, setForm] = useState({})
 const location = useLocation()
 const navigate = useNavigate()

 const {Name, RequestDate, PreferredContact, Request, Grantorname, AcceptDate, ContactInfo, Comments} = location.state
 
 const deleteWish = (event) => {
  event.preventDefault()

  console.log('Request to delete sent to API')

  fetch(`http://localhost:3001/remove-wish?Name=${Name}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => res.json())
    .then(() => navigate('/wish-list'))
    .catch(err => console.error(err))
    navigate('/wish-list')
 }
  
 const handleForm = (e) => {
  setForm({...form, [e.target.name]: e.target.value})
 }
 const wishReview = () => {
  fetch(`http://localhost:3001/update-wish?Name=${Name}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then(() => navigate('/wish-list'))
    .catch((err) => console.error(err))
    navigate('/wish-list')

    console.log('Update request sent')
};
  return (
   <div className='container'>
    <div className='admin-wish'>
       
      <h3>{Name}</h3>
      <h3>{RequestDate}</h3>
      <h3>{PreferredContact}</h3>
      <h4>{Request}</h4>

      <form className='add-form'>

      <label htmlFor=''>Name</label>
      <input
        onChange={(e) => handleForm(e)}
        type='text'
        placeholder='Name'
        name='Name'
        id='Name'
        defaultValue={Name}
        />

      <label htmlFor=''>RequestDate</label>
      <input
        onChange={(e) => handleForm(e)}
        type='date'
        placeholder='11/11/11'
        name='RequestDate'
        id='RequestDate'
        defaultValue={RequestDate}
        />

      <label htmlFor=''>Request</label>
      <input 
        maxLength={250}
        type='text'
        placeholder='Boy age 12 needs'
        name='Request'
        id='Request'
        defaultValue={Request}
        onChange={(e) => handleForm(e)}           
        />

      <label htmlFor=''>PreferredContact</label>
      <input            
        onChange={(e) => handleForm(e)}
        type='text'
        placeholder='elfonashelf@gmail.com'
        name='PreferredContact'
        id="PreferredContact"
        defaultValue={PreferredContact}
        />

      <input
        onChange={(e) => handleForm(e)}
        type='text'
        placeholder='Status'
        name='Status'
        id='Status'
        // defaultValue={Status}
        />

   </form>
  
  <button onClick={deleteWish}>Delete Wish</button>
  <button onClick={ wishReview}>Update Wish</button>  
    </div>
   </div>
  )
}
export default AdminWish