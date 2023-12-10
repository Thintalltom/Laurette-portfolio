import React, {useState} from 'react'

const Experience = () => {
    

    const info = [
        {
            year:'January 2018 - july 2019',
            company: 'Emirate Publisher',
            post: 'Creative Writer'
        },
        {
            year:'October 2019 - Nov 2021',
            company: 'Top Radio 90.0 FM',
            post: 'Intern'
        },
        {
            year:'October 2019 - January 2023',
            company: 'Emirate Publisher',
            post: 'Editor'
        },
        {
            year:'January 2014 - January 2023',
            company: 'BizBen college',
            post: 'Head Teacher'
        },
        {
            year:'December 2022 - Present',
            company: 'McLaureate Press',
            post: 'Founder/Publisher'
        }
    ]
  return (
    <div className='lg:mt-[15rem] sm:mt-[10rem] xs:mt-[5rem]'>
        <div className='flex sm:flex-col xs:flex-col lg:flex-row xl:flex-row gap-[40px]'>
        <p className='text-center sm:text-5xl xs:text-5xl lg:text-9xl text-zinc-800 font-light'>EXPERIENCE</p>
        <div>
            {info.map((info) => (
                <div className='p-4 font-extralight text-zinc-300'>
                   <p>{info.year} ------ {info.company} ----- {info.post}</p> 
                  
                    </div>
            ))}
        </div>
        </div>

    </div>
  )
}

export default Experience