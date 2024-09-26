

export default function TwoCardSection() {
  const cards = [
    {
      image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_4.jpg?v=1710149492&width=1340", 
      tag: "Catch the highlight in the roof  ",
      title: "Just Launched Desk The Halls",
      buttonText: "SHOP NOW",
    },
   
    {
      image: "https://demo-alukas.myshopify.com/cdn/shop/files/alk1_5.jpg?v=1710149492&width=1340", 
      tag: "Pasha de Cartiner Collection",
      title: "Jewelry & Charm Rings",
      buttonText: "SHOP NOW",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative w-full h-[420px] bg-cover bg-center  overflow-hidden"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          {/* Overlay for the text content */}
          <div className="absolute  top-10 flex items-center  justify-start pl-6">
            <div className="text-left text-black p-8">
             
              <h3 className="text-3xl font-normal  mb-1 leading-snug w-[250px]">
                {card.title}
              </h3>
              <p className="text-md   tracking-widest mb-6">
                {card.tag}
              </p>
              <button className="text-md  font-normal underline tracking-wide">
                {card.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
