import React,{useState, useEffect} from 'react'
import sanityClient from '../client'
const Fiction = () => {

  const [fiction, setFiction] = useState(null)
  useEffect(() => {
 
    sanityClient.fetch(`*[_type == 'fiction'] {body, Description, publishedAt, name, author, 'image': image.asset->url, file}`).then((data) => setFiction(data)).catch(console.error)
   },[]) 
  return (
    <div>
      {fiction && fiction.map((fiction, index) => (
        <div key={fiction.author} className='gap-4 p-4'>
          <p className='font-bold'> Title:{fiction.name}</p>
      
          <p className='font-bold'> Author: {fiction.author}</p>
          <p className='font-bold'>Description: {fiction.Description}</p>
          <p>{fiction.body}</p>
         
          <p className='font-bold '> Date of publication: {fiction.publishedAt}</p>
        
        </div>
      ))} 
    </div>
  )
}

export default Fiction