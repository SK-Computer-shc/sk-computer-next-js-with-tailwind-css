import React from 'react'
import Link from 'next/link'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Cheakout = ({ Cart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div className=''>
      <h2 className='text-center text-2xl font-serif font-semibold'>Checkout</h2>
      <div className='md:flex'>
        <div className='md:w-1/2 ml-2 mr-2'>
          <h2 className='font-semibold'>1.Delivery Details</h2>
          <div className="relative mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-2">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <div className='flex'>
            <div className="relative mb-2 w-1/2 mr-2">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-2 w-1/2">
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
              <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='flex'>
            <div className="relative mb-2 w-1/2 mr-2">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-2 w-1/2">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
              <input type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 ml-2 mr-2'>
          <h2 className='font-semibold'>2.Review Cart Items</h2>
          <div>
            <div className='bg-orange-200 p-2'>
              <h2 className='text-lg font-serif font-semibold text-left'>Your Shopping Cart</h2>
              <ol className='list-decimal p-4'>
                {Object.keys(Cart).length == 0 && <div className='mt-4 font-bold'>Your Cart is Empty</div>}

                {Object.keys(Cart).map((k) => {
                  return <li key={k}>
                    <div className='flex'>
                      <div className='w-2/3 font-semibold'>{Cart[k].name}</div>
                      <div className='w-1/3 flex justify-center font-semibold'><AiFillMinusCircle onClick={() => removeFromCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].varient)} className='m-1 cursor-pointer text-xl' /> {Cart[k].qty} <AiFillPlusCircle onClick={() => addToCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].varient)} className='m-1 cursor-pointer text-xl' /></div>
                    </div>
                  </li>
                })}

              </ol>
              <div className='font-bold text-xl ml-3 text-slate-600'>
                Subtotal= ₹{subTotal}
              </div>
            </div >
          </div>
        </div>
      </div>
      <div className='items-center text-center'>
        <button className="flex mx-auto mt-2 text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 rounded text-lg"> Pay ₹{subTotal}</button>
      </div>
    </div >
  )
}

export default Cheakout