import React, {useState} from 'react'
import SearchGif from './components/SearchGif'
import RandomGif from './components/RandomGif'
import './App.css'


const App = () => {
    const [search, setSearch] = useState(false) 
    const handleClick = () => setSearch(!search)
    const randomButton = <button onClick={handleClick}>Get a Random GIF</button>
    const searchButton = <button onClick={handleClick}>Click to Search GIFs</button>



    return (
        <div>
            <h1>
            Click for New Gifs or to Search</h1>
            {search ? randomButton : searchButton}
            <div className="main-container">
                {search ? <SearchGif/> : <RandomGif/>}
            </div>
        </div>
            
    )
}

export default App
