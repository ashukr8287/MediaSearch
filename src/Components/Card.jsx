import React from 'react'
import { fetchPhoto, fetchVideo } from '../Services/MediaApi'

function Card() {
  return (
    <div>


        <button onClick={async ()=>{
            const data= await fetchPhoto("cat")
            console.log(data)
        }}>getdata</button>
    </div>
  )
}

export default Card