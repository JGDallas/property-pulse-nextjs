import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Property Pulse', 
    keywords: 'Property, Real Estate, Buy, Sell, Rent, Invest, Property Pulse',
    description: 'Find the perfect rental property, buy or sell your home, or invest in real estate with Property Pulse. We are your property marketplace for all things real estate.'
};

import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
 
export default MainLayout;