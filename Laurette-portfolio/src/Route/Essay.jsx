import {useState, useEffect} from 'react'
import  sanityClient  from '../client'
import { Link } from 'react-router-dom'
const Essay = () => {
  const [essay, setEssay] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      sanityClient.fetch(`*[_type == 'essay'] {_id, body, Description, publishedAt, name, author, 'image': image.asset->url, 'fileUrl': file.asset->url}`) .then((data) => {
       setEssay(data)
       console.log(data)
       setLoading(false); // Set loading to false once data is fetched
     }).catch(console.error)
     },[]) 

     const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

  return (
    <div className='p-4'>
      <p className='text-center'>My latest Essay</p>
        {loading && (
        <div className="flex justify-center items-center h-[100vh]">
          {" "}
          <p>Loading...</p>{" "}
        </div>
      )}
      <div className="grid place-items-center lg:grid-cols-3 p-[40px] xs:grid-cols-1 justify-center lg:h-full xs:h-full gap-[30px] mt-[20px]">
     {!loading &&
          essay &&
          essay.map((essay, index) => (
      <div key={index} className='mt-4 p-4'>
        <img src={essay.image} className='min-w-[50px] max-h-[200px]' alt={`Cover for ${essay.name}`} />
       <p>  {essay.author}</p>
       <p>{essay.name}</p>
       <p>{essay.Description}</p>
       <Link to={`/detail/${essay._id}`}>
          <button className="bg-slate-900 text-white  xxs:w-[200px] h-[50px] rounded-[10px] text-sm  hover:shadow-md shadow-sm  xs:w-[100px] lg:w-[120px] p-[2px] mt-4 ">
            View details
          </button>
        </Link>
      </div>
     ))}

      </div>
    </div>
  )
}

export default Essay