import React from 'react'
import { works } from '../works/worksdata'

const Works = () => {
  return (
    <div className='flex flex-col justify-center' style={{height: '100%'}}>
      <div id='works'>
        <p>Here are some projects I've worked on lately.</p>
      </div>

      <div className='flex flex-col md:flex-row gap-10 mt-5'>
          {works.map((work) => (
            <div key={work.title} className='mb-4'>
              <a href={work.link}>
                <img
                  className='w-64 h-40 object-cover rounded-md border border-gray-200'
                  src={`/${work.imageSource}`}
                  alt={work.title}
                />
              </a>

              <div>
                <p className='mt-2 font-semibold'>{work.title}</p>

                <div className='mt-2'>
                  <p className='text-xs italic'>{work.date}</p>
                  <p className='text-xs text-wrap w-64'>{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    
  )
}

export default Works
