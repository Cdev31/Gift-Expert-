import { ImageCard } from "./ImageCard"
import { useFetchGifs } from "../hooks/useFetchGifs"



export const GifGrid = ({ category })=>{

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
        {
            isLoading === true 
            ? <div className="text-3xl animate-bounce font-bold flex justify-center mt-56">
                <p className="bg-gradient-to-br from-blue-800 to-red-900 rounded-md text-white p-1 m-1" > Cargando...</p>
            </div>
            : (
                <div className="self-center flex flex-col ">
                    <h2 className="m-2 p-1 text-2xl font-bold rounded-md text-center bg-gradient-to-br from-red-800 to-blue-900 text-white ">Coincidencias con: { category }</h2>
                    <div className="justify-between m-1 p-1 h-[35rem] overflow-y-auto flex flex-wrap">
                        {
                            images?.map(
                                ( data )=> <ImageCard key={data?.id}  data={data}/>
                            )
                        }
                </div>
                </div>
            )
        }
        </>
    )
}