import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts"




export const useFetchGifs = ( category )=>{

    const [ images, setImages ] = useState([])
    const [ loading, setLoading ] = useState(true)
  
    useEffect(()=>{
        getGifts( category )
        .then(
            ( gifts )=> setImages( gifts )
        )
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }, [])

    return {
        images: images,
        isLoading: loading
    }
}