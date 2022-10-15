import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const AdminWish = () => {
 const [wishes, setWishes] = useState 
 const [form, setForm] = useState({})
 const location = useLocation()
 const navigate = useNavigate()
 const {Name, RequestDate, PreferredContact, Request, Grantorname, AcceptDate, Comments, ContactInfo} = location.state
 
 const deleteWish = (event) => {
  event.preventDefault()
  console.log('Request to delete sent to API')

  fetch(`http://localhost/3001?Name=${Name}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then(() => navigate('wish-list'))
    .catch(err => console.error(err))
 }
  
 const handleForm = (e) => {
  setForm({...form, [e.target.name]: e.target.value})
 }
 
  return (
   <div className='container'>
    <div className='admin-wish'>
      <h3>{Name}</h3>
      <h3>{RequestDate}</h3>
      <h3>{PreferredContact}</h3>
      <h4>{Request}</h4>
      {/* <h3>{Grantorname}</h3>
      <h3>{AcceptDate}</h3>
      <h3>{ContactInfo}</h3>
      <h3>{Comments}</h3> */}

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
        type='number'
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
        placeholder='eflshelf@gmail.com'
        name='PreferredContact'
        id="PreferredContact"
        defaultValue={PreferredContact}
        />
  
  {/* <button onClick={approveWish}>Approve Wish</button> */}
  <button onClick={deleteWish}>Delete Wish</button>

        {/* <label htmlFor=''>Grantorname</label>
        <input 
        onChange={(e) => handleForm(e)}
        type='text'
        placeholder='Name'
        name='Grantorname'
        id='Grantorname'
        defaultValue={Grantorname}
        />

        <label htmlFor=''>AcceptDate</label>
        <input 
        onChange={(e) => handleForm(e)}
        type='date'
        placeholder='AcceptDate'
        name='AcceptDate'
        id='AcceptDate'
        defaultValue={AcceptDate}
        />

        <label htmlFor=''>ContactInfo</label>
        <input 
        onChange={(e) => handleForm(e)}
        type='text'
        placeholder='ex: janedoe@email.com/561-312-7654'
        name='ContactInfo'
        id='ContactInfo'
        defaultValue={ContactInfo}
        />

        <label htmlFor=''>Comments</label>
        <input 
        onChange={(e) => handleForm(e)}
        type='text'
        placeholder='Comments'
        name='Comments'
        id='Comments'
        defaultValue={Comments}
        /> */}

      </form>
      {/* <button onClick={deleteWish}>Delete Wish</button> */}

    </div>
   </div>
  )
}
export default AdminWish