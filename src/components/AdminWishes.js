import { useState, useEffect } from 'react'

import { AdminCard } from '../components/AdminCard'

const AdminWishes = () => {
  const [wishes, setWishes] = useState([])

useEffect(() => {
  fetch('http://localhost:3001')
  .then(res => res.json())
  .then(data => setWishes(data))
  .catch(err => console.error(err))
}, [])

const allWishes = wishes.map((wishes, index) => {
  return <AdminCard key={wishes._id} wishes={wishes} index={index}/>

})

  return (
  <div className='container'>
    <h1 style={{color: 'rgb(16, 16, 140)', fontStyle: 'oblique', fontWeight: 'bold'}}>Welcome to Earth Angels Admin Page </h1>
      <div className='wishes'>{allWishes}</div>
  </div>
  )

}
export default AdminWishes