import { FC } from 'react';
import { FiHome } from 'react-icons/fi'; 

const StoreFinder: FC = () => {
  return (
    <div className="bg-pink-100">
      <div className="max-w-[1400px] mx-auto px-4 py-8 flex justify-center gap-5 items-center">
        <div className="flex items-center space-x-2 text-3xl font-normal text-gray-700">
          <FiHome />
          <span>Find Shops Near You</span>
        </div>
        <button className="border-2 border-black px-4 py-2 text-black hover:bg-black hover:text-white">
          Find Store
        </button>
      </div>
    </div>
  );
};

export default StoreFinder;
