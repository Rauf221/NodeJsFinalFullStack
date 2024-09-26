"use client"

import AutumnCollections from "@/components/AutmnCollections/AutumnCollections";
import CustumersReview from "@/components/CustumersRewiev/Customers";
import FeaturedProducts from "@/components/FeaturedProducts/Featured";
import StoreFinder from "@/components/FindShops/FindShops";
import FollowUsInstagram from "@/components/FollowUsOnInstagram/FollowUsCard";
import PopularCategories from "@/components/Popular Categories/PopularCatacories";
import JournalCards from "@/components/ReadJournal/ReadJournalComponent";
import ReadJournalCard from "@/components/ReadJournal/ReadJurnalContext";
import TwoCardSection from "@/components/Section-6-2Card/2-card";
import Section_2 from "@/components/Section_2-3_cards/Section_2Card";
import Slider from "@/components/SwiperForSection_1/Slider"

import TrendyCollectionSlider from "@/components/Trendy Collection/TrendyCollection";


export default function Home () { 
    return (
        <> 
        <div className=" mx-auto">
            <div className="Slider container h-[600px] mx-auto">
              <Slider/>
            </div>
         {/* Section 2
          */}
            <div className="section_2 container h-[400px] mx-auto">
                <Section_2/>
            </div>
           {/* Popular Catacories */}
           <div className="Section_3 container h-[400px] mx-auto">
             <PopularCategories/>
           </div>
           <div className="Section_4 container h-[600px] mx-auto">
              <TrendyCollectionSlider/>
           </div>
           <div className=" h-[150px] mt-20 mb-10 mx-auto">
             <StoreFinder/>
           </div>
           <div className=" Section_5 container h-[600px] mx-auto">
            <AutumnCollections/>
           </div>
           <div className="Section_6 container h-[400px] mt-10 mx-auto">
             <TwoCardSection/>
           </div>
           <div className="Section_7 continer mt-20 h-[600px] mx-auto ">
                <TrendyCollectionSlider />
           </div>
           <div className="bg-pink-100 h-[400px] w-full justify-center items-center flex">
           <div className="container">
           <CustumersReview/>
           </div>
           </div>
           <div className="container mx-auto h-[400px] mt-20"> 
            <JournalCards/>
           </div>
           <div className=" container mx-auto h-[400px] mt-20 flex justify-center ">
              <FollowUsInstagram/>
           </div>
        </div>
        </>
    )
}