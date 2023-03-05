import React from 'react'
import StarRating from './StarRating'

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
        {/* Bootstrap for card styling, 3 cards per row */}
        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Patrick</span>
                <span><StarRating rating={3}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">Try their moscow mule!</p>
            </div>
        </div>

        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Wil</span>
                <span><StarRating rating={4}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">cheap pitchers during happy hour</p>
            </div>
        </div>

        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>Amy</span>
                <span><StarRating rating={4}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">Decent food, cool art</p>
            </div>
        </div>

        <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
            <div className="card-header d-flex justify-content-between">
                <span>JT</span>
                <span><StarRating rating={3}/></span>
            </div>
            <div className="card-body">
                <p className="card-text">good service. back patio has lots of tables and heaters for when it's cold</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews