
interface PropertyPageProps {
    params: {
        id: string;
    };
    searchParams: {
        [key: string]: string;
    };
}

const PropertyPage = ({ params, searchParams }: PropertyPageProps) => {
    return (
        <div>
            Property Page {params.id}
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