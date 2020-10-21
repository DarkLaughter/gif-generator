import React, {useState} from 'react'
import SearchGif from './components/SearchGif'
import RandomGif from './components/RandomGif'
import './App.css'


const App = () => {
    const [search, setSearch] = useState(false) 
    const handleClick = () => setSearch(!search)
    const randomButton = <button onClick={handleClick}>Random Pick</button>
    const searchButton = <button onClick={handleClick}>Search in Random</button>



    return (
        <div>
            <h1>Randomize {search ? randomButton : searchButton}</h1>
            <div className="main-container" >
                {search ? <SearchGif/> : <RandomGif/>}
            </div>
        </div>
            
    )
}

export default App
