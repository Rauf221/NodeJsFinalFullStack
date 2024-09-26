"use client"
import React, { useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import { FaTag, FaStar, FaRegHeart } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LiaSyncAltSolid } from 'react-icons/lia';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';

interface Product {
  _id: number;
  label?: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: number;
  isNew?: boolean;
  isHot?: boolean;
  isSubscription?: boolean;
  image: string;
  hoverImage?: string;
  brand: string;
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-black hover:text-white hover:bg-black transition-colors duration-300 bg-white h-10 w-10 flex items-center rounded-full justify-center"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-2xl bg-white h-10 w-10 flex items-center rounded-full justify-center text-black hover:text-white hover:bg-black transition-colors duration-300"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState('New Arrivals');
  
  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const filteredProducts = products.filter((product) => {
    if (activeTab === 'New Arrivals') return product.isNew;
    if (activeTab === 'Featured') return !product.isNew && !product.isHot;
    if (activeTab === 'Best Seller') return product.isHot;
    return true;
  });

  return (
    <div className="container mx-auto px-4 ">
      <div className='flex justify-center items-center gap-10'>
        <span className="h-[1px] bg-gray-200 w-[150px]"></span>
        <h2 className="text-4xl font-semibold text-center mb-4">Featured Products</h2>
        <span className="h-[1px] bg-gray-200 w-[150px]"></span>
      </div>

      <div className="flex justify-center space-x-8 mb-6">
        <button
          className={`text-lg font-semibold ${activeTab === 'New Arrivals' ? 'text-black underline' : 'text-gray-500'}`}
          onClick={() => setActiveTab('New Arrivals')}
        >
          New Arrivals
        </button>
        <button
          className={`text-lg font-semibold ${activeTab === 'Featured' ? 'text-black underline' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Featured')}
        >
          Featured
        </button>
        <button
          className={`text-lg font-semibold ${activeTab === 'Best Seller' ? 'text-black underline' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Best Seller')}
        >
          Best Seller
        </button>
      </div>

      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <div key={product._id} className="p-4">
            <div className="relative p-4 group transition-all duration-300 ">
              {product.isNew && (
                <div className="absolute top-14 left-8 z-10 bg-blue-600 text-white px-2 py-1 text-xs font-semibold">
                  NEW
                </div>
              )}
              {product.discount && (
                <div className="absolute top-7 left-8 z-10 bg-red-600 text-white px-2 py-1 text-xs font-semibold">
                  -{product.discount}%
                </div>
              )}
              {product.isHot && (
                <div className="absolute top-14 left-8 z-10 bg-blue-500 text-white px-2 py-1 text-xs font-semibold">
                  HOT
                </div>
              )}
              {product.isSubscription && (
                <div className="absolute top-7 left-8 z-10 bg-yellow-500 text-white px-2 py-1 text-xs font-semibold">
                  <FaStar className="inline mr-1" /> SUBSCRIPTION
                </div>
              )}

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover mb-4 transition-opacity duration-300 group-hover:opacity-0"
                />
                {product.hoverImage && (
                  <img
                    src={product.hoverImage}
                    alt={product.title}
                    className="w-full h-72 object-cover mb-4 absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                )}

                <div className="absolute flex justify-center items-center flex-col top-3 right-3 gap-2 transform translate-x-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  <div className="h-9 w-9 bg-white flex justify-center items-center rounded-full hover:bg-black hover:text-white">
                    <FaRegHeart className="text-xl cursor-pointer" />
                  </div>
                  <div className="h-9 w-9 bg-white flex justify-center items-center rounded-full hover:bg-black hover:text-white">
                    <LiaSyncAltSolid className="text-xl font-light cursor-pointer" />
                  </div>
                  <div className="h-9 w-9 bg-white flex justify-center items-center rounded-full hover:bg-black hover:text-white">
                    <IoSearchOutline className="text-xl cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">{product.brand}</h3>
                <p className="text-md font-semibold text-gray-700">{product.title}</p>
                <p className="text-sm text-gray-500 opacity-100 translate-y-2 group-hover:opacity-0 group-hover:translate-y-0 transition-all duration-300">
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 mr-2">{product.oldPrice}</span>
                  )}
                  {product.price}
                </p>
              </div>

              <div className="absolute bottom-2 left-0 right-0 p-2 text-center text-black opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <button className="text-sm font-bold">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
