import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";

import SubscribeNewsletter from "@/components/SubscribeNewsletter/SubscribeNewslettert";
import Home from "@/pages/Home";

export default function HomePage (){
    return (
    <>
      <Navbar/>
      <Home/>
      <SubscribeNewsletter/>
      <Footer/>
    </>
    )
}