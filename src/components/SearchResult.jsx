import React, { useContext, useEffect, useState } from 'react'

import { fetchYoutubeData } from '../utils/api'
import { Context } from '../context/contextApi'
import { useParams } from 'react-router-dom';
import LeftNav from './LeftNav';
import SearchResultVideos from './SearchResultVideos';

const SearchResult = () => {

  const {setLoading} = useContext(Context);
  const {searchQuery} = useParams();

  const [searchResult, setSearchResult] = useState(null);

  useEffect(()=>{
    document.getElementById('root').classList.remove('custom-h')

    fetchSearchedContent()
  },[searchQuery]);

  const fetchSearchedContent = () => {
    setLoading(true);
    fetchYoutubeData(`search/?q=${searchQuery}`).then(data=>{
      console.log('search page called')
      console.log(data?.contents);
      setSearchResult(data?.contents);
      setLoading(false)
    })
  }


  return (
    <div className="flex flex-row h-[90vh]">
            <LeftNav />
            <div className="grow w-[calc(100%-245px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {searchResult?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideos
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
  )
}

export default SearchResult