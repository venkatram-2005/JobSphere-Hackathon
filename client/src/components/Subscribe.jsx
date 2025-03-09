import React from 'react'
import { assets } from '../assets/assets'
const Subscribe = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto my-20'>
      <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded lg'>
        <div className="max-w-xl w-full">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8">
            Subscribe to our newsletter for daily job updates
          </h1>
          <div className="w-full">
            <div className="flex items-center justify-between bg-white rounded text-gray-600 pl-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="max-sm:text-xs p-2 rounded outline-none w-full"
              />
              <button className="bg-blue-600 px-6 py-2 rounded text-white m-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <img className='absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden' src={assets.app_main_img} alt="" />
      </div>
    </div>
  )
}

export default Subscribe
