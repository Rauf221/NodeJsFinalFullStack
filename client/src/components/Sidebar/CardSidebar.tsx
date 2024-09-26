import { FaTimesCircle, FaTruck } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface CartSidebarProps {
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  const handleClose = () => {
    setIsVisible(false); 
    setTimeout(onClose, 300); 
  };

  return (
    <div className="fixed inset-0 flex z-50">
     
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isVisible ? 'opacity-50' : 'opacity-0'}`}
        onClick={handleClose}
      ></div>

  
      <div
        className={`absolute right-0 w-[400px] bg-white shadow-lg h-full overflow-y-auto p-6 transition-transform duration-300 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
    
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" onClick={handleClose}>
          <FaTimesCircle className="text-2xl" />
        </button>

        
        <h2 className="text-xl font-bold mb-4">Shopping Cart (0)</h2>

   
        <div className="bg-gray-100 py-3 px-4 rounded-lg mb-6">
          <div className="flex items-center space-x-3 mb-2">
            <FaTruck className="text-red-600" />
            <span className="text-sm font-semibold">Spend $100.00 more to enjoy FREE SHIPPING!</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
          </div>
        </div>

     
        <div className="text-center">
          <div className="text-gray-400 mb-4">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-2 13H5L3 3z" />
            </svg>
          </div>
          <p className="text-lg font-semibold mb-2">Your cart is empty.</p>
          <p className="text-gray-500 mb-4">You may check out all the available products and buy some in the shop.</p>
          <button className="bg-black text-white px-4 py-2 rounded-md">Return to shop</button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
