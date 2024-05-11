
import './Footer.css'
import footer_logo from '../Assests/shoppingbag bg remove.png'
import instagram_icon from '../Assests/instagram.png'
import facebook_icon from '../Assests/facebook.png'
import linkedin_icon from '../Assests/linkedin.png'
import twitter_icon from '../Assests/twitter.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
         <img src={footer_logo}width={100} alt=''/>
         <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Offrices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>    
    <div className='footer-social-icon'>
        <div className='footer-icon-container'>
            <img src={instagram_icon} alt=''/>
        </div>
        <div className='footer-icon-container'>
            <img src={linkedin_icon} alt=''/>
        </div>
        <div className='footer-icon-container'>
            <img src={twitter_icon} alt=''/>
        </div>  
        <div className='footer-icon-container'>
            <img src={facebook_icon} alt=''/>
        </div>        
    </div>
    <div className="footer-copyright">
        <hr/>
        <p>Coppyright @ 2024 - All Right Reserved</p>
    </div>
    </div>
  )
}

export default Footer
