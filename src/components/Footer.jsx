import React from 'react'
import "./Footer.css"
import { FaFacebookF ,FaTwitter,FaGoogle,FaInstagram} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
         <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>About</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 		
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Payments</a></li>
  	 				<li><a href="#">Shopping</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact us</h4>
  	 			<ul>
            
  	 				<li><a onclick="window.location.href='mailto:tcet@thakureducation.org';" href="#">Gmail</a></li>
  	 				<li><a href="tel:9999999999">Helpline No</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><FaFacebookF className=' mx-auto mt-3 scale-125'/></a>
  	 				<a href="#"><FaTwitter className=' mx-auto mt-3 scale-125'/></a>
                    <a href="#"><FaGoogle className=' mx-auto mt-3 scale-125'/></a>
  	 				<a href="#"><FaInstagram className=' mx-auto mt-3 scale-125'/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer
