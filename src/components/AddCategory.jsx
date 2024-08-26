import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";



export const AddCategory = ({ onAddCategory })=>{

    const [ newCategory, setNewCategory ] = useState('')

    return (
        <form 
        onSubmit={ (event)=> event.preventDefault() }
        className="flex flex-col self-center">
            <div className="h-12 flex mt-3">
                <input
                className="focus:outline-none border-2 border-r-0 p-3 font-semibold text-black/60 text-xl
                 rounded-md border-blue-900 h-full"
                 onChange={( event )=>{ 
                    if ( event.target.value.trim().length <=1 ) return;
                    setNewCategory( event.target.value )  }} 
                type="text"/>
                <MagnifyingGlassIcon 
                 onClick={ ()=>{ onAddCategory( newCategory ) } }
                className="h-full bg-gradient-to-br from-blue-950 to-red-800 relative right-2 rounded-r-md text-white
                 hover:bg-blue-900/90 cursor-pointer"/>
            </div>
        </form>
    )
}