import React, {useState, useEffect} from 'react'
import sanityClient from '../client'
const Publications = () => {
    const [publication, setPublication] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
 
        sanityClient.fetch(`*[_type == 'publications'] {Title, Link, Publisher}`) .then((data) => {
         setPublication(data);
         setLoading(false); // Set loading to false once data is fetched
       }).catch(console.error)
       },[]) 
    
  return (
    <div className='h-full mt-[20px] p-[10px]'>
        <p className='text-black text-2xl font-light'>Latest Publications</p>
        <div>
        {loading && <div className='flex justify-center items-center h-[100vh] text-black font-light'> <p>Loading...</p> </div>}
        {!loading && publication && 
        publication.map((publication, index) => (
        <div key={index} className='gap-4 p-4 text-black'>
        
            <p className='font-light'><a className='underline' href={publication.Link}> {publication.Title}</a> |{publication.Publisher}</p>
        </div>
      ))} 
        </div>
        
        
    </div>
  )
}

export default Publications