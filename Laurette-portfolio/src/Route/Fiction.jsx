import React,{useState, useEffect} from 'react'
import sanityClient from '../client'
const Fiction = () => {

  const [fiction, setFiction] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
 
    sanityClient.fetch(`*[_type == 'fiction'] {body, Description, publishedAt, name, author, 'image': image.asset->url, 'fileUrl': file.asset->url}`)  .then((data) => {
      setFiction(data);
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
      <div className='flex xs:justify-center  xs:items-center  lg:flex-row gap-[20px] sm:flex-col xs:flex-col   xxl:flex-row mt-[50px]'>
      {!loading &&
        fiction &&
        fiction.map((fiction, index) => (
          <div className='bg-zinc-300 xs:w-[350px] sm:w-[200px] lg:w-[400px]'>
          <div key={fiction.author} className='gap-4 p-4 flex justify-center items-center flex-col'>
            <p > Title:  {fiction.name}</p>
            <img src={fiction.image} className='w-[200px]' alt={`Cover for ${fiction.name}`} />
            <p > Author: {fiction.author}</p>
            <p className='text-center'>Description: {fiction.Description}</p>
            <p className='text-center'>{fiction.body}</p>
            <button className='bg-zinc-950 p-[10px] rounded-[5px]'>
              <a href={fiction.fileUrl} target="_blank" download className='cursor-pointer text-white'>
                Download File
              </a>
            </button>
            <p> Date of publication: {formatDate(fiction.publishedAt)}</p>
          </div>
          </div>
        ))
        }
           </div>
    </div>
  )
}

export default Fiction