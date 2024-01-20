import React,{useState, useEffect} from 'react'
import  sanityClient  from '../client'
const Essay = () => {
  const [essay, setEssay] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      sanityClient.fetch(`*[_type == 'poem'] {body, Description, publishedAt, name, author}`) .then((data) => {
       console.log(data)
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
     essay
      </div>
    </div>
  )
}

export default Essay