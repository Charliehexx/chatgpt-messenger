import { PlusIcon } from "@heroicons/react/24/solid"
import React from 'react'

const NewChat = () => {
    return (
        <div className='border-gray-700 chatRow border'><PlusIcon className='h-4 w-4' />
            <p className='text-black'>New Chat</p></div>
    )
}

export default NewChat