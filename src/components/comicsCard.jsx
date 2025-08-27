import React from 'react'

const comicsCard = () => {
  const { title, src } = comic;
  return (
    <div className="col-16">
      <div className="comic-card">
        <img src={thumb} alt={title} />
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default comicsCard
