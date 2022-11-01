import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
function Widgets() {
    return (
        <div className='px-2 mt-2 col-span-2'>
            {/* search */}
            <div className='flex item-center space-x-2 bg-gray-100 p-3 rounded-full m-2'>
                <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
                <input type="text" placeholder='Search Twitter' className='bg-transparent flex-1 outline-none ' />
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="sonnysangha"
                options={{ height: 1000 }}
            />
        </div>
    )
}

export default Widgets