import axios from "axios"
const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY=import.meta.env.VITE_PEXELS_KEY;


export async function  fetchPhoto(query,page=1,per_page=20){
  const result= await  axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
  })
  return result
}

export async function  fetchVideo(query,per_page=20){
  const result= await  axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page},
    headers:{Authorization:PEXELS_KEY}
  })
  return result
}




