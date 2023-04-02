import React, { useEffect } from 'react'
import VideoLength from '../shared/VideoLength'

import {HiCheckCircle} from 'react-icons/hi'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'

const VideoCard = ({video}) => {
  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')
  },[])
  return (
    <Link to={`/video/${video?.videoId}`}>
    <div className='flex flex-col mb-6'>
      <div className="relative h-50 md:h-46 md:rounded-xl overflow-hidden">
        <img src={video?.thumbnails?.[0]?.url} className='w-full h-full object-cover' alt="" />
        {
          video.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )
        }
      </div>
      {/* Channel Avatar */}
      <div className='flex text-white mt-3 mb-1'>  
        <div className="flex items-start ">
          <div className="flex h-8 w-8 rounded-full overflow-hidden">
            <img 
            src={video?.author?.avatar[0]?.url}
            className='w-full h-full object-cover'
            alt="Channel Avatar" />
          </div>
        </div>

      

      {/* Channel/Video Description */}
      <div className='flex flex-col ml-4 overflow-hidden'>
        <div className='text-lg font-bold line-clamp-2 text-white'>
          {video?.title}
        </div>
        <div className='text-[12px] font-semibold mt-3 text-white/[0.6] flex items-center'>
          {video?.author?.title}
          {video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' && 
          <HiCheckCircle 
          className='text-white/[0.6] text-md ml-4'/>
          }
        </div>
        <div className='flex text-[12px] font-semibold text-white/[0.8] truncate overflow-hidden'>
          <span>
            {
              `${abbreviateNumber(
                video?.stats?.views , 2
              )} views`
            }
          </span>
          <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10] mx-1'>
            {/* . */}
            </span>
            <span className='truncate'>
              {video?.publishedTimeText}
          </span>
        </div>
      </div>
      </div>
    </div>
    </Link>

  )
}

export default VideoCard