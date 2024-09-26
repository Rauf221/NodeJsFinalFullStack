"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories = [
  { title: "NECKLACES", image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t1.jpg?v=1710145653&width=1500", href: "/necklaces" },
  { title: "RINGS", image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t2.jpg?v=1710145652&width=1500", href: "/rings" },
  { title: "BRACELETS", image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t3.jpg?v=1710145652&width=1500", href: "/bracelets" },
  { title: "EARNINGS", image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t4.jpg?v=1710145652&width=1500", href: "/earnings" },
  { title: "CHARM & DANGLES", image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t5.jpg?v=1710145652&width=1500", href: "/charm-dangles" },
  { title: "GIFT IDEAS", image: "https://demo-alukas.myshopify.com/cdn/shop/files/2_26dd218e-820b-4ef9-8004-c0814492e324.jpg?v=1709714784&width=533", href: "/gift-ideas" },
];

export default function PopularCategories() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="text-3xl font-semibold mb-8">Popular Categories</h2>
      <div className="flex justify-center space-x-8 ">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => router.push(category.href)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-col items-center cursor-pointer transition-transform duration-300"
           
          >
            <div className="w-52 h-52 rounded-full overflow-hidden mb-2 flex flex-col items-center">
              <Image
                src={category.image}
                alt={category.title}
                width={500}
                height={500}
                className="object-cover transition-all duration-500  "
                style={{
                    transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                  }}
              />
              
            </div>
            <div className="flex flex-col group">
  <span className="text-lg font-semibold">{category.title}</span>
  <span className="h-[2px] w-0 group-hover:w-full bg-black transition-all duration-300 ease-in-out"></span>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}
