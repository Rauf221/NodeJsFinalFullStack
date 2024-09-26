import type { Metadata } from "next";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import "./globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import { FavoritesProvider } from "@/context/FavoritesContext";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
          <AuthContextProvider>
          <FavoritesProvider  >
            {children}
         
        </FavoritesProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
