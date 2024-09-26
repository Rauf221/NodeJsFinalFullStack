"use client"
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { FaTag, FaStar, FaRegHeart } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LiaSyncAltSolid } from 'react-icons/lia';
import { IoSearchOutline } from 'react-icons/io5';
import { useFavorites } from '../../context/FavoritesContext';
import LoginModal from '../modal/LoginRegister';

interface Product {
  id: number;
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
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-2xl bg-white h-10 w-10 flex items-center rounded-full justify-center text-black hover:text-white hover:bg-black transition-colors duration-300 "
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);


const TrendyCollectionSlider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addFavorite } = useFavorites();

   const handleAddToFavorites = (product: Product) => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }

    addFavorite(product);
    alert(`${product.title} has been added to your favorites!`);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
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
  const products: Product[] = [
    {
      id: 1,
      label: 'SUBSCRIPTION',
      title: 'Kalvesna Diamond Twig Ring',
      price: '$129.00',
      oldPrice: '$199.00',
      discount: 34,
      isNew: false,
      isSubscription: true,
      image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1.jpg?v=1709714257&width=533',
      hoverImage: 'https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=533',
      brand: 'BAUBLEBAR',
    },
    {
      id: 2,
      label: 'HOT',
      title: 'Love Both Engagement Ring',
      price: '$119.00',
      oldPrice: '$149.00',
      discount: 20,
      isNew: false,
      isHot: true,
      image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533',
      hoverImage: 'https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533',
      brand: 'ALEXANDER MCQUEEN',
    },
    {
      id: 3,
      label: 'HOT',
      title: 'Reflections Gold Ring',
      price: '$36.00',
      isNew: true,
      discount:34,
      image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_8c609d9c-9745-4ef5-a8fe-9eb9eb9f9f49.jpg?v=1709714785&width=533',
      hoverImage: 'https://demo-alukas.myshopify.com/cdn/shop/files/2_26dd218e-820b-4ef9-8004-c0814492e324.jpg?v=1709714784&width=533',
      brand: 'CHAMPION',
    },
    {
      id: 3,
      label: 'HOT',
      title: 'Reflections Gold Ring',
      price: '$36.00',
      isHot: true,
      discount:20,
      image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_963e4e7a-56e4-41b9-8689-3986eab18154.jpg?v=1709715652&width=533',
      hoverImage: 'https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=533',
      brand: 'CHAMPION',
    },
    {
      id: 3,
      label: 'HOT',
      title: 'Reflections Gold Ring',
      price: '$36.00',
      isHot: true,
      image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_25b90070-b39a-4735-9837-914565b327ca.jpg?v=1709716309&width=533',
      hoverImage: 'https://demo-alukas.myshopify.com/cdn/shop/files/2_3e2a08bc-019d-40a2-912f-2f32cfdb4de5.jpg?v=1709716309&width=533',
      brand: 'CHAMPION',
    },
    {
      id: 3,
      label: 'HOT',
      title: 'Reflections Gold Ring',
      price: '$36.00',
      isHot: false,
      image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_aa77cbf3-5780-442f-941e-cdbaa0c79566.jpg?v=1709716552&width=533',
      hoverImage: 'https://demo-alukas.myshopify.com/cdn/shop/files/3_32f1125a-be25-4db3-965d-29e07f6882ea.jpg?v=1709716552&width=533',
      brand: 'CHAMPION',
    },
    {
      id: 3,
      label: 'HOT',
      title: 'Reflections Gold Ring',
      price: '$36.00',
      isHot: true,
      image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_626ff667-a755-43b2-b293-0a7128079663.jpg?v=1709716632&width=533',
      hoverImage: 'https://demo-alukas.myshopify.com/cdn/shop/files/2_1c1a0442-e26c-4ec7-b202-efa4f1fb2328.jpg?v=1709716632&width=533',
      brand: 'CHAMPION',
    },
    
  ];

  return (
    <div className="container mx-auto px-4">
       <div className='flex justify-center items-center gap-10' >
        <span className= "h-[1px] bg-gray-200 w-[150px]"> </span>
     <h2 className="text-4xl font-semibold text-center mb-4">Trendy Collection</h2>
     <span className= "h-[1px] bg-gray-200 w-[150px]"> </span>
     </div>
      
      <p className="text-center mb-8">Collect your loves with our newest arrivals.</p>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
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
                <div className="absolute top-14 left-8  z-10 bg-blue-500 text-white px-2 py-1 text-xs font-semibold">
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
                <div
                    className="h-9 w-9 bg-white flex justify-center items-center rounded-full hover:bg-black hover:text-white"
                    onClick={() => handleAddToFavorites(product)}
                  >
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
              <button onClick={() => handleAddToCart(product)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <LoginModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
    
  );
  
};

export default TrendyCollectionSlider; 

