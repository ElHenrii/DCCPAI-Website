// // // import styles from './OurCacaoSection.module.css';
// // // import React, { useEffect, useState } from 'react';

// // // import ProductCard2 from '../../ProductCard2/ProductCard2.jsx'
// // // import { getProducts } from '../../api/getProduct.js';


// // // function OurCacaoSection() {

// // //   const [products, setProducts] = useState([]);

// // //   useEffect(() => {
// // //     const loadProducts = async () => {
// // //       try {
// // //         const productData = await getProducts();
// // //         setProducts(productData);  // Set products fetched from the API
// // //         console.log(productData + "");
// // //       } catch (error) {
// // //         setError(error.message);  // Handle errors
// // //       }
// // //     };

// // //     loadProducts();

// // //   }, []);

// // //   const authToken = JSON.parse(localStorage.getItem('authToken')); // Convert to boolean
  
// // //   const filteredProducts = products
// // //         .filter((product) => {
// // //             // Logic: If product.display is false, only show if authToken is true
// // //             // Otherwise, display the product as usual
// // //             if (!Boolean(Number(product.display))) {
// // //                 return authToken;
// // //             }
// // //             return true;  // Show product if display is true
// // //         })
// // //         .filter((product) => !Boolean(Number(product.product_deleted)))  // Filter out products where display is false


  

// // //   return (
// // //     <div className={styles.ourCacaoSection}>

// // //       <div className={styles.ourCacaoSectionTitle}>
// // //         <div className={styles.ourCacaoMainText}>
// // //           Our Cacao
// // //         </div>

// // //         <div className={styles.ourCacaoSubText}>
// // //           Distinctly Davao. (make this a carousel or not)
// // //         </div>
// // //       </div>
      
// // //       <div className={styles.ourCacaoProducts}>
// // //         <ProductCard2 /> 
// // //         <ProductCard2 /> 
// // //         <ProductCard2 /> 

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default OurCacaoSection;


// // import styles from './OurCacaoSection.module.css';
// // import React, { useEffect, useState, useRef } from 'react';
// // import ProductCard2Small from '../../ProductCard2Small/ProductCard2Small.jsx';
// // import { getProducts } from '../../api/getProduct.js';

// // function OurCacaoSection() {
// //   const [products, setProducts] = useState([]);
// //   const [currentIndex, setCurrentIndex] = useState(0);  // Track the current index of the carousel
// //   const carouselRef = useRef(null);

// //   useEffect(() => {
// //     const loadProducts = async () => {
// //       try {
// //         const productData = await getProducts();
// //         setProducts(productData.filter(product => !Boolean(Number(product.product_deleted))));  // Filter out deleted products
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     loadProducts();
// //   }, []);

// //   // Automatic carousel transition every 2 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) =>
// //         (prevIndex + 3) % products.length  // Move to the next set of 3 products
// //       );
// //     }, 2000);

// //     return () => clearInterval(interval);  // Cleanup interval on component unmount
// //   }, [products.length]);

// //   const getDisplayedProducts = () => {
// //     // Slice the products array to display 3 items at a time
// //     return products.slice(currentIndex, currentIndex + 3);
// //   };

// //   return (
// //     <div className={styles.ourCacaoSection}>
// //       <div className={styles.ourCacaoSectionTitle}>
// //         <div className={styles.ourCacaoMainText}>
// //           Our Cacao
// //         </div>
// //         <div className={styles.ourCacaoSubText}>
// //           Distinctly Davao.
// //         </div>
// //       </div>

// //       <div className={styles.swiperContainer} ref={carouselRef}>
// //         <div className={styles.carouselInner}>
// //           {getDisplayedProducts().map((product) => (
// //             <div className={styles.swiperSlide} key={product.product_id}>
// //               <ProductCard2Small
// //                 id={Number(product.product_id)}
// //                 name={product.product_name}
// //                 description={product.product_description}
// //                 price={product.product_price}
// //                 category_id={Number(product.category_id)}
// //                 display={Boolean(Number(product.display))}
// //                 available={Boolean(Number(product.available))}
// //                 product_deleted={Boolean(Number(product.product_deleted))}
// //                 buttonLink="ProductDetails"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default OurCacaoSection;

