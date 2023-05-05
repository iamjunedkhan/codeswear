import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
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
            <div className='cart absolute right-0 top-4 mx-5 text-2xl md:text-4xl font-bold'>
                <AiOutlineShoppingCart  />
            </div>
        </div>
    )
}

export default Navbar