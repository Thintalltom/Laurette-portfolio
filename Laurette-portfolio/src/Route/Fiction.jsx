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
          <img src={fiction.image} className='w-[200px]' />
          <p className='font-bold'> Author: {fiction.author}</p>
          <p className='font-bold'>Description: {fiction.Description}</p>
          <p>{fiction.body}</p>
          <button className='bg-zinc-950 p-[10px] rounded-[5px]'>
          <a href={fiction.file.asset._ref} download className='cursor-pointer text-white'>
               Download File
              </a>
              </button>
          <p className='font-bold '> Date of publication: {fiction.publishedAt}</p>
        
        </div>
      ))} 
    </div>
  )
}

export default Fiction