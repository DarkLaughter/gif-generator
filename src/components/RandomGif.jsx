import React from 'react'
import useFetch from '../useFetch'


const RandomGif = () => {
    const {gif, rating, api_fetch} = useFetch()

    return (
        <div className="container" >
            <h1>Random Gif Rated: {rating}</h1>  
            <img width="500" src={gif} alt="random gif" />
            <h1>Rating: {rating} </h1>
            <button onClick={() => api_fetch()} >New Random Gif</button>
        </div>
    )
}

export default RandomGif
