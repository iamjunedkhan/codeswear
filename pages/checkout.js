import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

const Checkout = ({ cart, removeFromCart, addToCart, subTotal }) => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center m-5'>Checkout</h1>
      <div className='  mx-4 md:mx-24'>
        <h2 className='text-xl font-bold p-3'>1. Delivery Details</h2>
        <div className='flex flex-col w-full md:flex-row'>
          <div className="relative w-full  md:w-1/2 p-3 ">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative w-full md:w-1/2 p-3  ">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="relative w-full p-3">
          <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="address" name="address" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className="relative w-full md:w-1/2 p-3 ">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative w-full  md:w-1/2 p-3 ">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pin Code</label>
            <input type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div><div className='flex flex-col md:flex-row'>
          <div className="relative w-full  md:w-1/2 p-3 ">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative w-full md:w-1/2 p-3 ">
            <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
            <input type="text" id="district" name="district" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>


        <h2 className='text-xl font-bold p-3'>2. Review Cart Items</h2>
        <div className='cartSideBar m-3  h-full overflow-y-auto bg-pink-200  py-5 px-5 '>
          <AiFillCloseCircle className='absolute top-5 text-xl right-4 text-pink-600' />

          <ol className='list-decimal ml-5 '>

            {Object.keys(cart).length === 0 && <div className='py-4 font-semibold text-center '>Your Cart is empty.</div>}
            {Object.keys(cart).map((k) => {
              return <li key={k} className='my-4'>
                <div className='flex justify-between md:items-center space-x-2 font-bold'>
                  <div className='md:w-1/3' >{cart[k].name}</div>
                  <div className='flex justify-center items-center text-xl'>
                    <AiFillPlusCircle onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='text-pink-600' />
                    <span className='m-2'>{cart[k].qty}</span>
                    <AiFillMinusCircle onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} className='text-pink-600' />
                  </div>
                </div>
              </li>
            })}
            {
              Object.keys(cart).length > 0 &&
              <span className="total text-xl font-bold">
                Total:₹{subTotal}
              </span>
            }
          </ol>

        </div>
        <div className='flex'>
          <Link href={"/checkout"} ><button class="flex mx-auto mt-8 mx-3 text-white bg-pink-500 border-0 py-1 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillBagCheckFill className='m-1' /> Pay ₹{subTotal}</button></Link>
        </div>

      </div>

    </div>
  )
}

export default Checkout