import React, {useState, useEffect} from 'react'
import sanityClient from '../client'
import { Link } from 'react-router-dom'

const Poem = () => {
  const [poem, setPoem] = useState(null)
 const [loading, setLoading] = useState(true)
useEffect(() => {
 
   sanityClient.fetch(`*[_type == 'poem'] {body, Description, publishedAt, name, author, _id, 'image': image.asset->url }`) .then((data) => {
    setPoem(data);
    setLoading(false); // Set loading to false once data is fetched
  }).catch(console.error)
  },[]) 

 

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div>
      {loading && <div className='flex justify-center items-center h-[100vh]'> <p>Loading...</p> </div>}
      {!loading && (
    <div className="grid place-items-center lg:grid-cols-3 p-[40px] xs:grid-cols-1 justify-center lg:h-full xs:h-full gap-[30px] mt-[20px]">
    
    {!poem || poem.length === 0 ? (
        <div className='text-red-500'>No content yet</div>
      ) : (
      poem.map((fiction, index) => (
        <div className='border-[0.5px] shadow-md xs:w-[250px] text-black h-[350px] rounded sm:w-[200px] lg:w-[250px]' key={index}>
          <div key={fiction.author} className='gap-[5px] p-4 text-[10px] flex justify-center items-center flex-col'>
            <img src={fiction.image} className='min-w-[50px] h-[200px]' alt={`Cover for ${fiction.name}`} />
            <p> Author: {fiction.author}</p>
            <p> Title:  {fiction.name}</p>
            <Link to={`/details/${fiction._id}`}>
            <button className=' text-white bg-zinc-950 p-[10px] rounded-[5px] border-[0.5px]'>
                Read More
            </button>
            </Link>
            <p> Date of publication: {formatDate(fiction.publishedAt)}</p>
          </div>
        </div>
      )
      ))}
  </div>
)}

  
        
    </div>
  )
}
export default Poem