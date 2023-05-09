import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill} from 'react-icons/bs';

const Navbar = ({cart ,addToCart ,removeFromCart ,clearCart  ,subTotal}) => {
    // console.log(cart,addToCart,removeFromCart,clearCart,subTotal)
    const ref = useRef()

    const toggleSidebar = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        } else if (ref.current.classList.contains('translate-x-0')) {
            ref.current.classList.add('translate-x-full');
            ref.current.classList.remove('translate-x-0');

        }
    }
    return (
        <div className='py-2 flex flex-col justify-center items-center md:flex-row md:justify-start shadow-md'>
            <div className='logo mx-5'>
                <Image width={200} height={40} src="/logo2.png" />
            </div>
            <div className='nav'>
                <ul className='flex  md:text-sm items-center space-x-3 font-bold '  >
                    <Link href={"/tshirt"}> <li>Tshirts</li></Link>
                    <Link href={"/hoodies"}> <li>Hoodies</li></Link>
                    <Link href={"/stickers"}> <li>Strickers</li></Link>
                    <Link href={"/mugs"}> <li>Mugs</li></Link>
                </ul>
            </div>
            <div onClick={toggleSidebar} className='cart absolute right-0 top-4 mx-5 text-2xl md:text-4xl font-bold'>
                <AiOutlineShoppingCart />
            </div>
            <div ref={ref} className='cartSideBar w-80 max-h-full overflow-y-auto bg-pink-200 fixed top-0 right-0 py-10 px-5  translate-x-full transition-transform '>
                <AiFillCloseCircle onClick={toggleSidebar} className='absolute top-5 text-xl right-4 text-pink-600' />
                <h1 className='text-center font-bold text-xl'>Shopping Cart</h1>
                <ol className='list-decimal ml-5 '>

                    {Object.keys(cart).length === 0  && <div className='py-4 font-semibold text-center '>Your Cart is empty.</div>}
                    {Object.keys(cart).map((k)=>{
                        return <li key={k} className='my-4'>
                        <div className='flex  justify-center items-center space-x-2 font-bold'>
                            <div >{cart[k].name}</div>
                            <div className='flex justify-center items-center text-xl'>
                                <AiFillPlusCircle onClick={()=>addToCart(k,1,cart[k].price,cart[k].name,cart[k].size, cart[k].variant)}  className='text-pink-600' />
                                <span className='m-2'>{cart[k].qty}</span>
                                <AiFillMinusCircle onClick={()=>removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size, cart[k].variant)} className='text-pink-600' />
                            </div>
                        </div>
                    </li>
                    })}
                    



                </ol>
                <div className='flex'>
                    <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-1 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg"><BsFillBagCheckFill className='m-1' /> Checkout</button>
                    <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-1 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg" onClick={clearCart}>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar