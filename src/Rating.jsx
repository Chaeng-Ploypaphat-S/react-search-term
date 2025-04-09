import React, {useState} from 'react'
import {IoIosStar, IoIosStarOutline} from 'react-icons/io'

function Rating(props) {
    // useState is a Hook that allows you to add 
    // React state to function components.
    const [rating, setRating] = useState(props.rating)
    return (
        <div className="rating" style={styles.starStyle}>
            <h1>Rating:{rating}</h1>
            {rating >= 1 ? <IoIosStar onClick={() => setRating(1)} /> : <IoIosStarOutline onClick={()=> setRating(1)}/>}
            {rating >= 2 ? <IoIosStar onClick={() => setRating(2)} /> : <IoIosStarOutline onClick={()=> setRating(2)}/>}
            {rating >= 3 ? <IoIosStar onClick={() => setRating(3)} /> : <IoIosStarOutline onClick={()=> setRating(3)}/>}
            {rating >= 4 ? <IoIosStar onClick={() => setRating(4)} /> : <IoIosStarOutline onClick={()=> setRating(4)}/>}
            {rating >= 5 ? <IoIosStar onClick={() => setRating(5)} /> : <IoIosStarOutline onClick={()=> setRating(5)}/>}
            <span>{props.numOfReviews}</span>
        </div>
    )
}

export default Rating

const styles = {
    rating: {
        alignItems: 'center',
        width: '200px',
        margin: '0 auto'
    },
    starStyle: {
        color: 'orange',
    }
}