import React, { useState, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order")
  const { cartItems, emptyCart } = useContext(Context)
  const totalCarts = 150.99 * cartItems.length
  const totalCartsDisplay = totalCarts.toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
  })

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setButtonText("Ordering...")
    setTimeout(() => {
      setButtonText("Place Order")
      emptyCart()
    }, 2000)
  }

  return (
    <div className="forScreen">
      <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <hr />
        <p className="total-cost">Total: {totalCartsDisplay}</p>
        <div className="order-button">
          {cartItems.length > 0 ? (
            <button onClick={placeOrder}>{buttonText}</button>
          ) : (
            <p>You have no items in your cart.</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default Cart
