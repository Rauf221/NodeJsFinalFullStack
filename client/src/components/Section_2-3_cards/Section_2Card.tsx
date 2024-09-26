"use client";

export default function CardSection() {
  const cards = [
    {
      image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482&width=436", 
      tag: "2024 FASHION",
      title: "Just Launched Desk The Halls",
      buttonText: "Shop Now",
    },
    {
      image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_2.jpg?v=1711684410&width=436", 
      tag: "FLAT DISCOUNT",
      title: "Necklaces & Body Jewels",
      buttonText: "Shop Now",
    },
    {
      image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_3.jpg?v=1711684399&width=436", 
      tag: "NEW COLLECTION",
      title: "Jewelry & Charm Rings",
      buttonText: "Shop Now",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative w-full h-[350px] bg-cover bg-center  overflow-hidden"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="absolute  top-10 flex items-center justify-start pl-6">
            <div className="text-left">
              <p className="text-sm text-white font-semibold tracking-widest mb-2">
                {card.tag}
              </p>
              <h3 className="text-3xl font-normal text-white mb-2 leading-snug w-[250px]">
                {card.title}
              </h3>
              <button className="text-sm text-white font-normal underline tracking-wide">
                {card.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
