import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Pulse', 
    keywords: 'Property, Real Estate, Buy, Sell, Rent, Invest, Property Pulse',
    description: 'Find the perfect rental property, buy or sell your home, or invest in real estate with Property Pulse. We are your property marketplace for all things real estate.'
};

const MainLayout = ({ children }) => {
    return ( <html>
        <body>
            <main>
                { children}
            </main>
        </body>
    </html> );
}
 
export default MainLayout;