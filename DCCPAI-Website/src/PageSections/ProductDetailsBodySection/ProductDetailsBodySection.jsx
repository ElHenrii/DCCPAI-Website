// // // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // // import styles from './ProductDetailsBodySection.module.css';

// // // // // // // // // function ProductDetailsBodySection() {
// // // // // // // // //     const [product, setProduct] = useState(null);

// // // // // // // // //     useEffect(() => {
// // // // // // // // //         const storedProduct = localStorage.getItem('clickedProduct');
// // // // // // // // //         console.log('Retrieved product from localStorage:', storedProduct);
// // // // // // // // //         if (storedProduct) {
// // // // // // // // //             const parsedProduct = JSON.parse(storedProduct);
// // // // // // // // //             console.log('Parsed product:', parsedProduct);
// // // // // // // // //             setProduct(parsedProduct);
// // // // // // // // //         } else {
// // // // // // // // //             console.error('No product found in localStorage');
// // // // // // // // //         }
// // // // // // // // //     }, []);

// // // // // // // // //     const addToCart = () => {
// // // // // // // // //         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// // // // // // // // //         console.log('Current cart items before adding:', cartItems);
// // // // // // // // //         if (product) {
// // // // // // // // //             cartItems.push(product);
// // // // // // // // //             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // // // // // // // //             console.log('Product added to cart:', product);
// // // // // // // // //             console.log('Updated cart items:', cartItems);
// // // // // // // // //             // Trigger cart to update
// // // // // // // // //             window.dispatchEvent(new Event('storage'));
// // // // // // // // //         } else {
// // // // // // // // //             console.error('No product to add to cart');
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     if (!product) {
// // // // // // // // //         return <div>Loading...</div>;
// // // // // // // // //     }

// // // // // // // // //     console.log("Current product ID:" + product.id)

// // // // // // // // //     return (
// // // // // // // // //         <>
// // // // // // // // //             <div className={styles.productDetailsBodyContainer}>
// // // // // // // // //                 <img 
// // // // // // // // //                     src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
// // // // // // // // //                     alt={product.name || "Product Image"} 
// // // // // // // // //                     id="productImage1" 
// // // // // // // // //                     className={styles.productImage}
// // // // // // // // //                 />

// // // // // // // // //                 <div className={styles.textContainer}>
// // // // // // // // //                     <h1>{product.name || "Product Name"}</h1>
// // // // // // // // //                     <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// // // // // // // // //                     <p><b>Product Description:</b></p>
// // // // // // // // //                     <p>{product.description || "Product Description"}</p>
// // // // // // // // //                     <button onClick={() => {
// // // // // // // // //                         console.log('Add to Cart button clicked');
// // // // // // // // //                         addToCart();
// // // // // // // // //                     }}>Add To Cart</button>
// // // // // // // // //                 </div>
// // // // // // // // //             </div>
// // // // // // // // //         </>
// // // // // // // // //     );
// // // // // // // // // }

// // // // // // // // // export default ProductDetailsBodySection;


// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import styles from './ProductDetailsBodySection.module.css';

// // // // // // // // function ProductDetailsBodySection() {
// // // // // // // //     const [product, setProduct] = useState(null);
// // // // // // // //     const [imageUrls, setImageUrls] = useState([]);

// // // // // // // //     useEffect(() => {
// // // // // // // //         const storedProduct = localStorage.getItem('clickedProduct');
// // // // // // // //         console.log('Retrieved product from localStorage:', storedProduct);
// // // // // // // //         if (storedProduct) {
// // // // // // // //             const parsedProduct = JSON.parse(storedProduct);
// // // // // // // //             console.log('Parsed product:', parsedProduct);
// // // // // // // //             setProduct(parsedProduct);

// // // // // // // //             // Load images dynamically
// // // // // // // //             if (parsedProduct && parsedProduct.id) {
// // // // // // // //                 loadProductImages(parsedProduct.id);
// // // // // // // //             }
// // // // // // // //         } else {
// // // // // // // //             console.error('No product found in localStorage');
// // // // // // // //         }
// // // // // // // //     }, []);

// // // // // // // //     const loadProductImages = (productId) => {
// // // // // // // //         const basePath = `public/uploads/product_${productId}/`; // Relative path to the product folder in the public directory
// // // // // // // //         const imageList = [];

// // // // // // // //         // Attempt to load up to 10 images, or until one is not found
// // // // // // // //         for (let i = 1; i <= 10; i++) {
// // // // // // // //             const imageUrl = `${basePath}${productId}-${i}.png`;

// // // // // // // //             // Check if the image exists by loading it dynamically
// // // // // // // //             const img = new Image();
// // // // // // // //             img.src = imageUrl;

// // // // // // // //             img.onload = () => {
// // // // // // // //                 // If the image loads successfully, add it to the list
// // // // // // // //                 imageList.push(imageUrl);
// // // // // // // //                 setImageUrls([...imageList]); // Update the state with the new list of images
// // // // // // // //             };

// // // // // // // //             img.onerror = () => {
// // // // // // // //                 // Stop loading images once an image is not found
// // // // // // // //                 console.log(`Image not found: ${imageUrl}`);
// // // // // // // //             };
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const addToCart = () => {
// // // // // // // //         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// // // // // // // //         console.log('Current cart items before adding:', cartItems);
// // // // // // // //         if (product) {
// // // // // // // //             cartItems.push(product);
// // // // // // // //             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // // // // // // //             console.log('Product added to cart:', product);
// // // // // // // //             console.log('Updated cart items:', cartItems);
// // // // // // // //             // Trigger cart to update
// // // // // // // //             window.dispatchEvent(new Event('storage'));
// // // // // // // //         } else {
// // // // // // // //             console.error('No product to add to cart');
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     if (!product) {
// // // // // // // //         return <div>Loading...</div>;
// // // // // // // //     }

// // // // // // // //     return (
// // // // // // // //         <>
// // // // // // // //             <div className={styles.productDetailsBodyContainer}>
// // // // // // // //                 <div className={styles.imageContainer}>
// // // // // // // //                     {imageUrls.length > 0 ? (
// // // // // // // //                         imageUrls.map((url, index) => (
// // // // // // // //                             <img
// // // // // // // //                                 key={index}
// // // // // // // //                                 src={url}
// // // // // // // //                                 alt={`Product Image ${index + 1}`}
// // // // // // // //                                 className={styles.productImage}
// // // // // // // //                             />
// // // // // // // //                         ))
// // // // // // // //                     ) : (
// // // // // // // //                         <p>No images available</p>
// // // // // // // //                     )}
// // // // // // // //                 </div>

// // // // // // // //                 <div className={styles.textContainer}>
// // // // // // // //                     <h1>{product.name || "Product Name"}</h1>
// // // // // // // //                     <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// // // // // // // //                     <p><b>Product Description:</b></p>
// // // // // // // //                     <p>{product.description || "Product Description"}</p>
// // // // // // // //                     <button onClick={() => {
// // // // // // // //                         console.log('Add to Cart button clicked');
// // // // // // // //                         addToCart();
// // // // // // // //                     }}>Add To Cart</button>
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // export default ProductDetailsBodySection;



// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import styles from './ProductDetailsBodySection.module.css';

// // // // // // // function ProductDetailsBodySection() {
// // // // // // //     const [product, setProduct] = useState(null);
// // // // // // //     const [imageUrls, setImageUrls] = useState([]);
// // // // // // //     const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index

// // // // // // //     useEffect(() => {
// // // // // // //         const storedProduct = localStorage.getItem('clickedProduct');
// // // // // // //         console.log('Retrieved product from localStorage:', storedProduct);
// // // // // // //         if (storedProduct) {
// // // // // // //             const parsedProduct = JSON.parse(storedProduct);
// // // // // // //             console.log('Parsed product:', parsedProduct);
// // // // // // //             setProduct(parsedProduct);

// // // // // // //             // Load images dynamically
// // // // // // //             if (parsedProduct && parsedProduct.id) {
// // // // // // //                 loadProductImages(parsedProduct.id);
// // // // // // //             }
// // // // // // //         } else {
// // // // // // //             console.error('No product found in localStorage');
// // // // // // //         }
// // // // // // //     }, []);

// // // // // // //     const loadProductImages = (productId) => {
// // // // // // //         const basePath = `public/uploads/product_${productId}/`; // Relative path to the product folder in the public directory
// // // // // // //         const imageList = [];

// // // // // // //         // Attempt to load up to 10 images, or until one is not found
// // // // // // //         for (let i = 1; i <= 10; i++) {
// // // // // // //             const imageUrl = `${basePath}${productId}-${i}.png`;

// // // // // // //             // Check if the image exists by loading it dynamically
// // // // // // //             const img = new Image();
// // // // // // //             img.src = imageUrl;

// // // // // // //             img.onload = () => {
// // // // // // //                 // If the image loads successfully, add it to the list
// // // // // // //                 imageList.push(imageUrl);
// // // // // // //                 setImageUrls([...imageList]); // Update the state with the new list of images
// // // // // // //             };

// // // // // // //             img.onerror = () => {
// // // // // // //                 // Stop loading images once an image is not found
// // // // // // //                 console.log(`Image not found: ${imageUrl}`);
// // // // // // //             };
// // // // // // //         }
// // // // // // //     };

// // // // // // //     // Function to go to the next image
// // // // // // //     const nextImage = () => {
// // // // // // //         setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
// // // // // // //     };

// // // // // // //     // Function to go to the previous image
// // // // // // //     const prevImage = () => {
// // // // // // //         setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
// // // // // // //     };

// // // // // // //     const addToCart = () => {
// // // // // // //         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// // // // // // //         console.log('Current cart items before adding:', cartItems);
// // // // // // //         if (product) {
// // // // // // //             cartItems.push(product);
// // // // // // //             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // // // // // //             console.log('Product added to cart:', product);
// // // // // // //             console.log('Updated cart items:', cartItems);
// // // // // // //             // Trigger cart to update
// // // // // // //             window.dispatchEvent(new Event('storage'));
// // // // // // //         } else {
// // // // // // //             console.error('No product to add to cart');
// // // // // // //         }
// // // // // // //     };

// // // // // // //     if (!product) {
// // // // // // //         return <div>Loading...</div>;
// // // // // // //     }

// // // // // // //     return (
// // // // // // //         <>
// // // // // // //             <div className={styles.productDetailsBodyContainer}>
// // // // // // //                 <div className={styles.imageContainer}>
// // // // // // //                     {imageUrls.length > 0 ? (
// // // // // // //                         <>
// // // // // // //                             <div className={styles.slideshowContainer}>
// // // // // // //                                 <button className={styles.prevButton} onClick={prevImage}>
// // // // // // //                                     &#10094; {/* Left Arrow */}
// // // // // // //                                 </button>
// // // // // // //                                 <img
// // // // // // //                                     src={imageUrls[currentIndex]}
// // // // // // //                                     alt={`Product Image ${currentIndex + 1}`}
// // // // // // //                                     className={styles.productImage}
// // // // // // //                                 />
// // // // // // //                                 <button className={styles.nextButton} onClick={nextImage}>
// // // // // // //                                     &#10095; {/* Right Arrow */}
// // // // // // //                                 </button>
// // // // // // //                             </div>
// // // // // // //                             <div className={styles.imageCounter}>
// // // // // // //                                 {currentIndex + 1} / {imageUrls.length}
// // // // // // //                             </div>
// // // // // // //                         </>
// // // // // // //                     ) : (
// // // // // // //                         <p>No images available</p>
// // // // // // //                     )}
// // // // // // //                 </div>

// // // // // // //                 <div className={styles.textContainer}>
// // // // // // //                     <h1>{product.name || "Product Name"}</h1>
// // // // // // //                     <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// // // // // // //                     <p><b>Product Description:</b></p>
// // // // // // //                     <p>{product.description || "Product Description"}</p>
// // // // // // //                     <button onClick={() => {
// // // // // // //                         console.log('Add to Cart button clicked');
// // // // // // //                         addToCart();
// // // // // // //                     }}>Add To Cart</button>
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </>
// // // // // // //     );
// // // // // // // }

// // // // // // // export default ProductDetailsBodySection;



// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import styles from './ProductDetailsBodySection.module.css';

// // // // // // function ProductDetailsBodySection() {
// // // // // //     const [product, setProduct] = useState(null);
// // // // // //     const [imageUrls, setImageUrls] = useState([]);
// // // // // //     const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index
// // // // // //     const fallbackImageUrl = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback image URL

// // // // // //     useEffect(() => {
// // // // // //         const storedProduct = localStorage.getItem('clickedProduct');
// // // // // //         console.log('Retrieved product from localStorage:', storedProduct);
// // // // // //         if (storedProduct) {
// // // // // //             const parsedProduct = JSON.parse(storedProduct);
// // // // // //             console.log('Parsed product:', parsedProduct);
// // // // // //             setProduct(parsedProduct);

// // // // // //             // Load images dynamically
// // // // // //             if (parsedProduct && parsedProduct.id) {
// // // // // //                 loadProductImages(parsedProduct.id);
// // // // // //             }
// // // // // //         } else {
// // // // // //             console.error('No product found in localStorage');
// // // // // //         }
// // // // // //     }, []);

// // // // // //     const loadProductImages = (productId) => {
// // // // // //         const basePath = `public/uploads/product_${productId}/`; // Relative path to the product folder in the public directory
// // // // // //         const imageList = [];

// // // // // //         // Attempt to load up to 10 images, or until one is not found
// // // // // //         for (let i = 1; i <= 10; i++) {
// // // // // //             const imageUrl = `${basePath}${productId}-${i}.png`;

// // // // // //             // Check if the image exists by loading it dynamically
// // // // // //             const img = new Image();
// // // // // //             img.src = imageUrl;

// // // // // //             img.onload = () => {
// // // // // //                 // If the image loads successfully, add it to the list
// // // // // //                 imageList.push(imageUrl);
// // // // // //                 setImageUrls([...imageList]); // Update the state with the new list of images
// // // // // //             };

// // // // // //             img.onerror = () => {
// // // // // //                 console.log(`Image not found: ${imageUrl}`);
// // // // // //             };
// // // // // //         }
// // // // // //     };

// // // // // //    useEffect(() => {
// // // // // //         if (product) {
// // // // // //             console.log('Product is Available: ' + product.available);
// // // // // //             console.log('Product is Displayed: ' + product.display);
// // // // // //         }
// // // // // //     }, [product]);


// // // // // //     // Function to go to the next image
// // // // // //     const nextImage = () => {
// // // // // //         setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
// // // // // //     };

// // // // // //     // Function to go to the previous image
// // // // // //     const prevImage = () => {
// // // // // //         setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
// // // // // //     };

// // // // // //     const addToCart = () => {
// // // // // //         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// // // // // //         console.log('Current cart items before adding:', cartItems);
// // // // // //         if (product) {
// // // // // //             cartItems.push(product);
// // // // // //             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // // // // //             console.log('Product added to cart:', product);
// // // // // //             console.log('Updated cart items:', cartItems);
// // // // // //             // Trigger cart to update
// // // // // //             window.dispatchEvent(new Event('storage'));
// // // // // //         } else {
// // // // // //             console.error('No product to add to cart');
// // // // // //         }
// // // // // //     };

// // // // // //     if (!product) {
// // // // // //         return <div>Loading...</div>;
// // // // // //     }

// // // // // //     return (
// // // // // //         <>
// // // // // //             <div className={styles.productDetailsBodyContainer}>
// // // // // //                 <div className={styles.imageContainer}>
// // // // // //                     {/* If no images are available, use the fallback image */}
// // // // // //                     {imageUrls.length > 0 ? (
// // // // // //                         <>
// // // // // //                             <div className={styles.slideshowContainer}>
// // // // // //                                 <button className={styles.prevButton} onClick={prevImage}>
// // // // // //                                     &#10094; {/* Left Arrow */}
// // // // // //                                 </button>
// // // // // //                                 <img
// // // // // //                                     src={imageUrls[currentIndex]} 
// // // // // //                                     alt={`Product Image ${currentIndex + 1}`}
// // // // // //                                     className={styles.productImage}
// // // // // //                                     onError={(e) => { 
// // // // // //                                         e.target.src = fallbackImageUrl; // Use fallback image on error
// // // // // //                                     }}
// // // // // //                                 />
// // // // // //                                 <button className={styles.nextButton} onClick={nextImage}>
// // // // // //                                     &#10095; {/* Right Arrow */}
// // // // // //                                 </button>
// // // // // //                             </div>
// // // // // //                             <div className={styles.imageCounter}>
// // // // // //                                 {currentIndex + 1} / {imageUrls.length}
// // // // // //                             </div>
// // // // // //                         </>
// // // // // //                     ) : (
// // // // // //                         <img 
// // // // // //                             src={fallbackImageUrl} 
// // // // // //                             alt="Fallback Image" 
// // // // // //                             className={styles.productImage}
// // // // // //                         />
// // // // // //                     )}
// // // // // //                 </div>

// // // // // //                 <div className={styles.textContainer}>
// // // // // //                     <h1>{product.name || "Product Name"}</h1>
// // // // // //                     <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// // // // // //                     <p><b>Product Description:</b></p>
// // // // // //                     <p>{product.description || "Product Description"}</p>
// // // // // //                     <button onClick={() => {
// // // // // //                         console.log('Add to Cart button clicked');
// // // // // //                         addToCart();
// // // // // //                     }}>Add To Cart</button>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </>
// // // // // //     );
// // // // // // }

// // // // // // export default ProductDetailsBodySection;



// // // // // import React, { useEffect, useState } from 'react';
// // // // // import styles from './ProductDetailsBodySection.module.css';

// // // // // function ProductDetailsBodySection() {
// // // // //     const [product, setProduct] = useState(null);
// // // // //     const [imageUrls, setImageUrls] = useState([]);
// // // // //     const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index
// // // // //     const fallbackImageUrl = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback image URL

// // // // //     useEffect(() => {
// // // // //         const storedProduct = localStorage.getItem('clickedProduct');
// // // // //         console.log('Retrieved product from localStorage:', storedProduct);
// // // // //         if (storedProduct) {
// // // // //             const parsedProduct = JSON.parse(storedProduct);
// // // // //             console.log('Parsed product:', parsedProduct);
// // // // //             setProduct(parsedProduct);

// // // // //             // Load images dynamically
// // // // //             if (parsedProduct && parsedProduct.id) {
// // // // //                 loadProductImages(parsedProduct.id);
// // // // //             }
// // // // //         } else {
// // // // //             console.error('No product found in localStorage');
// // // // //         }
// // // // //     }, []);

// // // // //     const loadProductImages = (productId) => {
// // // // //         const basePath = `public/uploads/product_${productId}/`; // Relative path to the product folder in the public directory
// // // // //         const imageList = [];

// // // // //         // Attempt to load up to 10 images, or until one is not found
// // // // //         for (let i = 1; i <= 10; i++) {
// // // // //             const imageUrl = `${basePath}${productId}-${i}.png`;

// // // // //             // Check if the image exists by loading it dynamically
// // // // //             const img = new Image();
// // // // //             img.src = imageUrl;

// // // // //             img.onload = () => {
// // // // //                 // If the image loads successfully, add it to the list
// // // // //                 imageList.push(imageUrl);
// // // // //                 setImageUrls([...imageList]); // Update the state with the new list of images
// // // // //             };

// // // // //             img.onerror = () => {
// // // // //                 console.log(`Image not found: ${imageUrl}`);
// // // // //             };
// // // // //         }
// // // // //     };

// // // // //     // Log product availability and display only if the product is loaded
// // // // //     useEffect(() => {
// // // // //         if (product) {
// // // // //             console.log('Product is Available: ' + product.available);
// // // // //             console.log('Product is Displayed: ' + product.display);
// // // // //         }
// // // // //     }, [product]);

// // // // //     // Function to go to the next image
// // // // //     const nextImage = () => {
// // // // //         setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
// // // // //     };

// // // // //     // Function to go to the previous image
// // // // //     const prevImage = () => {
// // // // //         setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
// // // // //     };

// // // // //     const addToCart = () => {
// // // // //         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// // // // //         console.log('Current cart items before adding:', cartItems);
// // // // //         if (product) {
// // // // //             cartItems.push(product);
// // // // //             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // // // //             console.log('Product added to cart:', product);
// // // // //             console.log('Updated cart items:', cartItems);
// // // // //             // Trigger cart to update
// // // // //             window.dispatchEvent(new Event('storage'));
// // // // //         } else {
// // // // //             console.error('No product to add to cart');
// // // // //         }
// // // // //     };

// // // // //     if (!product) {
// // // // //         return <div>Loading...</div>;
// // // // //     }

// // // // //     return (
// // // // //         <>
// // // // //             <div className={styles.productDetailsBodyContainer}>
// // // // //                 <div className={styles.imageContainer}>
// // // // //                     {/* If no images are available, use the fallback image */}
// // // // //                     {imageUrls.length > 0 ? (
// // // // //                         <>
// // // // //                             <div className={styles.slideshowContainer}>
// // // // //                                 <button className={styles.prevButton} onClick={prevImage}>
// // // // //                                     &#10094; {/* Left Arrow */}
// // // // //                                 </button>
// // // // //                                 <img
// // // // //                                     src={imageUrls[currentIndex]} 
// // // // //                                     alt={`Product Image ${currentIndex + 1}`}
// // // // //                                     className={styles.productImage}
// // // // //                                     onError={(e) => { 
// // // // //                                         e.target.src = fallbackImageUrl; // Use fallback image on error
// // // // //                                     }}
// // // // //                                 />
// // // // //                                 <button className={styles.nextButton} onClick={nextImage}>
// // // // //                                     &#10095; {/* Right Arrow */}
// // // // //                                 </button>
// // // // //                             </div>
// // // // //                             <div className={styles.imageCounter}>
// // // // //                                 {currentIndex + 1} / {imageUrls.length}
// // // // //                             </div>
// // // // //                         </>
// // // // //                     ) : (
// // // // //                         <img 
// // // // //                             src={fallbackImageUrl} 
// // // // //                             alt="Fallback Image" 
// // // // //                             className={styles.productImage}
// // // // //                         />
// // // // //                     )}
// // // // //                 </div>

// // // // //                 <div className={styles.textContainer}>
// // // // //                     <h1>{product.name || "Product Name"}</h1>
// // // // //                     <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// // // // //                     <p><b>Product Description:</b></p>
// // // // //                     <p>{product.description || "Product Description"}</p>

// // // // //                     {/* Add to Cart button is enabled or disabled based on product availability */}
// // // // //                     <button
// // // // //                         onClick={() => {
// // // // //                             console.log('Add to Cart button clicked');
// // // // //                             addToCart();
// // // // //                         }}
// // // // //                         disabled={!product.available} // Disable the button if product is not available
// // // // //                     >
// // // // //                         {product.available ? "Add To Cart" : "Out of Stock"}
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </>
// // // // //     );
// // // // // }

// // // // // export default ProductDetailsBodySection;


// // // // import React, { useEffect, useState } from 'react';
// // // // import styles from './ProductDetailsBodySection.module.css';

// // // // function ProductDetailsBodySection() {
// // // //     const [product, setProduct] = useState(null);
// // // //     const [imageUrls, setImageUrls] = useState([]);
// // // //     const [filenames, setFilenames] = useState([]); // To store filenames
// // // //     const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index
// // // //     const fallbackImageUrl = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback image URL

// // // //     useEffect(() => {
// // // //         const storedProduct = localStorage.getItem('clickedProduct');
// // // //         console.log('Retrieved product from localStorage:', storedProduct);
// // // //         if (storedProduct) {
// // // //             const parsedProduct = JSON.parse(storedProduct);
// // // //             console.log('Parsed product:', parsedProduct);
// // // //             setProduct(parsedProduct);

// // // //             // Load images dynamically
// // // //             if (parsedProduct && parsedProduct.id) {
// // // //                 loadProductImages(parsedProduct.id);
// // // //             }
// // // //         } else {
// // // //             console.error('No product found in localStorage');
// // // //         }
// // // //     }, []);

// // // // const loadProductImages = async (productId) => {
// // // //     try {
// // // //         console.log(`Fetching filenames for product ID: ${productId}`);

// // // //         const response = await fetch(`http://localhost:5000/filenames?foldername=product_${productId}`);
// // // //         const data = await response.json();

// // // //         // Log the response from the backend
// // // //         console.log("Response from /filenames endpoint:", data);

// // // //         if (data.success && data.files.length > 0) {
// // // //             const basePath = `/uploads/product_${productId}/`; // Relative path to the product folder in the public directory
// // // //             const commonExtensions = ['.png', '.jpg', '.jpeg', '.gif']; // Common image file extensions

// // // //             const imageList = [];

// // // //             // Loop through each filename and try different extensions
// // // //             for (const filename of data.files) {
// // // //                 for (const ext of commonExtensions) {
// // // //                     const imageUrl = `${basePath}${filename}${ext}`;
// // // //                     const img = new Image();
// // // //                     img.src = imageUrl;

// // // //                     // If the image loads successfully, add it to the list and break the loop
// // // //                     img.onload = () => {
// // // //                         imageList.push(imageUrl);
// // // //                         setImageUrls([...imageList]); // Update state with successful image URLs
// // // //                         setFilenames([...data.files]); // Optionally track filenames
// // // //                         console.log(`Loaded image: ${imageUrl}`);
// // // //                     };

// // // //                     // Handle image loading errors (e.g., wrong extension)
// // // //                     img.onerror = () => {
// // // //                         console.log(`Failed to load image: ${imageUrl}`);
// // // //                     };
// // // //                 }
// // // //             }

// // // //             // Log the constructed image URLs for debugging
// // // //             console.log("Constructed image URLs:", imageList);
// // // //         } else {
// // // //             console.log('No images found for this product.');
// // // //         }
// // // //     } catch (error) {
// // // //         // Log any errors during the fetch process
// // // //         console.error('Error loading product images:', error);
// // // //     }
// // // // };



// // // //     // Log product availability and display only if the product is loaded
// // // //     useEffect(() => {
// // // //         if (product) {
// // // //             console.log('Product is Available: ' + product.available);
// // // //             console.log('Product is Displayed: ' + product.display);
// // // //         }
// // // //     }, [product]);

// // // //     // Function to go to the next image
// // // //     const nextImage = () => {
// // // //         setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
// // // //     };

// // // //     // Function to go to the previous image
// // // //     const prevImage = () => {
// // // //         setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
// // // //     };

// // // //     const addToCart = () => {
// // // //         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// // // //         console.log('Current cart items before adding:', cartItems);
// // // //         if (product) {
// // // //             cartItems.push(product);
// // // //             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // // //             console.log('Product added to cart:', product);
// // // //             console.log('Updated cart items:', cartItems);
// // // //             // Trigger cart to update
// // // //             window.dispatchEvent(new Event('storage'));
// // // //         } else {
// // // //             console.error('No product to add to cart');
// // // //         }
// // // //     };

// // // //     if (!product) {
// // // //         return <div>Loading...</div>;
// // // //     }

// // // //     return (
// // // //         <>
// // // //             <div className={styles.productDetailsBodyContainer}>
// // // //                 <div className={styles.imageContainer}>
// // // //                     {/* If no images are available, use the fallback image */}
// // // //                     {imageUrls.length > 0 ? (
// // // //                         <>
// // // //                             <div className={styles.slideshowContainer}>
// // // //                                 <button className={styles.prevButton} onClick={prevImage}>
// // // //                                     &#10094; {/* Left Arrow */}
// // // //                                 </button>
// // // //                                 <img
// // // //                                     src={imageUrls[currentIndex]} 
// // // //                                     alt={`Product Image ${currentIndex + 1}`}
// // // //                                     className={styles.productImage}
// // // //                                     onError={(e) => { 
// // // //                                         e.target.src = fallbackImageUrl; // Use fallback image on error
// // // //                                     }}
// // // //                                 />
// // // //                                 <button className={styles.nextButton} onClick={nextImage}>
// // // //                                     &#10095; {/* Right Arrow */}
// // // //                                 </button>
// // // //                             </div>
// // // //                             <div className={styles.imageCounter}>
// // // //                                 {currentIndex + 1} / {imageUrls.length}
// // // //                             </div>
// // // //                         </>
// // // //                     ) : (
// // // //                         <img 
// // // //                             src={fallbackImageUrl} 
// // // //                             alt="Fallback Image" 
// // // //                             className={styles.productImage}
// // // //                         />
// // // //                     )}
// // // //                 </div>

// // // //                 <div className={styles.textContainer}>
// // // //                     <h1>{product.name || "Product Name"}</h1>
// // // //                     <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// // // //                     <p><b>Product Description:</b></p>
// // // //                     <p>{product.description || "Product Description"}</p>

// // // //                     {/* Add to Cart button is enabled or disabled based on product availability */}
// // // //                     <button
// // // //                         onClick={() => {
// // // //                             console.log('Add to Cart button clicked');
// // // //                             addToCart();
// // // //                         }}
// // // //                         disabled={!product.available} // Disable the button if product is not available
// // // //                     >
// // // //                         {product.available ? "Add To Cart" : "Out of Stock"}
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         </>
// // // //     );
// // // // }

// // // // export default ProductDetailsBodySection;


// // // import React, { useEffect, useState } from 'react';
// // // import styles from './ProductDetailsBodySection.module.css';

// // // function ProductDetailsBodySection() {
// // //     const [product, setProduct] = useState(null);
// // //     const [imageUrls, setImageUrls] = useState([]);
// // //     const [filenames, setFilenames] = useState([]); // To store filenames
// // //     const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index
// // //     const fallbackImageUrl = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback image URL

// // //     useEffect(() => {
// // //         const storedProduct = localStorage.getItem('clickedProduct');
// // //         console.log('Retrieved product from localStorage:', storedProduct);
// // //         if (storedProduct) {
// // //             const parsedProduct = JSON.parse(storedProduct);
// // //             console.log('Parsed product:', parsedProduct);
// // //             setProduct(parsedProduct);

// // //             // Load images dynamically
// // //             if (parsedProduct && parsedProduct.id) {
// // //                 loadProductImages(parsedProduct.id);
// // //             }
// // //         } else {
// // //             console.error('No product found in localStorage');
// // //         }
// // //     }, []);

// // //     const loadProductImages = async (productId) => {
// // //         try {
// // //             console.log(`Fetching filenames for product ID: ${productId}`);

// // //             const response = await fetch(`http://localhost:5000/filenames?foldername=product_${productId}`);
// // //             const data = await response.json();

// // //             // Log the response from the backend
// // //             console.log("Response from /filenames endpoint:", data);

// // //             if (data.success && data.files.length > 0) {
// // //                 const basePath = `/uploads/product_${productId}/`; // Relative path to the product folder in the public directory
// // //                 const commonExtensions = ['.png', '.jpg', '.jpeg', '.gif']; // Common image file extensions

// // //                 const imageList = [];

// // //                 // Loop through each filename and try different extensions
// // //                 for (const filename of data.files) {
// // //                     for (const ext of commonExtensions) {
// // //                         const imageUrl = `${basePath}${filename}${ext}`;
// // //                         const img = new Image();
// // //                         img.src = imageUrl;

// // //                         // If the image loads successfully, add it to the list and break the loop
// // //                         img.onload = () => {
// // //                             imageList.push(imageUrl);
// // //                             setImageUrls([...imageList]); // Update state with successful image URLs
// // //                             setFilenames([...data.files]); // Optionally track filenames
// // //                             console.log(`Loaded image: ${imageUrl}`);
// // //                         };

// // //                         // Handle image loading errors (e.g., wrong extension)
// // //                         img.onerror = () => {
// // //                             console.log(`Failed to load image: ${imageUrl}`);
// // //                         };
// // //                     }
// // //                 }

// // //                 // Log the constructed image URLs for debugging
// // //                 console.log("Constructed image URLs:", imageList);
// // //             } else {
// // //                 console.log('No images found for this product.');
// // //             }
// // //         } catch (error) {
// // //             // Log any errors during the fetch process
// // //             console.error('Error loading product images:', error);
// // //         }
// // //     };

// // //     // Log product availability and display only if the product is loaded
// // //     useEffect(() => {
// // //         if (product) {
// // //             console.log('Product is Available: ' + product.available);
// // //             console.log('Product is Displayed: ' + product.display);
// // //         }
// // //     }, [product]);

// // //     // Log the current image URL whenever currentIndex changes
// // //     useEffect(() => {
// // //         if (imageUrls.length > 0) {
// // //             console.log(`Currently displaying image: ${imageUrls[currentIndex]}`);
// // //         }
// // //     }, [currentIndex, imageUrls]);

// // //     // Function to go to the next image
// // //     const nextImage = () => {
// // //         setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
// // //     };

// // //     // Function to go to the previous image
// // //     const prevImage = () => {
// // //         setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
// // //     };

// // //     const addToCart = () => {
// // //         const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
// // //         console.log('Current cart items before adding:', cartItems);
// // //         if (product) {
// // //             cartItems.push(product);
// // //             localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
// // //             console.log('Product added to cart:', product);
// // //             console.log('Updated cart items:', cartItems);
// // //             // Trigger cart to update
// // //             window.dispatchEvent(new Event('storage'));
// // //         } else {
// // //             console.error('No product to add to cart');
// // //         }
// // //     };

// // //     if (!product) {
// // //         return <div>Loading...</div>;
// // //     }

// // //     return (
// // //         <>
// // //             <div className={styles.productDetailsBodyContainer}>
// // //                 <div className={styles.imageContainer}>
// // //                     {/* If no images are available, use the fallback image */}
// // //                     {imageUrls.length > 0 ? (
// // //                         <>
// // //                             <div className={styles.slideshowContainer}>
// // //                                 <button className={styles.prevButton} onClick={prevImage}>
// // //                                     &#10094; {/* Left Arrow */}
// // //                                 </button>
// // //                                 <img
// // //                                     src={imageUrls[currentIndex]} 
// // //                                     alt={`Product Image ${currentIndex + 1}`}
// // //                                     className={styles.productImage}
// // //                                     onError={(e) => { 
// // //                                         e.target.src = fallbackImageUrl; // Use fallback image on error
// // //                                     }}
// // //                                 />
// // //                                 <button className={styles.nextButton} onClick={nextImage}>
// // //                                     &#10095; {/* Right Arrow */}
// // //                                 </button>
// // //                             </div>
// // //                             <div className={styles.imageCounter}>
// // //                                 {currentIndex + 1} / {imageUrls.length}
// // //                             </div>
// // //                         </>
// // //                     ) : (
// // //                         <img 
// // //                             src={fallbackImageUrl} 
// // //                             alt="Fallback Image" 
// // //                             className={styles.productImage}
// // //                         />
// // //                     )}
// // //                 </div>

// // //                 <div className={styles.textContainer}>
// // //                     <h1>{product.name || "Product Name"}</h1>
// // //                     <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// // //                     <p><b>Product Description:</b></p>
// // //                     <p>{product.description || "Product Description"}</p>

// // //                     {/* Add to Cart button is enabled or disabled based on product availability */}
// // //                     <button
// // //                         onClick={() => {
// // //                             console.log('Add to Cart button clicked');
// // //                             addToCart();
// // //                         }}
// // //                         disabled={!product.available} // Disable the button if product is not available
// // //                     >
// // //                         {product.available ? "Add To Cart" : "Out of Stock"}
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // }

// // // export default ProductDetailsBodySection;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios'; // Add Axios for making requests
// // import styles from './ProductDetailsBodySection.module.css';

// // function ProductDetailsBodySection() {
// //     const [product, setProduct] = useState(null);
// //     const [imageUrls, setImageUrls] = useState([]);
// //     const [filenames, setFilenames] = useState([]); // To store filenames
// //     const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index
// //     const [selectedFile, setSelectedFile] = useState(null); // For image upload
// //     const [popupMessage, setPopupMessage] = useState(''); // For success/error messages

// //     const fallbackImageUrl = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback image URL

// //     useEffect(() => {
// //         const storedProduct = localStorage.getItem('clickedProduct');
// //         if (storedProduct) {
// //             const parsedProduct = JSON.parse(storedProduct);
// //             setProduct(parsedProduct);

// //             if (parsedProduct && parsedProduct.id) {
// //                 loadProductImages(parsedProduct.id);
// //             }
// //         } else {
// //             console.error('No product found in localStorage');
// //         }
// //     }, []);


// //     const loadProductImages = async (productId) => {
// //         try {
// //             console.log(`Fetching filenames for product ID: ${productId}`);

// //             const response = await fetch(`http://localhost:5000/filenames?foldername=product_${productId}`);
// //             const data = await response.json();

// //             // Log the response from the backend
// //             console.log("Response from /filenames endpoint:", data);

// //             if (data.success && data.files.length > 0) {
// //                 const basePath = `/uploads/product_${productId}/`; // Relative path to the product folder in the public directory
// //                 const commonExtensions = ['.png', '.jpg', '.jpeg', '.gif']; // Common image file extensions

// //                 const imageList = [];

// //                 // Loop through each filename and try different extensions
// //                 for (const filename of data.files) {
// //                     for (const ext of commonExtensions) {
// //                         const imageUrl = `${basePath}${filename}${ext}`;
// //                         const img = new Image();
// //                         img.src = imageUrl;

// //                         // If the image loads successfully, add it to the list and break the loop
// //                         img.onload = () => {
// //                             imageList.push(imageUrl);
// //                             setImageUrls([...imageList]); // Update state with successful image URLs
// //                             setFilenames([...data.files]); // Optionally track filenames
// //                             console.log(`Loaded image: ${imageUrl}`);
// //                         };

// //                         // Handle image loading errors (e.g., wrong extension)
// //                         img.onerror = () => {
// //                             console.log(`Failed to load image: ${imageUrl}`);
// //                         };
// //                     }
// //                 }

// //                 // Log the constructed image URLs for debugging
// //                 console.log("Constructed image URLs:", imageList);
// //             } else {
// //                 console.log('No images found for this product.');
// //             }
// //         } catch (error) {
// //             // Log any errors during the fetch process
// //             console.error('Error loading product images:', error);
// //         }
// //     };

// //     const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
// //     const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);

// //     // Upload Image Handler
// //     const handleUpload = async () => {
// //         if (!selectedFile || !product) return;
// //         const formDataImage = new FormData();
// //         formDataImage.append('images', selectedFile); // Append file
// //         formDataImage.append('filename', `product_${product.id}`); // Specify product ID
// //         formDataImage.append('foldername', `product_${product.id}`);

// //         try {
// //             const response = await axios.post('http://localhost:5000/upload', formDataImage, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data',
// //                 },
// //             });
// //             if (response.data.success) {
// //                 setPopupMessage('Image uploaded successfully!');
// //                 loadProductImages(product.id); // Reload images after upload
// //             } else {
// //                 setPopupMessage('Error uploading image: ' + response.data.message);
// //             }
// //         } catch (error) {
// //             console.error('Error uploading image:', error);
// //             setPopupMessage('Error uploading image');
// //         }
// //     };

// //     // Update Image Handler
// //     const handleUpdate = async () => {
// //         if (!selectedFile || !product || filenames.length === 0) return;
// //         const formData = new FormData();
// //         formData.append('file', selectedFile); // New image
// //         formData.append('filename', filenames[currentIndex]); // Filename to overwrite
// //         formData.append('foldername', `product_${product.id}`);

// //         try {
// //             const response = await axios.post('http://localhost:5000/overwrite-file', formData, {
// //                 headers: {
// //                     'Content-Type': 'multipart/form-data',
// //                 },
// //             });
// //             if (response.data.success) {
// //                 setPopupMessage('Image updated successfully!');
// //                 loadProductImages(product.id); // Reload images after update
// //             } else {
// //                 setPopupMessage('Error updating image: ' + response.data.message);
// //             }
// //         } catch (error) {
// //             console.error('Error updating image:', error);
// //             setPopupMessage('Error updating image');
// //         }
// //     };

// //     // Delete Image Handler
// //     const handleDelete = async () => {
// //         if (!product || filenames.length === 0) return;
// //         try {
// //             const response = await axios.delete('http://localhost:5000/delete-file', {
// //                 data: {
// //                     deletedFilename: filenames[currentIndex],
// //                     foldername: `product_${product.id}`,
// //                 },
// //             });
// //             if (response.data.success) {
// //                 setPopupMessage('Image deleted successfully!');
// //                 loadProductImages(product.id); // Reload images after delete
// //             } else {
// //                 setPopupMessage('Error deleting image: ' + response.data.message);
// //             }
// //         } catch (error) {
// //             console.error('Error deleting image:', error);
// //             setPopupMessage('Error deleting image');
// //         }
// //     };

// //     if (!product) return <div>Loading...</div>;

// //     return (
// //         <div className={styles.productDetailsBodyContainer}>
// //             <div className={styles.imageContainer}>
// //                 {imageUrls.length > 0 ? (
// //                     <>
// //                         <div className={styles.slideshowContainer}>
// //                             <button className={styles.prevButton} onClick={prevImage}>&#10094;</button>
// //                             <img
// //                                 src={imageUrls[currentIndex]}
// //                                 alt={`Product Image ${currentIndex + 1}`}
// //                                 className={styles.productImage}
// //                                 onError={(e) => e.target.src = fallbackImageUrl}
// //                             />
// //                             <button className={styles.nextButton} onClick={nextImage}>&#10095;</button>
// //                         </div>
// //                         <div className={styles.imageCounter}>
// //                             {currentIndex + 1} / {imageUrls.length}
// //                         </div>
// //                     </>
// //                 ) : (
// //                     <img src={fallbackImageUrl} alt="Fallback Image" className={styles.productImage} />
// //                 )}

// //                             <div className={styles.fileUploadSection}>
// //             <input
// //                 type="file"
// //                 onChange={(e) => setSelectedFile(e.target.files[0])}
// //             />
// //             <ul>
// //                 <li><button onClick={handleUpload}>Upload Image</button></li>
// //                 <li><button onClick={handleUpdate}>Update Selected Image</button></li>
// //                 <li><button onClick={handleDelete}>Delete Selected Image</button></li>
// //             </ul>
// //             </div>
// //             </div>

            


        
// //             <div className={styles.textContainer}>
// //                 <h1>{product.name || "Product Name"}</h1>
// //                 <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
// //                 <p><b>Product Description:</b></p>
// //                 <p>{product.description || "Product Description"}</p>

// //                 <button
// //                     onClick={() => addToCart()}
// //                     disabled={!product.available}
// //                 >
// //                     {product.available ? "Add To Cart" : "Out of Stock"}
// //                 </button>
// //                 {popupMessage && <p>{popupMessage}</p>}
// //             </div>
            
// //         </div>
// //     );
// // }

// // export default ProductDetailsBodySection;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Add Axios for making requests
// import styles from './ProductDetailsBodySection.module.css';
// import checkOwnership from '../../api/checkOwnership.js'; // Import checkOwnership function

// function ProductDetailsBodySection() {
//     const [product, setProduct] = useState(null);
//     const [imageUrls, setImageUrls] = useState([]);
//     const [filenames, setFilenames] = useState([]); // To store filenames
//     const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index
//     const [selectedFile, setSelectedFile] = useState(null); // For image upload
//     const [popupMessage, setPopupMessage] = useState(''); // For success/error messages

//     const [ownsProduct, setOwnsProduct] = useState(false); // Check ownership
//     const [canAccessAddButton, setCanAccessAddButton] = useState(false); // Control access for buttons
//     const [canUpdateImage, setCanUpdateImage] = useState(false); // Specifically for update-only access

//     const fallbackImageUrl = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback image URL

//     useEffect(() => {
//         const storedProduct = localStorage.getItem('clickedProduct');
//         if (storedProduct) {
//             const parsedProduct = JSON.parse(storedProduct);
//             setProduct(parsedProduct);

//             if (parsedProduct && parsedProduct.id) {
//                 loadProductImages(parsedProduct.id);
//             }
//         } else {
//             console.error('No product found in localStorage');
//         }

//         // Check access based on adminState and ownership
//         const checkAccess = async () => {
//             const adminState = localStorage.getItem('adminState');
//             const ownerId = localStorage.getItem('owner');
//             const storedProduct = localStorage.getItem('clickedProduct');

//             if (storedProduct && ownerId) {
//                 const product = JSON.parse(storedProduct);

//                 const ownershipStatus = await checkOwnership(ownerId, product.id || product.product_id);
//                 setOwnsProduct(ownershipStatus);

//                 // AdminState logic: 
//                 // 0: Full access
//                 // 1: Access if owns the product
//                 // 2: Can only update the image if owns the product
//                 if (adminState) {
//                     const parsedAdminState = parseInt(adminState, 10);
//                     if (parsedAdminState === 0 || (parsedAdminState === 1 && ownershipStatus)) {
//                         setCanAccessAddButton(true);
//                     } else if (parsedAdminState === 2 && ownershipStatus) {
//                         setCanUpdateImage(true); // Only allow update access
//                     } else {
//                         setCanAccessAddButton(false);
//                         setCanUpdateImage(false);
//                     }
//                 } else {
//                     setCanAccessAddButton(false);
//                     setCanUpdateImage(false);
//                 }
//             } else {
//                 setCanAccessAddButton(false);
//                 setCanUpdateImage(false);
//             }
//         };

//         checkAccess();
//     }, []);

//     const loadProductImages = async (productId) => {
//         try {
//             console.log(`Fetching filenames for product ID: ${productId}`);

//             const response = await fetch(`http://localhost:5000/filenames?foldername=product_${productId}`);
//             const data = await response.json();

//             if (data.success && data.files.length > 0) {
//                 const basePath = `/uploads/product_${productId}/`;
//                 const commonExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

//                 const imageList = [];

//                 for (const filename of data.files) {
//                     for (const ext of commonExtensions) {
//                         const imageUrl = `${basePath}${filename}${ext}`;
//                         const img = new Image();
//                         img.src = imageUrl;

//                         img.onload = () => {
//                             imageList.push(imageUrl);
//                             setImageUrls([...imageList]);
//                             setFilenames([...data.files]);
//                             console.log(`Loaded image: ${imageUrl}`);
//                         };

//                         img.onerror = () => {
//                             console.log(`Failed to load image: ${imageUrl}`);
//                         };
//                     }
//                 }
//             } else {
//                 console.log('No images found for this product.');
//             }
//         } catch (error) {
//             console.error('Error loading product images:', error);
//         }
//     };

//     const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
//     const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);

//     // Upload Image Handler
//     const handleUpload = async () => {
//         if (!selectedFile || !product) return;
//         const formDataImage = new FormData();
//         formDataImage.append('images', selectedFile); // Append file
//         formDataImage.append('filename', `product_${product.id}`); // Specify product ID
//         formDataImage.append('foldername', `product_${product.id}`);

//         try {
//             const response = await axios.post('http://localhost:5000/upload', formDataImage, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             if (response.data.success) {
//                 setPopupMessage('Image uploaded successfully!');
//                 loadProductImages(product.id); // Reload images after upload
//             } else {
//                 setPopupMessage('Error uploading image: ' + response.data.message);
//             }
//         } catch (error) {
//             console.error('Error uploading image:', error);
//             setPopupMessage('Error uploading image');
//         }
//     };

//     // Update Image Handler
//     const handleUpdate = async () => {
//         if (!selectedFile || !product || filenames.length === 0) return;
//         const formData = new FormData();
//         formData.append('file', selectedFile); // New image
//         formData.append('filename', filenames[currentIndex]); // Filename to overwrite
//         formData.append('foldername', `product_${product.id}`);

//         try {
//             const response = await axios.post('http://localhost:5000/overwrite-file', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             if (response.data.success) {
//                 setPopupMessage('Image updated successfully!');
//                 loadProductImages(product.id); // Reload images after update
//             } else {
//                 setPopupMessage('Error updating image: ' + response.data.message);
//             }
//         } catch (error) {
//             console.error('Error updating image:', error);
//             setPopupMessage('Error updating image');
//         }
//     };

//     // Delete Image Handler
//     const handleDelete = async () => {
//         if (!product || filenames.length === 0) return;
//         try {
//             const response = await axios.delete('http://localhost:5000/delete-file', {
//                 data: {
//                     deletedFilename: filenames[currentIndex],
//                     foldername: `product_${product.id}`,
//                 },
//             });
//             if (response.data.success) {
//                 setPopupMessage('Image deleted successfully!');
//                 loadProductImages(product.id); // Reload images after delete
//             } else {
//                 setPopupMessage('Error deleting image: ' + response.data.message);
//             }
//         } catch (error) {
//             console.error('Error deleting image:', error);
//             setPopupMessage('Error deleting image');
//         }
//     };

//     if (!product) return <div>Loading...</div>;

//     return (
//         <div className={styles.productDetailsBodyContainer}>
//             <div className={styles.imageContainer}>
//                 {imageUrls.length > 0 ? (
//                     <>
//                         <div className={styles.slideshowContainer}>
//                             <button className={styles.prevButton} onClick={prevImage}>&#10094;</button>
//                             <img
//                                 src={imageUrls[currentIndex]}
//                                 alt={`Product Image ${currentIndex + 1}`}
//                                 className={styles.productImage}
//                                 onError={(e) => e.target.src = fallbackImageUrl}
//                             />
//                             <button className={styles.nextButton} onClick={nextImage}>&#10095;</button>
//                         </div>
//                         <div className={styles.imageCounter}>
//                             {currentIndex + 1} / {imageUrls.length}
//                         </div>
//                     </>
//                 ) : (
//                     <img src={fallbackImageUrl} alt="Fallback Image" className={styles.productImage} />
//                 )}

//                 {canAccessAddButton && (
//                     <div className={styles.fileUploadSection}>
//                         <input
//                             type="file"
//                             onChange={(e) => setSelectedFile(e.target.files[0])}
//                         />
//                         <ul>
//                             <li><button onClick={handleUpload}>Upload Image</button></li>
//                             <li><button onClick={handleUpdate}>Update Selected Image</button></li>
//                             <li><button onClick={handleDelete}>Delete Selected Image</button></li>
//                         </ul>
//                     </div>
//                 )}

//                 {canUpdateImage && !canAccessAddButton && (
//                     <div className={styles.fileUploadSection}>
//                         <input
//                             type="file"
//                             onChange={(e) => setSelectedFile(e.target.files[0])}
//                         />
//                         <ul>
//                             <li><button onClick={handleUpdate}>Update Selected Image</button></li>
//                         </ul>
//                     </div>
//                 )}
//             </div>

//             <div className={styles.textContainer}>
//                 <h1>{product.name || "Product Name"}</h1>
//                 <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
//                 <p><b>Product Description:</b></p>
//                 <p>{product.description || "Product Description"}</p>

//                 <button
//                     onClick={() => addToCart()}
//                     disabled={!product.available}
//                 >
//                     {product.available ? "Add To Cart" : "Out of Stock"}
//                 </button>
//                 {popupMessage && <p>{popupMessage}</p>}
//             </div>
//         </div>
//     );
// }

// export default ProductDetailsBodySection;


import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add Axios for making requests
import styles from './ProductDetailsBodySection.module.css';
import checkOwnership from '../../api/checkOwnership.js'; // Import checkOwnership function

function ProductDetailsBodySection() {
    const [product, setProduct] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [filenames, setFilenames] = useState([]); // To store filenames
    const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index
    const [selectedFile, setSelectedFile] = useState(null); // For image upload
    const [popupMessage, setPopupMessage] = useState(''); // For success/error messages

    const [ownsProduct, setOwnsProduct] = useState(false); // Check ownership
    const [canAccessAddButton, setCanAccessAddButton] = useState(false); // Control access for buttons
    const [canUpdateImage, setCanUpdateImage] = useState(false); // Specifically for update-only access

    const fallbackImageUrl = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Fallback image URL

    useEffect(() => {
        const storedProduct = localStorage.getItem('clickedProduct');
        if (storedProduct) {
            const parsedProduct = JSON.parse(storedProduct);
            setProduct(parsedProduct);

            if (parsedProduct && parsedProduct.id) {
                loadProductImages(parsedProduct.id);
            }
        } else {
            console.error('No product found in localStorage');
        }

        // Check access based on adminState and ownership
        const checkAccess = async () => {
            const adminState = localStorage.getItem('adminState');
            const ownerId = localStorage.getItem('owner');
            const storedProduct = localStorage.getItem('clickedProduct');

            if (storedProduct && ownerId) {
                const product = JSON.parse(storedProduct);

                const ownershipStatus = await checkOwnership(ownerId, product.id || product.product_id);
                setOwnsProduct(ownershipStatus);

                // AdminState logic: 
                // 0: Full access
                // 1: Access if owns the product
                // 2: Can only update the image if owns the product
                if (adminState) {
                    const parsedAdminState = parseInt(adminState, 10);
                    if (parsedAdminState === 0 || (parsedAdminState === 1 && ownershipStatus)) {
                        setCanAccessAddButton(true);
                    } else if (parsedAdminState === 2 && ownershipStatus) {
                        setCanUpdateImage(true); // Only allow update access
                    } else {
                        setCanAccessAddButton(false);
                        setCanUpdateImage(false);
                    }
                } else {
                    setCanAccessAddButton(false);
                    setCanUpdateImage(false);
                }
            } else {
                setCanAccessAddButton(false);
                setCanUpdateImage(false);
            }
        };

        checkAccess();
    }, []);

    const loadProductImages = async (productId) => {
        try {
            console.log(`Fetching filenames for product ID: ${productId}`);

            const response = await fetch(`http://localhost:5000/filenames?foldername=product_${productId}`);
            const data = await response.json();

            if (data.success && data.files.length > 0) {
                const basePath = `/uploads/product_${productId}/`;
                const commonExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

                const imageList = [];

                for (const filename of data.files) {
                    for (const ext of commonExtensions) {
                        const imageUrl = `${basePath}${filename}${ext}`;
                        const img = new Image();
                        img.src = imageUrl;

                        img.onload = () => {
                            imageList.push(imageUrl);
                            setImageUrls([...imageList]);
                            setFilenames([...data.files]);
                            console.log(`Loaded image: ${imageUrl}`);
                        };

                        img.onerror = () => {
                            // console.log(`Failed to load image: ${imageUrl}`);
                        };
                    }
                }
            } else {
                console.log('No images found for this product.');
            }
        } catch (error) {
            console.error('Error loading product images:', error);
        }
    };

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        console.log('Current cart items before adding:', cartItems);
        if (product) {
            cartItems.push(product);
            localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
            console.log('Product added to cart:', product);
            console.log('Updated cart items:', cartItems);
            // Trigger cart to update
            window.dispatchEvent(new Event('storage'));
        } else {
            console.error('No product to add to cart');
        }
    };

    const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);

    // Upload Image Handler
    const handleUpload = async () => {
        if (!selectedFile || !product) return;
        const formDataImage = new FormData();
        formDataImage.append('images', selectedFile); // Append file
        formDataImage.append('filename', `${product.id}`); // Specify product ID
        formDataImage.append('foldername', `product_${product.id}`);

        try {
            const response = await axios.post('http://localhost:5000/upload', formDataImage, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                setPopupMessage('Image uploaded successfully!');
                loadProductImages(product.id); // Reload images after upload
            } else {
                setPopupMessage('Error uploading image: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            setPopupMessage('Error uploading image');
        }
    };

    // Update Image Handler with confirmation
    const handleUpdate = async () => {
        if (!selectedFile || !product || filenames.length === 0) return;

        // Confirm before updating
        const confirmUpdate = window.confirm("Are you sure you want to update this image?");
        if (!confirmUpdate) return; // If user cancels, exit the function

        const formData = new FormData();
        formData.append('file', selectedFile); // New image
        formData.append('filename', filenames[currentIndex]); // Filename to overwrite
        formData.append('foldername', `product_${product.id}`);

        try {
            const response = await axios.post('http://localhost:5000/overwrite-file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.success) {
                setPopupMessage('Image updated successfully!');
                loadProductImages(product.id); // Reload images after update
                window.location.reload();
            } else {
                setPopupMessage('Error updating image: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error updating image:', error);
            setPopupMessage('Error updating image');
        }
    };

    // Delete Image Handler with confirmation
    const handleDelete = async () => {
        if (!product || filenames.length === 0) return;

        // Confirm before deleting
        const confirmDelete = window.confirm("Are you sure you want to delete this image?");
        if (!confirmDelete) return; // If user cancels, exit the function

        try {
            const response = await axios.delete('http://localhost:5000/delete-file', {
                data: {
                    deletedFilename: filenames[currentIndex],
                    foldername: `product_${product.id}`,
                },
            });
            if (response.data.success) {
                setPopupMessage('Image deleted successfully!');
                loadProductImages(product.id); // Reload images after delete
                window.location.reload();

            } else {
                setPopupMessage('Error deleting image: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error deleting image:', error);
            setPopupMessage('Error deleting image');
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className={styles.productDetailsBodyContainer}>
            <div className={styles.imageContainer}>
                {imageUrls.length > 0 ? (
                    <>
                        <div className={styles.slideshowContainer}>
                            <button className={styles.prevButton} onClick={prevImage}>&#10094;</button>
                            <img
                                src={imageUrls[currentIndex]}
                                alt={`Product Image ${currentIndex + 1}`}
                                className={styles.productImage}
                                onError={(e) => e.target.src = fallbackImageUrl}
                            />
                            <button className={styles.nextButton} onClick={nextImage}>&#10095;</button>
                        </div>
                        <div className={styles.imageCounter}>
                            {currentIndex + 1} / {imageUrls.length}
                        </div>
                    </>
                ) : (
                    <img src={fallbackImageUrl} alt="Fallback Image" className={styles.productImage} />
                )}

                {canAccessAddButton && (
                    <div className={styles.fileUploadSection}>
                        <input
                            type="file"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        <ul>
                            <li><button onClick={handleUpload}>Upload Image</button></li>
                            <li><button onClick={handleUpdate}>Update Selected Image</button></li>
                            <li><button onClick={handleDelete}>Delete Selected Image</button></li>
                        </ul>
                    </div>
                )}

                {canUpdateImage && !canAccessAddButton && (
                    <div className={styles.fileUploadSection}>
                        <input
                            type="file"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                        <ul>
                            <li><button onClick={handleUpdate}>Update Selected Image</button></li>
                        </ul>
                    </div>
                )}
            </div>

            <div className={styles.textContainer}>
                <h1>{product.name || "Product Name"}</h1>
                <p><b>Price:</b> {product.price ? `$${Number(product.price).toFixed(2)}` : "Price not available"}</p>
                <p><b>Product Description:</b></p>
                <p>{product.description || "Product Description"}</p>

                <button
                    onClick={() => addToCart()}
                    disabled={!product.available}
                >
                    {product.available ? "Add To Cart" : "Out of Stock"}
                </button>
                {popupMessage && <p>{popupMessage}</p>}
            </div>
        </div>
    );
}

export default ProductDetailsBodySection;
