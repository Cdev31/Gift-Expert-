



export const ImageCard = ( { data } )=>{
   
    return (
        <div className="flex flex-col p-1 gap-1 rounded-md border-b-2 border-black/20 hover:scale-[1.02] duration-700" >
           <div className="overflow-y-auto">
                <figure className="h-60 ">
                    <img className="w-full rounded-md h-full" src={ data?.url } />
                </figure>
                <h2 className="text-xl font-bold" >{ data?.title }</h2>
           </div>
        </div>
    )
}