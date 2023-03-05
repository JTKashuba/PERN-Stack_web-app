import React from 'react'

const StarRating = ({rating}) => {
    const stars = [];
    for (let i=1; i <= 5; i++) {
        if (i <= rating) {
            {/* star icons from https://fontawesome.com/search?q=star&o=r */}
            {/* filled-in star */}
            stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>)
        }
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            {/* half-full star */}
            stars.push(<i key={i} className="fa-solid fa-star-half-stroke text-warning"></i>)
        }
        else {
            {/* empty star */}
            stars.push(<i key={i} className="fa-regular fa-star text-warning"></i>)
        }
    }
    return <>{stars}</>
}

export default StarRating;