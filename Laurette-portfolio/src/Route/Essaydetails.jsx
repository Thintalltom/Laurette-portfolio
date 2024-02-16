import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
const Essaydetails = () => {
    const [essay, setEssay] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'essay' && _id == '${id}'][0] {
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
                setEssay(data);
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
                <p className='text-center text-2xl font-bold'>{essay.name}</p>
                <div className='flex justify-center items-center bg-white h-[20rem]'>
                <img src={essay.image} className='w-[200px]' />
                </div>
                <div className='mt-4 text-sm'>
                        {essay.body.split('\n').map((paragraph, index) => (
                            <p key={index} className='mb-2 leading-[35px] px-4 lg:px-40'>{paragraph}</p>
                        ))}
                    </div>
               <p className='mt-4 text-xs  px-4 lg:px-40'>Author: {essay.author}</p>
               <p  className='mt-4 text-xs  px-4 lg:px-40'>Date of Publication: {formatDate(essay.publishedAt)} </p>
            </div>
        )}
    </div>

    )
}

export default Essaydetails 