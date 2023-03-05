import React from 'react'

const StarRating = ({rating}) => {
    const stars = [];
    for (let i=1; i <= 5; i++) {
        if (i <= rating) {
            {/* star icons from https://fontawesome.com/search?q=star&o=r */}
            {/* filled-in star */}
            stars.push(<i class="fa-solid fa-star"></i>)
        }
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            {/* half-full star */}
            stars.push(<i class="fa-solid fa-star-half-stroke"></i>)
        }
        else {
            {/* empty star */}
            stars.push(<i class="fa-regular fa-star"></i>)
        }
    }
    return <>{stars}</>
}

export default StarRating;