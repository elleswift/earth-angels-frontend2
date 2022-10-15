import { Link } from 'react-router-dom'

export const AdminCard = ({ wishes }) => {

  return (

<Link state={ wishes } to='/admin-wish' className='wish'>

    <h3>{wishes.Name}</h3>
    <h3>{wishes.RequestDate}</h3>
    <h3>{wishes.PreferredContact}</h3>
    <h3>{wishes.Request}</h3>
    {/* <button>Delete Wish</button> */}
   </Link> 
  
  )
}

