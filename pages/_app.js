import '../styles/globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [Cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    console.log("cheak useEfect");
    try {
      if (localStorage.getItem("Cart")){
        setCart(JSON.parse(localStorage.getItem("Cart")))
      }
    } catch (error) {
      console.log(Error)
      localStorage.clear()
    }
    
  }, [])


  const saveCart = (myCart) => {
    localStorage.setItem("Cart", myCart)
    let subt = 0;
    let keys = Object.keys(Cart);
    for(let i=0; keys.length; i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
  }

  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let myCart = Cart;
    if (itemCode in Cart) {
      myCart[itemCode].qty = Cart[itemCode].qty + qty
    }
    else {
      myCart[itemCode] = { qty: 1, price, name, size, varient }
    }
    setCart(myCart)
    saveCart(myCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode, qty, price, name, size, varient) => {
    let myCart = Cart;
    if (itemCode in Cart) {
      myCart[itemCode].qty = Cart[itemCode].qty - qty
    }
    if (myCart[itemCode]["qty"] <= 0) {
      delete myCart[itemCode]
    }
    setCart(myCart)
    saveCart(myCart)
  }
  return <>
    <Header  Cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component Cart={Cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
