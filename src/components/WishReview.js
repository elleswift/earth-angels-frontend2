// import { useState } from 'react'

// const WishReview = () => {
//   const [form, setForm] = useState({})
  
//   const ReviewWish = () => {

//     fetch('http://localhost:3001/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     })
//       .then((res) => res.json())
//       .then((data) => setForm(data))
//       .catch((err) => console.error(err));

//     console.log('Wish sent to API 🪄')
//     alert('Your request is under review')
//   }

//   const handleForm = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     console.log(e.target.id)
//     console.log(form)
//   }

//   return (

//     <div className="form">
//       <form className="wish-review">
//         <input
//           className='field'
//           onChange={(e) => handleForm(e)}
//           type='text'
//           placeholder='Name'
//           name='Name'
//           id='Name' 
//           />
//         <input
//           className='field'
//           onChange={(e) => handleForm(e)}
//           type='text'
//           placeholder='RequestDate'
//           name='RequestDate'
//           id='RequestDate' 
//           />
//         <input
//           className='field'
//           onChange={(e) => handleForm(e)}
//           type='text'
//           placeholder='NeedByDate'
//           name='NeedByDate'
//           id='NeedByDate' 
//           />
//         <input
//           className='field'
//           onChange={(e) => handleForm(e)}
//           type='text'
//           placeholder='PreferredContact'
//           name='PreferredContact'
//           id='PreferredContact'
//           />
//         <input
//           className='field'
//           onChange={(e) => handleForm(e)}
//           type='text'
//           placeholder='Request'
//           name='Request'
//           id='Request'
//           />
//           <input
//           className='field'
//           onChange={(e) => handleForm(e)}
//           type='text'
//           placeholder='Status'
//           name='Status'
//           id='Status'
//           />
//           <input
//           className='field'
//           onChange={(e) => handleForm(e)}
//           type='text'
//           placeholder='Approved'
//           name='Approved'
//           id='Approved'
//           />
//           <label htmlFor='Status'><p style={{fontSize: 12}}> By checking this box I certify that the information provided is true.</p></label>
//           < input 
//           name='Status' 
//           type='checkbox'
//           onChange={(e) => handleForm(e)}
//           className='StatusBox' 
//           id='Status' 
//           value={'underReview'}
//           /> <br />
//           <button onClick={(event) => WishReview(event)}>Approve Wish</button>  
//       </form>
    
//     </div>
//   )
// }
// export default WishReview