import express from 'express';
import Cart from '../model/Cart.model.js';

const router = express.Router();

// Add to Cart
router.post('/addcard', async (req, res) => {  // Endpoint should be lowercase to match client-side fetch request
    const { userId, bookId } = req.body;
    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [{ bookId, quantity: 1 }] });
        } else {
            const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += 1;
            } else {
                cart.items.push({ bookId, quantity: 1 });
            }
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ message: 'Server Error', error });
    }
});

export default router;
