import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import connectDB from "@/config/database";
import Property from "@/models/Property";   
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface PropertyPageProps {


    params: {
        id: string;
    };
    searchParams: {
        [key: string]: string;
    };
}

const PropertyPage = async ({ params, searchParams }: PropertyPageProps) => {
    await connectDB();
    const property = await Property.findById(params.id).lean();

    return (
        <div>
            {property && !Array.isArray(property) ? (
                <>
                    <PropertyHeaderImage image={property.images?.[0]} />
                    <section>
                        <div className="container m-auto py-6 px-6">
                            <Link
                                href="/properties"
                                className="text-blue-500 hover:text-blue-600 flex items-center"
                            >
                                <FaArrowLeft className='mr-2'/>Back to Properties
                            </Link>
                        </div>
                        <section className="bg-blue-50">
                            <div className="container m-auto py-10 px-6">
                                <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                                    <PropertyDetails property={property} />
                                </div>
                            </div>
                        </section>
                    </section>
                </>
            ) : (
                <section>Property not found</section>
            )}
            <div>
                Search Parameters:
                <ul>
                    {Object.entries(searchParams).map(([key,value]) => (
                        <li key={key}>
                            {key}: {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
 
export default PropertyPage;