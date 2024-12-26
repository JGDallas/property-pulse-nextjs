'use client';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';


const PropertyPage = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    return <div>
        Property Page: You are on page {params.id} <br/>
        { searchParams.get('name')}
        <br/>
        You are on this path: {pathname}
        </div>;
};
 
export default PropertyPage;