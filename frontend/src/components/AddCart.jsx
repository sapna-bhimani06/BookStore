import React from 'react';
import { useCart } from '../context/CartContext';

const AddCart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <div className="mt-4">Your cart is empty.</div>;
  }

  const handleRemoveFromCart = (bookId) => {
    removeFromCart(bookId);
    fetch('http://localhost:4000/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'your-user-id', bookId })
    }).catch(error => console.error('Error removing from cart:', error));
  };

  return (
   
    <div className="mt-4 my-3 p-3">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((book, index) => (
          <div key={index} className="shadow-lg card w-80 bg-base-100 dark:bg-gray-800 dark:text-white border dark:border-gray-700">
            <figure className="p-4">
              <img src="../freebook.jpg" alt={book.title} className="w-full h-auto" />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-bold">
                {book.name}
                <span className="badge bg-secondary text-white ml-2">{book.category}</span>
              </h2>
              <p className="text-base">{book.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{book.description}</p>
              <div className="card-actions flex justify-between mt-4">
                <span className="badge badge-outline text-lg">${book.price}</span>
                <button 
                  onClick={() => handleRemoveFromCart(book._id)} 
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
   
  );
};

export default AddCart;
