import Hero from '../components/Hero';
import InfoBoxes from '../components/InfoBoxes';
import HomeProperties from '../components/HomeProperties';
//import connectDb from '@/config/database'

const HomePage = () => {
    // Test that you are able to access the environment variables
    // console.log(process.env.MONGODB_URI);
    // Connect to the database
    // connectDb();
    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
}

export default HomePage;