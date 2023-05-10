import React from 'react'

const Checkout = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center m-5'>Checkout</h1>
      <div className=' mx-4 md:mx-24'>
        <h2>1. Delivery Details</h2>
        <div className='flex flex-col w-full md:flex-row'>
          <div class="relative w-full  md:w-1/2 ">
            <label htmlFor="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative w-full md:w-1/2 ">
            <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div class="relative w-full ">
          <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="address" name="address" rows="2" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div class="relative w-full md:w-1/2 ">
            <label htmlFor="phone" class="leading-7 text-sm text-gray-600">Phone</label>
            <input type="number" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative w-full  md:w-1/2 ">
            <label htmlFor="pincode" class="leading-7 text-sm text-gray-600">Pin Code</label>
            <input type="number" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div><div className='flex flex-col md:flex-row'>
          <div class="relative w-full  md:w-1/2 ">
            <label htmlFor="state" class="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative w-full md:w-1/2 ">
            <label htmlFor="district" class="leading-7 text-sm text-gray-600">District</label>
            <input type="text" id="district" name="district" class="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Checkout