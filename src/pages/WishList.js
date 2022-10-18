import { useState, useEffect } from 'react'
import { OneWish } from '../components/OneWish'
// import { Halo2 } from './images.halo2.jpg'

const WishList = () => {
  const [wishes, setWishes] = useState([])

useEffect(() => {
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/`)
  .then(res => res.json())
  .then(data => setWishes(data))
  .catch(err => console.error(err))
}, [])

const allWishes = wishes.map((wishes, index) => {
  return <OneWish key={wishes._id} wishes={wishes} index={index}/>

})

  return (
  <div className='container'>
    {/* <img src={Halo2} alt='halo' /> */}
    <h1 style={{color: 'rgb(16, 16, 140)', fontStyle: 'oblique', fontWeight: 'bold'}}>Earth Angels...Grant A Wish</h1>
      <div className='wishes'>{allWishes}</div>
  </div>
  )

}
export default WishList