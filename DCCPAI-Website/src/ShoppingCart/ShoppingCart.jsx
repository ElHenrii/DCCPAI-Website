import React, { useState, useEffect } from 'react';
import styles from './ShoppingCart.module.css';

function ShoppingCart({ initialOpen = false }) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedItems = localStorage.getItem('shoppingCart');
        if (storedItems) {
            const items = JSON.parse(storedItems);
            setCartItems(items);
            calculateTotalPrice(items);
            console.log('Cart items loaded:', items);
        }
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedItems = localStorage.getItem('shoppingCart');
            if (storedItems) {
                const items = JSON.parse(storedItems);
                setCartItems(items);
                calculateTotalPrice(items);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const calculateTotalPrice = (items) => {
        const total = items.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotalPrice(total.toFixed(2)); // Set total price with 2 decimal places
    };

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const removeItemFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        localStorage.setItem('shoppingCart', JSON.stringify(newCartItems));
        calculateTotalPrice(newCartItems);
    };

    const copyToClipboard = () => {
        const formattedItems = cartItems.map(item => `${item.name} - $${item.price}`).join('\n');
        const clipboardText = `${formattedItems}\n\nTotal Price: $${totalPrice}`;
        navigator.clipboard.writeText(clipboardText)
            .then(() => {
                alert('Cart details copied to clipboard!');
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };

    return (
        <div className={`${styles.cartContainer} ${isOpen ? styles.open : ''}`}>
            <button className={styles.cartToggle} onClick={toggleCart}>
                {isOpen ? 'Close Cart' : 'Open Cart'}
            </button>
            <div className={styles.cartContent}>
                <h2>Your Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    <>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index} className={styles.cartItem}>
                                    <div className={styles.itemDetails}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemPrice}>${item.price}</span>
                                    </div>
                                    <button className={styles.removeButton} onClick={() => removeItemFromCart(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.totalPrice}>
                            <strong>Total Price: ${totalPrice}</strong>
                        </div>
                        <button className={styles.copyButton} onClick={copyToClipboard}>
                            Copy to Clipboard
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ShoppingCart;
