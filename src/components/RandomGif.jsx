import React from 'react'
import useFetch from '../useFetch'


const RandomGif = () => {
    const {gif, rating, api_fetch} = useFetch()

    return (
        <div className="container" >
            <h2>This GIF is Rated: {rating}</h2>  
            <img width="500" src={gif} alt="random gif" />
            <button onClick={() => api_fetch()} >New Random Gif</button>
        </div>
    )
}

export default RandomGif
