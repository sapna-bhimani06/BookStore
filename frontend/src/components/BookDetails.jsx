import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function BookDetails() {
    const { id } = useParams(); 
    const [book, setBook] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const { addToCart } = useCart();

    useEffect(() => {    
        fetch(`http://localhost:4000/book/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setBook(data)) 
            .catch(error => console.error('Error fetching book details:', error));
    }, [id]); 

    if (!book) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        addToCart(book);
        fetch('http://localhost:4000/cart/addcard', { // Ensure endpoint is consistent
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: 'your-user-id', bookId: book._id })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            setSuccessMessage('Book added to cart successfully!');
            setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
        })
        .catch(error => console.error('Error adding to cart:', error));
    };

    return (
        <div className="mt-4 my-3 p-3 flex justify-center">
            <div className="shadow-lg card w-80 bg-base-100 dark:bg-gray-800 dark:text-white border dark:border-gray-700">
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
                    </div>
                    <button 
                        onClick={handleAddToCart} 
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add to Cart
                    </button>
                    <Link to="/addcart" className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                        View Cart
                    </Link>
                    {successMessage && <div className="mt-2 text-green-500">{successMessage}</div>}
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
