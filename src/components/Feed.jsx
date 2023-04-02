import React, { useContext } from 'react'

import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from '../components/VideoCard'

const Feed = () => {
  const {Loading , searchResults} = useContext(Context)
  return (
    <div className='flex  h-[90vh]'>
      <LeftNav/>
      <div className='grow h-full w-[calc(100%-245px)] overflow-y-auto bg-black'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-4 gap-6'>
          {
            !Loading && searchResults && (
              searchResults?.map(item=>{
                if(item?.type !== 'video') return false;
                return (
                  <VideoCard 
                  video={item?.video}
                  // key={item?.video?.videoId}
                  />
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Feed