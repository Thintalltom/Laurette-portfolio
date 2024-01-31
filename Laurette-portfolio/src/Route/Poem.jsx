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
      <div>
      {loading && <div className='flex justify-center items-center h-[100vh] text-black'> <p>Loading...</p> </div>}
      <div className="grid place-items-center lg:grid-cols-3 p-[40px] xs:grid-cols-1 justify-center lg:h-full xs:h-full gap-[30px] mt-[20px]">
     {!loading &&
          poem &&
          poem.map((essay, index) => (
      <div key={index} className='border-[0.5px] shadow-md xs:w-[250px] text-black h-[350px] flex flex-col items-center rounded sm:w-[200px] lg:w-[250px]'>
        <img src={essay.image} className='min-w-[100px] max-h-[200px]' alt={`Cover for ${essay.name}`} />
       <p>  {essay.author}</p>
       <p>{essay.name}</p>
       <p>{essay.Description}</p>
       <Link to={`/details/${essay._id}`}>
          <button className="bg-zinc-900 text-white  xxs:w-[200px] h-[50px] rounded-[10px] text-sm  hover:shadow-md shadow-sm  xs:w-[100px] lg:w-[120px] p-[2px] mt-4 ">
            View details
          </button>
        </Link>
      </div>
     ))}

      </div>
      </div>
    </div>
  )
}

export default Poem