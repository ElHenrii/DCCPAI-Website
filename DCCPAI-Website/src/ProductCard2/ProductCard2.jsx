// import React from 'react';
// import styles from './ProductCard2.module.css';
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
// import TextButton from '../TextButton/TextButton';



// function ProductCard2(id, name, description, price, category_id, display, available, product_deleted, buttonLink) {

//     const fallbackSrc = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//     const imageSrc = `/public/uploads/product_${id}/${id}-1.png`;
//     console.log(`Image Src ${imageSrc}`);

//     const handleClick = () => {
//         const productData = {
//             id,
//             name,
//             description,
//             price,
//             category_id,
//             display,
//             available,
//             product_deleted,
//         };

//         localStorage.setItem('clickedProduct', JSON.stringify(productData));
//         console.log('Product stored in localStorage:', productData);  // Debugging
//     };

//     const addToCart = () => {
//         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
//         console.log('Current cart items before adding:', cartItems);
//         if (product) {
//             cartItems.push(product);
//             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
//             console.log('Product added to cart:', product);
//             console.log('Updated cart items:', cartItems);
//             window.dispatchEvent(new Event('storage'));  // Notifies other components about the cart update
//         } else {
//             console.error('No product to add to cart');
//         }
//     };


//     // Optional: Truncate product name to 30 characters
//     const truncateText = (text, maxLength) => {
//         return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
//     };

//     return (
        
//         <div className={styles.productCardContainer} onClick={handleClick}>
//             <div className={styles.topRow}>
//                 <div className={styles.productReview}>
//                     ★★★★★ 200 Reviews
//                 </div>
//                 <div className={styles.productPrice}>
//                     {available ? (price ? `$${Number(price).toFixed(2)}` : "Price not available") : "Out of Stock"}
//                 </div>
//             </div>

//             <div className={styles.middlePicture}>
//                 <Link to={`/${buttonLink}`} className="Link">
//                 <img 
//                     src={imageSrc}
//                     alt={name || "Product"} 
//                     className={styles.productImage}
//                     onError={(e) => e.target.src = fallbackSrc}
//                     />
//                 </Link>
//             </div>

//             <div className={styles.bottomRow}>
//                 <div className={styles.productName}>
//                         <div className={styles.productName}>{truncateText(name || "Unnamed Product", 10)}</div>
//                 </div>
//                 <div className={styles.addToCart}>
//                     <TextButtonSmall buttonText="Add To Cart" buttonLink="ProductDetails"/>
//                 </div>
//             </div>
//         </div>
//     );
// }

// ProductCard2.PropTypes = {
//     buttonLink: PropTypes.string,
// }

// ProductCard2.defaultProps = {
//     buttonLink: "",
// }

// export default ProductCard2;
import React from 'react';
import styles from './ProductCard2.module.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import TextButtonSmall from '../../TextButton/TextButtonSmall';

function ProductCard2({ id, name, description, price, category_id, display, available, product_deleted }) {
    cconst [product, setProduct] = useState(null);  // Added state to manage current product

    const fallbackSrc = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const handleClick = () => {
        const productData = {
            id,
            name,
            description,
            price,
            category_id,
            display,
            available,
            product_deleted,
        };

        localStorage.setItem('clickedProduct', JSON.stringify(productData));
        console.log('Product stored in localStorage:', productData);  // Debugging
    };

    useEffect(() => {
        const currentProduct = {
            id,
            name,
            description,
            price,
            category_id,
            display,
            available,
            product_deleted,
        };

        setProduct(currentProduct); // Store the current product in the component state

        // Store the clicked product in localStorage as before
        console.log('Product stored in localStorage:', currentProduct);  // Debugging
    }, [id, name, description, price, category_id, display, available, product_deleted]);

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        console.log('Current cart items before adding:', cartItems);

        if (product) {  // Use product state directly
            cartItems.push(product); // Add the current product to the cart
            localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
            console.log('Product added to cart:', product);
            console.log('Updated cart items:', cartItems);

            // Trigger cart to update
            window.dispatchEvent(new Event('storage'));
        } else {
            console.error('No product to add to cart');
        }
    };

    // Optional: Truncate product name to 30 characters
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };


    return (
        <div className={styles.productCardContainer} onClick={handleClick}>
            <div className={styles.topRow}>
                <div className={styles.productReview}>
                    ★★★★★ 202 Reviews
                </div>
                <div className={styles.productPrice}>
                    {available ? (price ? `$${Number(price).toFixed(2)}` : "Price not available") : "Out of Stock"}
                </div>
            </div>

            <div className={styles.middlePicture}>
                <Link to={`/${buttonLink}`} className="Link">
                    <img 
                        src={fallbackSrc}
                        alt={name || "Product"} 
                        className={styles.productImage}
                        onError={(e) => e.target.src = fallbackSrc}
                    />
                </Link>
            </div>

            <div className={styles.bottomRow}>
                <div className={styles.productName}>
                    <Link to={`/${buttonLink}`} className="Link">
                        <div className={styles.productName}>{truncateText(name || "Unnamed Product", 10)}</div>
                    </Link>
                </div>
                <div className={styles.addToCart}>
                    {/* Updated Button to Call addToCart */}
                    <TextButtonSmall buttonText="Add To Cart" onClick={addToCart} />
                </div>
            </div>
        </div>
    );
}

ProductCard2.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    category_id: PropTypes.number,
    display: PropTypes.string,
    available: PropTypes.bool,
    product_deleted: PropTypes.bool,
};

ProductCard2.defaultProps = {
    name: "Unnamed Product",
    description: "",
    price: 0,
    category_id: 0,
    display: "default",
    available: true,
    product_deleted: false,
};

export default ProductCard2;
