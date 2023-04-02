
import React, {useContext, useEffect, useState} from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import SuggessionVideos from './SuggessionVideos';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";


import { Context } from '../context/contextApi';
import { fetchYoutubeData } from '../utils/api'


const VideoDetails = () => {

  
  const {setLoading} = useContext(Context)
  const {id} = useParams()

  const [videos, setVideos] = useState(null);
  const [relatedData, setRelatedData] = useState(null);

  useEffect(()=>{
    
    document.getElementById('root').classList.add('custom-h');

    fetchVideoDetails()
    fetchRelatedContent()
  },[id])

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchYoutubeData(`video/details/?id=${id}`).then(data=>{
      // console.log(data)
      setVideos(data);
      setLoading(false);
    })
  }

  const fetchRelatedContent = () => {
    setLoading(true);
    fetchYoutubeData(`video/related-contents/?id=${id}`).then(data=>{
      // console.log(data?.contents)
      setRelatedData(data?.contents);
      setLoading(false);
    })
  }



  return (
    <div className="flex md:flex-row justify-center h-[90vh] bg-black">

      <div className="w-full max-w-[1280px] flex flex-col sm:flex-col md:flex-row">

        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 md:overflow-y-auto">
                <div className="h-[200px] md:h-[400px]  lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                              <ReactPlayer
                                  url={`https://www.youtube.com/watch?v=${id}`}
                                  controls
                                  width="100%"
                                  height="100%"
                                  style={{ backgroundColor: "#000000" }}
                                  playing={true}
                                  />
                </div>
              <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                            {videos?.title}
              </div>

              <div className="flex justify-between md:flex-row mt-4">
                            <div className="flex">

                                <div className="flex items-start">

                                    <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                        <img
                                            className="h-full w-full object-cover"
                                            src={videos?.author?.avatar[0]?.url}
                                            alt=''
                                        />
                                    </div>

                                </div>

                                <div className="flex flex-col ml-3">
                                    <div className="text-white text-md font-semibold flex items-center">
                                        {videos?.author?.title}
                                        {videos?.author?.badges[0]?.type ===
                                            "VERIFIED_CHANNEL" && (
                                            <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                                        )}
                                    </div>
                                    <div className="text-white/[0.7] text-sm">
                                        {videos?.author?.stats?.subscribersText}
                                    </div>
                                </div>

                            </div>

                          <div className="flex text-white  mt-4 md:mt-0">
                                              <div className="flex items-center justify-center py-1 px-2 rounded-3xl bg-white/[0.15]">
                                                  <AiOutlineLike className="text-xl text-white mr-2" />
                                                  {`${abbreviateNumber(
                                                      videos?.stats?.views,
                                                      2
                                                  )} Likes`}
                                              </div>
                                              <div className="flex items-center justify-center py-1 px-2 rounded-3xl bg-white/[0.15] ml-2 md:ml-4 ">
                                                  {`${abbreviateNumber(
                                                      videos?.stats?.views,
                                                      2
                                                  )} Views`}
                                              </div>
                          </div>
              </div>


      </div>

      {/* <h2 className='text-white text-xl'>Majid Ali</h2> */}

      <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px] ">
        {
          relatedData?.map((item, index)=>{
            if(item.type !== 'video') return false;
            return (
              <SuggessionVideos
              key={index}
              video={item?.video}
              />
            )
          })
        }
      </div> 
    </div>
    </div>
  )
}

export default VideoDetails;