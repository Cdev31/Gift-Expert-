

export const getGifts = async ( category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=96KQWxIoq7oRvx5MpkrONFUsDlv9Z2q1&q=${category}&limit=10`
    const res = await fetch( url )
    const { data } = await res.json()
   
    const gifs = data?.map( (img)=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) )

    return gifs
}