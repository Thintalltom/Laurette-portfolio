import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from '../client';

const FictionDetails = () => {
    const [fiction, setFiction] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'fiction' && _id == '${id}'][0] {
            _id, 
            body, 
            Description, 
            publishedAt, 
            name, 
            author, 
            'image': image.asset->url, 
            'fileUrl': file.asset->url
          }`)
            .then((data) => {
                setFiction(data);
                console.log(data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(console.error);
    }, [id]); // Fetch data whenever the ID changes
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

    return (
        <div>
        {loading ? (
            <div className="flex justify-center items-center h-[100vh]">
                <p>Loading...</p>
            </div>
        ) : (
            <div className='p-4 mt-4 '>
                <p className='text-center text-2xl font-bold'>{fiction.name}</p>
                <div className='flex justify-center items-center bg-white h-[20rem]'>
                <img src={fiction.image} className='w-[200px]' />
                </div>
                <div className='mt-4 text-sm'>
                        {fiction.body.split('\n').map((paragraph, index) => (
                            <p key={index} className='mb-2 leading-[35px] px-4 lg:px-40'>{paragraph}</p>
                        ))}
                    </div>
               <p className='mt-4 text-xs'>Author: {fiction.author}</p>
               <p  className='mt-4 text-xs'>Date of Publication: {formatDate(fiction.publishedAt)} </p>
            </div>
        )}
    </div>
    )

}
export default FictionDetails 