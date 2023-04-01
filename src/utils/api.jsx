import axios from "axios"; 



const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
  params: {hl: 'en', gl: 'US'},
  headers: {
    // 'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Key':'9570f93e2cmshbfdb54327c61269p1d0656jsne8d3ef7748e7',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchYoutubeData = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};