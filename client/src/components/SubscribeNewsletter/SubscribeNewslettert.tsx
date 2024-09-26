


const SubscribeNewsletter = () => {
  return (
    <div className="flex flex-col items-center py-24 mt-10 bg-gray-100">
      <h2 className="text-4xl font-normal mb-2 text-gray-800">
        Subscribe Newsletter
      </h2>
      
      <p className="text-gray-500 mb-6 text-center">
        Sign up to our Newsletter and get the discount code.
      </p>

      <div className="flex w-full justify-center gap-3">
        <input
          type="email"
          placeholder="Your email address..."
          className="w-[500px] p-3   border-black border-[2px] focus:outline-none focus:border-gray-400"
        />
        <button className="flex items-center justify-center px-10 bg-black text-white font-semibold text-sm  hover:bg-gray-900">
         SUBCRIBE
         
        </button>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
