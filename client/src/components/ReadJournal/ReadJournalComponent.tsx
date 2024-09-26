import React from 'react';
import ReadJournalCard from './ReadJurnalContext';

const JournalCards = () => {
    return (
        <div className="flex flex-wrap justify-around">
            <ReadJournalCard 
                image="https://demo-alukas.myshopify.com/cdn/shop/articles/3.jpg?v=1711695248&width=533"
                date="Mar 06 2024"
                desc="Selective Styles Help your look"
            />
            <ReadJournalCard 
                image="https://demo-alukas.myshopify.com/cdn/shop/articles/2.jpg?v=1711695314&width=533"
                date="Mar 06 2024"
                desc="How to Style a Quiff"
            />
            <ReadJournalCard 
                image="https://demo-alukas.myshopify.com/cdn/shop/articles/1.jpg?v=1711695328&width=533"
                date="Mar 06 2024"
                desc="Christmas Gift Guide"
            />
        </div>
    );
};

export default JournalCards;
