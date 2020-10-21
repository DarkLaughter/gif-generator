import {useState, useEffect} from 'react'
import axios from 'axios'

const key = process.env.REACT_APP_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`

const useFetch = (tag) => {
    const [gif, setGif] = useState('')
    const [rating, setRating] = useState('')

    const api_fetch = async (tag) => {
        const { data } = await axios.get(tag ? `${url}$tag=${tag}` : url)
        const {rating} = data.data
        const res = data.data.images.downsized_large.url
        setRating(rating)
        setGif(res)
        

    }
    
    useEffect(() => {

     api_fetch(tag)
    }, [tag])
        

    return {gif, rating, api_fetch}
}

export default useFetch