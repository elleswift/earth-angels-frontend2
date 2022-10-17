import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { AdminCard } from '../components/AdminCard'

const WishAdmin = () => {
  const [wishes, setWishes] = useState([])
  const [form, setForm] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const { Name, RequestDate, Request, PreferredContact } = location.state

useEffect(() => {
  fetch(`${process.env.REACT_APP_API_ENDPOINT}`)
  .then(res => res.json())
  .then(data => setWishes(data))
  .catch(err => console.error(err))
}, [])


  const deleteWish = (event) => {
  event.preventDefault()
  console.log('Request to delete sent to API')

  fetch(`http://localhost:3001?PreferredContact=${PreferredContact}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then((res) => res.json())
  .then(() => navigate('/wish-list'))
  .catch((err) => console.error(err))
};

const approveWish = (event) => {
  event.preventDefault()
  console.log('Request sent to wish list🤞🏾')

  fetch(`${process.env.REACT_APP_API_ENDPOINT}?Name=${Name}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then(() => navigate('/wish-list'))
    .catch((err) => console.error(err));
    
};

const allWishes = wishes.map((wishes, index) => {
  return <AdminCard key={wishes._id} wishes={wishes} index={index}/>

})

  return (
  <div className='container'>
    <h1 style={{color: 'rgb(16, 16, 140)', fontStyle: 'oblique', fontWeight: 'bold'}}>Earth Angels Admin Page</h1>
      <div className='wishes'>{allWishes}</div>
  </div>
  )

}


// const WishAdmin = () => {
//   const [form, setForm] = useState({})
//   const location = useLocation()
//   const navigate = useNavigate()

//   const { Name, RequestDate, Request, PreferredContact } = location.state

//   const deleteWish = (event) => {
//   event.preventDefault()
//   console.log('Request to delete sent to API')

//   fetch(`http://localhost:3001?PreferredContact=${PreferredContact}`, {
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json'
//   },
// })
//   .then((res) => res.json())
//   .then(() => navigate('/wish-list'))
//   .catch((err) => console.error(err))
// };

// const approveWish = (event) => {
//   event.preventDefault()
//   console.log('Request sent to wish list🤞🏾')

//   fetch(`http://:3001?Name=${Name}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(form),
//   })
//     .then((res) => res.json())
//     .then(() => navigate('/wish-list'))
//     .catch((err) => console.error(err));
    
// };

// const handleForm = (e) => {
//   setForm({...form, [e.target.name]: e.target.value})
// };
  
//     return (
//   <div className='container'>
//     <div className='wish-admin'>
//       <h3>{Name}</h3>
//       <h3>{RequestDate}</h3>
//       <h3>{PreferredContact}</h3>
//       <h4>{Request}</h4>
      
//      <form className='add-form'>

//       <label htmlFor=''>Name</label>
//       <input
//         onChange={(e) => handleForm(e)}
//         type='text'
//         placeholder='Name'
//         name='Name'
//         id='Name'
//         defaultValue={Name}
//         />
//         <label htmlFor=''>RequestDate</label>
//       <input
//         onChange={(e) => handleForm(e)}
//         type='number'
//         placeholder='11/11/11'
//         name='RequestDate'
//         id='RequestDate'
//         defaultValue={RequestDate}
//         />
//     <label htmlFor=''>Request</label>
//       <input 
//         maxLength={250}
//         type='text'
//         placeholder='Boy age 12 needs'
//         name='Request'
//         id='Request'
//         defaultValue={Request}
//         onChange={(e) => handleForm(e)}           
//         />
//     <label htmlFor=''>PreferredContact</label>
//       <input            
//         onChange={(e) => handleForm(e)}
//         type='text'
//         placeholder='eflshelf@gmail.com'
//         name='PreferredContact'
//         id="PreferredContact"
//         defaultValue={PreferredContact}
//         />
//   </form> 
//   <button onClick={approveWish}>Approve Wish</button>
//   <button onClick={deleteWish}>Delete Wish</button>
//     </div>
//   </div>
//   )
// }

export default WishAdmin