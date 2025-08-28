import React from 'react'

const ComicsCard = (props) => {
  return (
    <div className="col-16">
      <div className="comic-card">
        <img src={props.src} alt={props.title} />
        <h4>{props.title}</h4>
      </div>
    </div>
  )
}

export default ComicsCard
