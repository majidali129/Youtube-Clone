import React, { useEffect } from 'react'
import VideoLength from '../shared/VideoLength'

const VideoCard = ({video}) => {
  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')
  },[])
  return (
    <div className='flex flex-col mb-6'>
      <div className="relative h-50 md:h-46 md:rounded-xl overflow-hidden">
        <img src={video?.thumbnails?.[0]?.url} className='w-full h-full object-cover' alt="" />
        {
          video.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )
        }
      </div>
    </div>
  )
}

export default VideoCard