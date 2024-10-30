import React from 'react';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  
  const totalPrice = cart.reduce((acc, item) => acc + item.new_price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="text-2xl font-bold"> Cart page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center my-4">
                <div>
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <h3 className="font-bold">{item.name}</h3>
                  <p>Price: ${item.new_price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold">Total Price: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
