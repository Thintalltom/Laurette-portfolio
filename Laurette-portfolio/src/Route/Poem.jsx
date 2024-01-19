import React, {useState, useEffect} from 'react'
import sanityClient from '../client'

const Poem = () => {
  const [poem, setPoem] = useState(null)
 const [loading, setLoading] = useState(true)
useEffect(() => {
 
   sanityClient.fetch(`*[_type == 'poem'] {body, Description, publishedAt, name, author}`) .then((data) => {
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
      {loading && <div className='flex justify-center items-center h-[100vh]'> <p>Loading...</p> </div>}
      {!loading &&
        poem && poem.map((poem, index) => (
        <div key={index} className='gap-4 p-4 text-white'>
          <p className='font-light'> Title: {poem.name}</p>
          <p className='font-light'> Author: {poem.author}</p>
          <p className='font-light'>Description: {poem.Description}</p>
          <p className='font-light leading-loose text-sm '>{poem.body}</p>
          <p className='font-light leading-loose text-xs '>  Date of publication: {formatDate(poem.publishedAt)}</p>
        </div>
      ))} 
      </div>
    </div>
  )
}

export default Poem