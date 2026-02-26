import React from 'react'
import RightCard from './rightcard'

const Rightcontent = (props) => {
  return (
    <div id="right" className='h-full p-8 w-2/3 flex flex-nowrap gap-10 overflow-x-auto'>
        {props.users.map((ele, idx) => {
            return <RightCard id={idx} img={ele.img} tag={ele.tag}/>
        })}
    </div>
  )
}

export default Rightcontent