import React from 'react'

const Card = ({character = ""}) => {

  const {name,image,status,species} = character;
  return (
    <div className="col-md-3 mb-2">
      <div className="color-card card text-bg mb-3">
          <img
            src={image}
            alt={`imagen-${name}`} 
            className="card-img-top"
            />
          <div className="card-body">
            <h5 className="card-text">{name}</h5>
            <p className='card-text'>{species}</p>
            <p className='card-text'>{status}</p>
          </div>
      </div>

</div>
  )
}

export default Card
