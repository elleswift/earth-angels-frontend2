import { Link } from 'react-router-dom'

export const OneWish = ({ wishes }) => {

  return (

<Link state={ wishes } to='/grant-wish' className='wish'>

    <h3>{wishes.Name}</h3>
    <h3>{wishes.RequestDate}</h3>
    <h3>{wishes.PreferredContact}</h3>
    <h3>{wishes.Request}</h3>
    <button className='grant'>Grant Wish</button>
   </Link> 
  

  )
}

