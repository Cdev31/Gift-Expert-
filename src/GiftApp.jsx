import { useState } from "react"
import { AddCategory } from "./componets/AddCategory";




export const GiftApp = ()=>{

    const [ categories, setCategories ] =  useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory )=>{
        setCategories( [ ...categories, newCategory ] )
    }
 
    return (
        <main className="flex flex-col w-full justify-center">
         <h2 className="text-4xl font-bold text-center p-1 h-20 pt-5 bg-gradient-to-br from-blue-950 to-blue-800
          text-white ">
            Gift Expert App
        </h2>
         <AddCategory onAddCategory={onAddCategory} />
         <ol className="self-center">
            {
                categories.map(
                    ( category )=> <li key={ category } >{ category }</li>
                )
            }
         </ol>
        </main>
    )
}