import Logo from '../assets/images/logo.gif'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} className='logo-footer-image' alt='logo' />
      <small><p style={{color: 'rgb(16, 16, 140'}}>Live the change you want to see in the world.</p> <br /><p style={{color: 'rgb(16, 16, 140'}}>Copyright © 2022 | all rights reserved</p></small>
   
    </footer>
  )
 }
 export default Footer