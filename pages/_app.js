import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useInsertionEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    console.log('hey i m useeffect from the app.js');

    try {
      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.log(error.message);
      localStorage.clear();
    }
    
  }, [])
  

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify( myCart));
    let keys = Object.keys(myCart);
    let subT=0;
    for(let i =0; i<keys.length ; i++){
      subT += (myCart[keys[i]].price * myCart[keys[i]].qty);
    }
    setSubTotal(subT);
    console.log('the subtotal is :',subT);
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } 
    else {
      newCart[itemCode] = { "qty": 1, price, name, size, variant };
    }

    setCart(newCart)
    saveCart(newCart);
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    console.log(itemCode,qty)
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    } 
    if(newCart[itemCode].qty<=0){
      delete newCart[itemCode];
    }
    setCart(newCart)
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }


  return <>
    <Navbar  cart={cart} addToCart = {addToCart} removeFromCart = {removeFromCart} clearCart={clearCart} subTotal ={subTotal} />
    <Component cart={cart} addToCart = {addToCart} removeFromCart = {removeFromCart} clearCart={clearCart} subTotal ={subTotal}  {...pageProps} />
    <Footer />
  </>
}
