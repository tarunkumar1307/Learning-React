import React from 'react'
import RightCardContent from './rightcardcontent'


const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden rounded-[30px] relative shrink-0'>
        <img className='h-full w-full object-cover' 
        src={props.img}
        alt="Image 1" />
        <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard