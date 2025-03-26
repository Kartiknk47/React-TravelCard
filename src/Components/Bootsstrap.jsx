import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Bootsstrap = ({city}) => {
  return (
    
    <div className="container d-flex mb-5">
        <div className="card">
  <img src={city.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{city.name}</h5>
    <p className="card-text">{city.info}</p>
    <p className="card-text text-primary">Price: {city.price}</p>
    {/* <a href="#" className="btn btn-primary">Add to Cart</a> */}

    <Link to={`/city-details/${city.id}`} className='btn btn-primary'>Go SomeWhere</Link>

  </div>
</div>
</div>

  )
}

export default Bootsstrap