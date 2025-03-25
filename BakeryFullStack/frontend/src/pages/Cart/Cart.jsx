import React, { useContext } from 'react'
import './Cart.css'
// import { StoreContext } from '../../context/StoreContext'

const Cart = () => {2
  const { cartItems, explore, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* Render cart items here */}
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="menu-items">
        <h2>Menu</h2>
        <div className="menu-items-list">
          {explore.map(item => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart