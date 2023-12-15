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

 

 
  
  return (
    <div>
      <div>
      {loading && <div className='flex justify-center items-center h-[100vh]'> <p>Loading...</p> </div>}
      {!loading &&
        poem && poem.map((poem, index) => (
        <div key={poem.author} className='gap-4 p-4'>
          <p className='font-bold'> Title:{poem.name}</p>
          <p className='font-bold'> Author: {poem.author}</p>
          <p className='font-bold'>Description: {poem.Description}</p>
          <p>{poem.body}</p>
          <p className='font-bold '> Date of publication: {poem.publishedAt}</p>
        </div>
      ))} 
      </div>
    </div>
  )
}

export default Poem