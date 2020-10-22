import React, { useState} from 'react'
import useFetch from '../useFetch'


const SearchGif = () => {
    const [tag, setTag] = useState('llamas')
    const {gif, rating, api_fetch} = useFetch(tag)

    return (
            <div className="container" >
            <h2>This {tag} GIF </h2>
            <h2>is Rated {rating}</h2>
            <img width="500" src={gif} alt="random gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} ></input>
            <button onClick={() => api_fetch(tag)} >New {tag} Gif</button>
        </div>
    )
}

export default SearchGif
