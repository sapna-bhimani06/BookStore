import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Book from './model/book.model.js'; 
import bookRoute from './route/book.route.js'; 
import userRoute from './route/user.route.js';
import cartRoute from './route/cart.route.js';


// Initialize dotenv
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/book/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        console.error('Error fetching book details:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Define other routes
app.use('/book', bookRoute);
app.use('/user', userRoute);
app.use('/cart', cartRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
