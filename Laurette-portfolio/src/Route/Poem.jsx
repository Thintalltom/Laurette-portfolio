import React, {useState, useEffect} from 'react'
import sanityClient from '../client'

const Poem = () => {
  const [poem, setPoem] = useState(null)
{/* useEffect(() => {
   sanityClient.fetch(`*[_type == 'poem'] {body, Description, publishedAt, name, author}`).then((data) => setPoem(data)).catch(console.error)
  },[]) */}

 

 
  
  return (
    <div>
      <div>
        <p className='text-center p-4 font-extrabold'>Welcome to my poem world</p>
      {/*  {poem && poem.map((poem, index) => (
        <div key={poem.author} className='gap-4 p-4'>
          <p className='font-bold'> Title:{poem.name}</p>
          <p className='font-bols'> Author: {poem.author}</p>
          <p className='font-bold'>Description: {poem.Description}</p>
          <p>{poem.body}</p>
          <p className='font-bold '> Date of publication: {poem.publishedAt}</p>
        </div>
      ))} */} 
      </div>
    </div>
  )
}

export default Poem