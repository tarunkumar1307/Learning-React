import React from 'react'
import { Bookmark } from 'lucide-react'
import amazon from './../assets/amazon.jpg'

const Card = (props) => {
  

  return (
    <div className='card'>
      <div>
        <div className="top">
          <img src={props.logo} alt={props.company} />
          <button>
            Save
            <Bookmark size={18} />
          </button>
        </div>
        <div className="center">
          <h2>{props.company} <span>{props.datePosted}</span></h2>
          <h1>{props.post}</h1>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>${props.pay}/hr</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card