import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
    try {
        await connectDB();

        const property = await Property.findById(params.id);
        
        if (!property) {
            return new Response(JSON.stringify({ message: 'Property not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        
        return new Response(JSON.stringify(property), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching properties:', error);
        return new Response(JSON.stringify({ message: 'Error fetching properties' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};