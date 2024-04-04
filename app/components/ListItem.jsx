import React from 'react'
import test from './../dataset.json'
import Cards from './Cards'
const ListItem = () => {
  return (
    <div className='grid grid-cols-3 p-5 gap-10'>
        {test.map((te)=>(
            <Cards img={te.imgUrl} name={te.name} desc={te.desc} />
        ))}
    </div>
  )
}

export default ListItem