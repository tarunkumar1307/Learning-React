import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Pagecontent = (props) => {
  return (
    <div className='flex item-center gap-10 pr-10 pb-5 h-[90vh] '>
        <Leftcontent />
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Pagecontent