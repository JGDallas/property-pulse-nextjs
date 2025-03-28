import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async () => {
    try {
        await connectDB();
        const properties = await Property.find({});
        return new Response(JSON.stringify(properties), {
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