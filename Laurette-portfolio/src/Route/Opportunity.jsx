import React,{useState, useEffect} from 'react'
import sanityClient from '../client'
const Opportunity = () => {
  const [opportunity, setOpportunity] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
 
      sanityClient.fetch(`*[_type == 'opportunity'] {name, Description, Link, publishedAt}`) .then((data) => {
       setOpportunity(data);
       setLoading(false); // Set loading to false once data is fetched
     }).catch(console.error)
     },[]) 
    return (
    <div className='p-[20px]'>
  
      {loading && <div className='flex justify-center items-center h-[100vh] text-black font-light'> <p>Loading...</p> </div>}
        {!loading
        && (
          <div>
            {!opportunity || opportunity.length === 0 ? (
              <div className='text-red-500'>No content yet </div>
            ) : ( 
              opportunity.map((opportunity, index) => (
                <div key={index} className='gap-4 p-4 text-black'>
                
                    <p className='font-light'><a className='underline' href={opportunity.Link}> {opportunity.name}</a></p>
                    <p className='font-light'>{opportunity.Description}</p>
                </div>
            )))}
            </div>
  )}
  </div>
    )}

export default Opportunity