// import styles from './OurCacaoSection.module.css';
// import React, { useEffect, useState, useRef } from 'react';
// import ProductCard2Small from '../../ProductCard2Small/ProductCard2Small.jsx';
// import { getProducts } from '../../api/getProduct.js';

// function OurCacaoSection() {
//   const [products, setProducts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);  // Track the current index of the carousel
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const productData = await getProducts();
//         setProducts(productData.filter(product => !Boolean(Number(product.product_deleted))));  // Filter out deleted products
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Automatic carousel transition every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         (prevIndex + 3) % products.length  // Move to the next set of 3 products
//       );
//     }, 2000);

//     return () => clearInterval(interval);  // Cleanup interval on component unmount
//   }, [products.length]);

//   const getDisplayedProducts = () => {
//     // Slice the products array to display 3 items at a time
//     return products.slice(currentIndex, currentIndex + 3);
//   };

//   return (
//     <div className={styles.ourCacaoSection}>
//       <div className={styles.ourCacaoSectionTitle}>
//         <div className={styles.ourCacaoMainText}>
//           Our Cacao
//         </div>
//         <div className={styles.ourCacaoSubText}>
//           Distinctly Davao.
//         </div>
//       </div>

//       <div className={styles.swiperContainer} ref={carouselRef}>
//         <div className={styles.carouselInner}>
//           {getDisplayedProducts().map((product) => (
//             <div className={styles.swiperSlide} key={product.product_id}>
//               <ProductCard2Small
//                 id={Number(product.product_id)}
//                 name={product.product_name}
//                 description={product.product_description}
//                 price={product.product_price}
//                 category_id={Number(product.category_id)}
//                 display={Boolean(Number(product.display))}
//                 available={Boolean(Number(product.available))}
//                 product_deleted={Boolean(Number(product.product_deleted))}
//                 buttonLink="ProductDetails"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurCacaoSection;


import styles from './OurCacaoSection.module.css';
import React, { useEffect, useState, useRef } from 'react';
import ProductCard2Small from '../../ProductCard2Small/ProductCard2Small.jsx';
import { getProducts } from '../../api/getProduct.js';

function OurCacaoSection() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);  // Track the current index of the carousel

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productData = await getProducts();
        setProducts(productData.filter(product => !Boolean(Number(product.product_deleted))));  // Filter out deleted products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, []);

  // Automatic carousel transition every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % Math.ceil(products.length / 3)  // Move to the next set of products (3 per set)
      );
    }, 3200);

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, [products.length]);

  // Calculate the transform value for horizontal sliding
  const translateXValue = -(currentIndex * 100);  // Shift the container left for each set of 3 products

  return (
    <div className={styles.ourCacaoSection}>
      <div className={styles.ourCacaoSectionTitle}>
        <div className={styles.ourCacaoMainText}>
          Our Cacao
        </div>
        <div className={styles.ourCacaoSubText}>
          Distinctly Davao.
        </div>
      </div>

      <div className={styles.swiperContainer}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(${translateXValue}%)` }}  // Horizontal sliding effect
        >
          {products.map((product, index) => (
            <div className={styles.swiperSlide} key={product.product_id}>
              <ProductCard2Small
                id={Number(product.product_id)}
                name={product.product_name}
                description={product.product_description}
                price={product.product_price}
                category_id={Number(product.category_id)}
                display={Boolean(Number(product.display))}
                available={Boolean(Number(product.available))}
                product_deleted={Boolean(Number(product.product_deleted))}
                buttonLink="ProductDetails"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCacaoSection;
