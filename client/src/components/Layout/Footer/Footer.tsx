import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { PiHeadphones } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-10 text-gray-700 ">
  
      <div className="container mx-auto flex justify-around py-8 border-b px-5">
        <div className="flex flex-col items-center">
         <img src="https://demo-alukas.myshopify.com/cdn/shop/files/free-shipping.jpg?v=1712656231" alt="" />
          <h4 className="font-semibold text-lg">Free Shipping</h4>
          <p>For all Orders Over $100</p>
        </div>
        <div className="flex flex-col items-center">
         <img src="https://demo-alukas.myshopify.com/cdn/shop/files/returns.jpg?v=1712656231" alt="" />
          <h4 className="font-semibold text-lg">30 Days Returns</h4>
          <p>For an Exchange Product</p>
        </div>
        <div className="flex flex-col items-center">
        <img src="https://demo-alukas.myshopify.com/cdn/shop/files/secured-payment.jpg?v=1712656231" alt="" />
          <h4 className="font-semibold text-lg">Secured Payment</h4>
          <p>Payment Cards Accepted</p>
        </div>
        <div className="flex flex-col items-center">
         <img src="https://demo-alukas.myshopify.com/cdn/shop/files/support.jpg?v=1712656037" alt="" />
          <h4 className="font-semibold text-lg">Support 24/7</h4>
          <p>Contact us Anytime</p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-10 text-md px-5 ">
        <div>
          <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_logo_footer.png?v=1714702294&width=533" alt="" />
          <p>Gold & Diamonds</p>
        </div>

        <div>
          <h4 className="font-bold mb-4 jost">About Alukas</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Core Values</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Blog</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 jost">Our Company</h4>
          <ul className="space-y-2">
            <li>Shopping App</li>
            <li>Be An Affiliate</li>
            <li>Advertise Your Product</li>
            <li>Media Enquiries</li>
            <li>Other Services</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 font-jost">Store Details</h4>
          
         <div className='flex items-center mb-2 gap-3'>
         <div className='h-12 w-12 rounded-full bg-[#C6C6C6] text-white font-bold flex items-center text-3xl justify-center' >
         <PiHeadphones />

         </div>
         <div>
          <p className="">Need Any Help?</p>
          <p className="text-xl font-semibold ">(+800) 1234 56</p>
          </div>
         </div>
          <p>Address: 502 New Design Str, Melbourne, Australia</p>
          <p>Email: alukas@domain.com</p>
        </div>
          <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="container mx-auto flex justify-between py-4  text-gray-500 ">
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-black"><FaInstagram /></a>
          <a href="#" className="hover:text-black"><FaTiktok /></a>
          <a href="#" className="hover:text-black"><FaYoutube /></a>
          <a href="#" className="hover:text-black"><FiX /></a>
          <a href="#" className="hover:text-black"><FaFacebookF /></a>
        </div>
      </div>
          </div>
      </div>
      
      <div className='w-[100%] flex flex-col items-center pt-10 border-t border-1'>
        <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031&width=533" alt="" />
        <h4>Copyright © Alukas all rights reserved. Powered by Bersky.</h4>
      </div>
     
    </footer>
  );
};

export default Footer;
