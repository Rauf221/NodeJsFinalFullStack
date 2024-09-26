import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import SubscribeNewsletter from "@/components/SubscribeNewsletter/SubscribeNewslettert";
import Wishlist from "@/components/Wishlist/wishlist";

export default function WishlistPage() {
  return( 
<>
  <Navbar/>
  <Wishlist />
  <SubscribeNewsletter/>
  <Footer/>
</>

  );
}
