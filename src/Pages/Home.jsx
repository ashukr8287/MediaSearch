import React from 'react'
import SearchInput from '../Components/SearchInput'
import { fetchPhoto, fetchVideo } from '../Services/MediaApi'
import FilterButton from '../Components/FilterButton'
import GridLayout from '../Components/GridLayout'
import Card from '../Components/card'

function Home() {
  return (
    <div  className='bg-gray-950 min-h-screen'>
      <SearchInput/>
      <FilterButton/>
      <GridLayout/>
      {/* <Card/> */}

    </div>
  )
}

export default Home