import React, { useState} from 'react'
import useFetch from '../useFetch'


const SearchGif = () => {
    const [tag, setTag] = useState('random')
    const {gif, rating, api_fetch} = useFetch(tag)

    return (
        <div>
            <div className="container" >
            <h1>{tag} Gif Rated: {rating}</h1>  
            <img width="500" src={gif} alt="random gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} ></input>
            <h1>Rating: {rating} </h1>
            <button onClick={() => api_fetch(tag)} >New {tag} Gif</button>
        </div>
        </div>
    )
}

export default SearchGif
