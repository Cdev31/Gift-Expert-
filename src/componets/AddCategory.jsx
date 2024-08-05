import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";



export const AddCategory = ({ onAddCategory })=>{

    const [ newCategory, setNewCategory ] = useState('')

    return (
        <div className="flex flex-col self-center">
            <div className="h-12 flex mt-3">
                <input
                className="focus:outline-none border-2 border-r-0 p-3 font-semibold text-black/60 text-xl
                 rounded-md border-blue-900 h-full"
                 onChange={( event )=>{ setNewCategory( event.target.value )  }} 
                type="text"/>
                <MagnifyingGlassIcon 
                 onClick={ ()=>{ onAddCategory( newCategory ) } }
                className="h-full bg-blue-900 relative right-2 rounded-r-md text-white
                 hover:bg-blue-900/90 cursor-pointer"/>
            </div>
        </div>
    )
}