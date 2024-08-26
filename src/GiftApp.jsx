import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";




export const GiftApp = ()=>{

    const [ categories, setCategories ] =  useState([ 'One Piece' ]);

    const onAddCategory = ( newCategory )=>{
        if ( categories.includes( newCategory ) ) return;
        setCategories( [ ...categories, newCategory ] )
    }
 
    return (
        <main className="flex flex-col">
         <h2 className="text-4xl font-bold text-center p-1 h-20 pt-5 bg-gradient-to-br from-blue-950 to-red-800
          text-white ">
            Gift Expert App
        </h2>
         <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(
                    ( category )=> <GifGrid key={category} category={category}/>
                )
            }
        </main>
    )
}