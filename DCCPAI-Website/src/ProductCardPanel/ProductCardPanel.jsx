// // import React from 'react';
// // import styles from './ProductCardPanel.module.css';
// // import TextButton from '../TextButton/TextButton';
// // import { Link } from "react-router-dom";


// // function ProductCardPanel() {

// //     return (
// //         <>
// //         <div className={styles.panelContainer}>

// //             <div className={styles.topRow}>
// //                 <button className={styles.xButton}>&times;</button>
// //             </div>

// //             <div className={styles.productCardPanelGrid}>

// //             <div className={styles.leftSideTop}>

// //                 <div className={styles.imagePreview}>
// //                     <h1>Image Preview Here</h1>
// //                 </div>

// //             </div>
            
// //             <div className={styles.rightSide}> 

// //                 <div className={styles.panelInputDiv} >
// //                     <input type="text" placeholder="Name" className={styles.panelInput}>
// //                     </input>
// //                 </div>

// //                 <div className={styles.panelInputDiv} >
// //                     <input type="text" placeholder="Description" className={styles.panelInput}>
// //                     </input>
// //                 </div>

// //                 <div className={styles.panelInputDiv} >
// //                     <input type="text" placeholder="Category" className={styles.panelInput}>
// //                     </input>
// //                 </div>

// //             </div>

// //             <div className={styles.leftSideBottom}>

// //                     <div className={styles.nameAndPrice}>
// //                         <h1>Name/Price</h1>
// //                     </div>
// //                     <div className={styles.price}>
// //                         <h1>Price</h1>
// //                     </div>

// //                 </div>

// //             </div>

// //             <div className={styles.bottomButtons}>  
// //                 <TextButton buttonText="Cancel" /> 
// //                 <TextButton buttonText="Add" /> 
// //             </div>

// //         </div>
// //         </>
// //     );
// // }


// // export default ProductCardPanel;


// // // import React, { useState, useEffect } from 'react';
// // // import PropTypes from 'prop-types';
// // // import fetchCategories from '../api/fetchCategories';
// // // import styles from './ProductCardPanel.module.css';
// // // import TextButton from '../TextButton/TextButton';
// // // import axios from 'axios';

// // // function ProductCardPanel({ onClose }) {
// // //     const [formData, setFormData] = useState({
// // //         name: '',
// // //         description: '',
// // //         category_id: '',  // Storing the category ID
// // //         price: '',
// // //         display: true, // Default value for display field
// // //         available: true, // Default value for available field
// // //     });
// // //     const [categories, setCategories] = useState([]);
// // //     const [isNewCategory, setIsNewCategory] = useState(false);
// // //     const [newCategoryName, setNewCategoryName] = useState('');
// // //     const [isCacaoProduct, setIsCacaoProduct] = useState(false); // For the cacao product status

// // //     useEffect(() => {
// // //         fetchCategories()
// // //             .then(data => {
// // //                 console.log('Fetched categories:', data);
// // //                 setCategories(data);
// // //             })
// // //             .catch(console.error);
// // //     }, []);

// // //     const handleInputChange = (e) => {
// // //         const { name, value, type, checked } = e.target;
// // //         setFormData({
// // //             ...formData,
// // //             [name]: type === 'checkbox' ? checked : value,
// // //         });
// // //     };

// // //     const handleCategoryChange = (e) => {
// // //         const selectedCategoryId = e.target.value;
// // //         if (selectedCategoryId === "new") {
// // //             setIsNewCategory(true); 
// // //             setNewCategoryName('');
// // //             setFormData({
// // //                 ...formData,
// // //                 category_id: '', // Reset category_id when creating a new category
// // //             });
// // //         } else {
// // //             setIsNewCategory(false);
// // //             setFormData({
// // //                 ...formData,
// // //                 category_id: selectedCategoryId, // Using the category_id directly from fetched data
// // //             });
// // //         }
// // //     };

// // //     const handleNewCategoryChange = (e) => {
// // //         const value = e.target.value;
// // //         setNewCategoryName(value);
// // //     };

// // //     // Separate handlers for each switch to toggle their state
// // //     const handleCacaoSwitchChange = (e) => {
// // //         setIsCacaoProduct(e.target.checked);
// // //     };

// // //     const handleDisplaySwitchChange = (e) => {
// // //         setFormData({
// // //             ...formData,
// // //             display: e.target.checked,
// // //         });
// // //     };

// // //     const handleAvailableSwitchChange = (e) => {
// // //         setFormData({
// // //             ...formData,
// // //             available: e.target.checked,
// // //         });
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();

// // //         const owner_id = localStorage.getItem('owner');
// // //         if (!owner_id) {
// // //             console.error("Owner ID not found in localStorage!");
// // //             return;
// // //         }

// // //         const data = {
// // //             product_name: formData.name,
// // //             product_description: formData.description,
// // //             product_price: parseFloat(formData.price),
// // //             display: formData.display, 
// // //             available: formData.available,  // Make sure available is passed as true/false
// // //             product_owner_id: parseInt(owner_id, 10),
// // //             product_deleted: false, // Default to false for newly added products
// // //             is_new_category: isNewCategory, // Still keeping this to add new categories
// // //             new_category_name: newCategoryName,
// // //             isCacaoProduct: isCacaoProduct ? 1 : 0, // Only used if adding a new category
// // //         };

// // //         // Only add category_id if it's an existing category (not a new one)
// // //         if (!isNewCategory) {
// // //             data.category_id = parseInt(formData.category_id, 10);
// // //         }

// // //         console.log('Form submission data:', data);

// // //         try {
// // //             const response = await axios.post('http://localhost/addProduct.php', data);
// // //             console.log('Product added response:', response.data);
// // //             onClose();
// // //         } catch (error) {
// // //             console.error("There was an error adding the product!", error);
// // //         }
// // //     };

// // //     return (
// // //         <div className={styles.panelContainer}>
// // //             <div className={styles.topRow}>
// // //                 <button className={styles.xButton} onClick={onClose}>&times;</button>
// // //             </div>
// // //             <form onSubmit={handleSubmit}>
// // //                 <div className={styles.productCardPanelGrid}>
// // //                     <div className={styles.leftSideTop}>
// // //                         <div className={styles.imagePreview}>
// // //                             <h1>Image Preview Here</h1>
// // //                         </div>
// // //                     </div>
                    
// // //                     <div className={styles.rightSide}> 
// // //                         <div className={styles.panelInputDiv}>
// // //                             <input 
// // //                                 type="text" 
// // //                                 placeholder="Name" 
// // //                                 className={styles.panelInput} 
// // //                                 name="name"
// // //                                 value={formData.name}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>

// // //                         <div className={styles.panelInputDiv}>
// // //                             <input 
// // //                                 type="text" 
// // //                                 placeholder="Description" 
// // //                                 className={styles.panelInput} 
// // //                                 name="description"
// // //                                 value={formData.description}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>

// // //                         <div className={styles.panelInputDiv}>
// // //                             <select 
// // //                                 className={styles.panelInput}
// // //                                 name="category_id"
// // //                                 value={isNewCategory ? "new" : formData.category_id}
// // //                                 onChange={handleCategoryChange}
// // //                                 required
// // //                             >
// // //                                 <option value="">Select Category</option>
// // //                                 {categories.map(category => (
// // //                                     <option key={category.category_id} value={category.category_id}>
// // //                                         {category.product_category}
// // //                                     </option>
// // //                                 ))}
// // //                                 <option value="new">Add New Category</option>
// // //                             </select>
// // //                         </div>

// // //                         {isNewCategory && (
// // //                             <>
// // //                                 <div className={styles.panelInputDiv}>
// // //                                     <input 
// // //                                         type="text" 
// // //                                         placeholder="New Category Name" 
// // //                                         className={styles.panelInput} 
// // //                                         value={newCategoryName}
// // //                                         onChange={handleNewCategoryChange}
// // //                                         required
// // //                                     />
// // //                                 </div>
// // //                                 <div className={styles.leftSideBottom}>
// // //                                     <h1>A Cacao Product?</h1>
// // //                                     <label className={styles.switch}>
// // //                                         <input 
// // //                                             type="checkbox" 
// // //                                             checked={isCacaoProduct} 
// // //                                             onChange={handleCacaoSwitchChange} 
// // //                                         />
// // //                                         <span className={styles.slider}></span>
// // //                                     </label>
// // //                                 </div>
// // //                             </>
// // //                         )}

// // //                         <div className={styles.panelInputDiv}>
// // //                             <input 
// // //                                 type="text" 
// // //                                 placeholder="Price" 
// // //                                 className={styles.panelInput} 
// // //                                 name="price"
// // //                                 value={formData.price}
// // //                                 onChange={handleInputChange}
// // //                                 required
// // //                             />
// // //                         </div>

// // //                         {/* Display Switch */}
// // //                         <div className={styles.leftSideBottom}>
// // //                             <h1>Display:</h1>
// // //                             <label className={styles.switch}>
// // //                                 <input 
// // //                                     type="checkbox" 
// // //                                     checked={formData.display} 
// // //                                     onChange={handleDisplaySwitchChange}  
// // //                                 />
// // //                                 <span className={styles.slider}></span>
// // //                             </label>
// // //                         </div>

// // //                         {/* Available Switch */}
// // //                         <div className={styles.leftSideBottom}>
// // //                             <h1>Available:</h1>
// // //                             <label className={styles.switch}>
// // //                                 <input 
// // //                                     type="checkbox" 
// // //                                     checked={formData.available} 
// // //                                     onChange={handleAvailableSwitchChange} 
// // //                                 />
// // //                                 <span className={styles.slider}></span>
// // //                             </label>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className={styles.bottomButtons}>  
// // //                     <TextButton 
// // //                         buttonText="Cancel"
// // //                         onClick={onClose}
// // //                         isSubmit={true}
// // //                     /> 
                    
// // //                     <TextButton 
// // //                         buttonText="Add"
// // //                         isSubmit={true}
// // //                     /> 
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // }

// // // ProductCardPanel.propTypes = {
// // //     onClose: PropTypes.func.isRequired,
// // // };

// // // export default ProductCardPanel;


// // import React, { useState, useEffect } from 'react';
// // import PropTypes from 'prop-types';
// // import fetchCategories from '../api/fetchCategories';
// // import styles from './ProductCardPanel.module.css';
// // import TextButton from '../TextButton/TextButton';
// // import axios from 'axios';
// // import fetchLastProductId from '../api/fetchLastProductId';  // Import the function


// // // Popup Component
// // function Popup({ message, onClose }) {
// //     return (
// //         <div className={styles.popup}>
// //             <div className={styles.popupContent}>
// //                 <h2>{message}</h2>
// //                 <button onClick={onClose} className={styles.closeButton}>Close</button>
// //             </div>
// //         </div>
// //     );
// // }

// // Popup.propTypes = {
// //     message: PropTypes.string.isRequired,
// //     onClose: PropTypes.func.isRequired,
// // };

// // function ProductCardPanel({ onClose }) {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         description: '',
// //         category_id: '',
// //         price: '',
// //         display: true,
// //         available: true,
// //     });
// //     const [categories, setCategories] = useState([]);
// //     const [isNewCategory, setIsNewCategory] = useState(false);
// //     const [newCategoryName, setNewCategoryName] = useState('');
// //     const [isCacaoProduct, setIsCacaoProduct] = useState(false);
// //     const [popupMessage, setPopupMessage] = useState('');
// //     const [showPopup, setShowPopup] = useState(false);  // Control popup visibility

// // useEffect(() => {
// //     // Fetch categories
// //     fetchCategories()
// //         .then(data => {
// //             setCategories(data);
// //         })
// //         .catch(console.error);

// //     // Fetch last product ID and log it
// //     fetchLastProductId()
// //         .then(response => {
// //             console.log('Raw Last Product ID:', response); // Log the raw response object

// //             const lastId = response.lastId;  // Access the lastId property
// //             const numericLastId = Number(lastId) + 1;  // Convert the lastId to a number
// //             console.log('Converted Last Product ID:', numericLastId);  // Add 1 to it
// //         })
// //         .catch(error => {
// //             console.error('Error fetching last product ID:', error);
// //         });
// // }, []);



// //     const handleInputChange = (e) => {
// //         const { name, value, type, checked } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: type === 'checkbox' ? checked : value,
// //         });
// //     };

// //     const handleCategoryChange = (e) => {
// //         const selectedCategoryId = e.target.value;
// //         if (selectedCategoryId === "new") {
// //             setIsNewCategory(true);
// //             setNewCategoryName('');
// //             setFormData({
// //                 ...formData,
// //                 category_id: '',
// //             });
// //         } else {
// //             setIsNewCategory(false);
// //             setFormData({
// //                 ...formData,
// //                 category_id: selectedCategoryId,
// //             });
// //         }
// //     };

// //     const handleNewCategoryChange = (e) => {
// //         const value = e.target.value;
// //         setNewCategoryName(value);
// //     };

// //     const handleCacaoSwitchChange = (e) => {
// //         setIsCacaoProduct(e.target.checked);
// //     };

// //     const handleDisplaySwitchChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             display: e.target.checked,
// //         });
// //     };

// //     const handleAvailableSwitchChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             available: e.target.checked,
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         const owner_id = localStorage.getItem('owner');
// //         if (!owner_id) {
// //             console.error("Owner ID not found in localStorage!");
// //             return;
// //         }

// //         const data = {
// //             product_name: formData.name,
// //             product_description: formData.description,
// //             product_price: parseFloat(formData.price),
// //             display: formData.display,
// //             available: formData.available,
// //             product_owner_id: parseInt(owner_id, 10),
// //             product_deleted: false,
// //             is_new_category: isNewCategory,
// //             new_category_name: newCategoryName,
// //             isCacaoProduct: isCacaoProduct ? 1 : 0,
// //         };

// //         if (!isNewCategory) {
// //             data.category_id = parseInt(formData.category_id, 10);
// //         }

// //         try {
// //             const response = await axios.post('http://localhost/addProduct.php', data);
// //             if (response.data.success) {
// //                 setPopupMessage('Product added successfully!');
// //             } else {
// //                 setPopupMessage('Error: ' + response.data.message);
// //             }
// //         } catch (error) {
// //             setPopupMessage('There was an error adding the product!');
// //         } finally {
// //             setShowPopup(true);  // Show the popup with the message
// //         }
// //     };

// //     const closePopup = () => {
// //         setShowPopup(false);
// //         onClose();  // Close the product panel
// //     };

// //     return (
// //         <div className={styles.panelContainer}>
// //             <div className={styles.topRow}>
// //                 <button className={styles.xButton} onClick={onClose}>&times;</button>
// //             </div>
// //             <form onSubmit={handleSubmit}>
// //                 <div className={styles.productCardPanelGrid}>
// //                     <div className={styles.leftSideTop}>
// //                         <div className={styles.imagePreview}>
// //                             <h1>Image Preview Here</h1>
// //                         </div>
// //                     </div>

// //                     <div className={styles.rightSide}> 
// //                         <div className={styles.panelInputDiv}>
// //                             <input 
// //                                 type="text" 
// //                                 placeholder="Name" 
// //                                 className={styles.panelInput} 
// //                                 name="name"
// //                                 value={formData.name}
// //                                 onChange={handleInputChange}
// //                                 required
// //                             />
// //                         </div>

// //                         <div className={styles.panelInputDiv}>
// //                             <input 
// //                                 type="text" 
// //                                 placeholder="Description" 
// //                                 className={styles.panelInput} 
// //                                 name="description"
// //                                 value={formData.description}
// //                                 onChange={handleInputChange}
// //                                 required
// //                             />
// //                         </div>

// //                         <div className={styles.panelInputDiv}>
// //                             <select 
// //                                 className={styles.panelInput}
// //                                 name="category_id"
// //                                 value={isNewCategory ? "new" : formData.category_id}
// //                                 onChange={handleCategoryChange}
// //                                 required
// //                             >
// //                                 <option value="">Select Category</option>
// //                                 {categories.map(category => (
// //                                     <option key={category.category_id} value={category.category_id}>
// //                                         {category.product_category}
// //                                     </option>
// //                                 ))}
// //                                 <option value="new">Add New Category</option>
// //                             </select>
// //                         </div>

// //                         {isNewCategory && (
// //                             <>
// //                                 <div className={styles.panelInputDiv}>
// //                                     <input 
// //                                         type="text" 
// //                                         placeholder="New Category Name" 
// //                                         className={styles.panelInput} 
// //                                         value={newCategoryName}
// //                                         onChange={handleNewCategoryChange}
// //                                         required
// //                                     />
// //                                 </div>
// //                                 <div className={styles.leftSideBottom}>
// //                                     <h1>A Cacao Product?</h1>
// //                                     <label className={styles.switch}>
// //                                         <input 
// //                                             type="checkbox" 
// //                                             checked={isCacaoProduct} 
// //                                             onChange={handleCacaoSwitchChange} 
// //                                         />
// //                                         <span className={styles.slider}></span>
// //                                     </label>
// //                                 </div>
// //                             </>
// //                         )}

// //                         <div className={styles.panelInputDiv}>
// //                             <input 
// //                                 type="number" 
// //                                 placeholder="Price" 
// //                                 className={styles.panelInput} 
// //                                 name="price"
// //                                 value={formData.price}
// //                                 onChange={handleInputChange}
// //                                 required
// //                             />
// //                         </div>

// //                         <div className={styles.leftSideBottom}>
// //                             <h1>Display:</h1>
// //                             <label className={styles.switch}>
// //                                 <input 
// //                                     type="checkbox" 
// //                                     checked={formData.display} 
// //                                     onChange={handleDisplaySwitchChange}  
// //                                 />
// //                                 <span className={styles.slider}></span>
// //                             </label>
// //                         </div>

// //                         <div className={styles.leftSideBottom}>
// //                             <h1>Available:</h1>
// //                             <label className={styles.switch}>
// //                                 <input 
// //                                     type="checkbox" 
// //                                     checked={formData.available} 
// //                                     onChange={handleAvailableSwitchChange} 
// //                                 />
// //                                 <span className={styles.slider}></span>
// //                             </label>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className={styles.bottomButtons}>  
// //                     <TextButton 
// //                         buttonText="Cancel"
// //                         onClick={onClose}
// //                         isSubmit={true}
// //                     /> 
                    
// //                     <TextButton 
// //                         buttonText="Add"
// //                         isSubmit={true}
// //                     /> 
// //                 </div>
// //             </form>

// //             {showPopup && <Popup message={popupMessage} onClose={closePopup} />}  {/* Popup Display */}
// //         </div>
// //     );
// // }

// // ProductCardPanel.propTypes = {
// //     onClose: PropTypes.func.isRequired,
// // };

// // export default ProductCardPanel;


// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import fetchCategories from '../api/fetchCategories';
// import styles from './ProductCardPanel.module.css';
// import TextButton from '../TextButton/TextButton';
// import axios from 'axios';
// import fetchLastProductId from '../api/fetchLastProductId';  // Import the function


// // Popup Component
// function Popup({ message, onClose }) {
//     return (
//         <div className={styles.popup}>
//             <div className={styles.popupContent}>
//                 <h2>{message}</h2>
//                 <button onClick={onClose} className={styles.closeButton}>Close</button>
//             </div>
//         </div>
//     );
// }

// Popup.propTypes = {
//     message: PropTypes.string.isRequired,
//     onClose: PropTypes.func.isRequired,
// };

// function ProductCardPanel({ onClose }) {
//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         category_id: '',
//         price: '',
//         display: true,
//         available: true,
//     });
//     const [categories, setCategories] = useState([]);
//     const [isNewCategory, setIsNewCategory] = useState(false);
//     const [newCategoryName, setNewCategoryName] = useState('');
//     const [isCacaoProduct, setIsCacaoProduct] = useState(false);
//     const [popupMessage, setPopupMessage] = useState('');
//     const [showPopup, setShowPopup] = useState(false);
//     const [files, setFiles] = useState([]); // New state for file uploads
//     const [filename, setFilename] = useState(''); // Custom filename state
//     const [foldername, setFoldername] = useState(''); // Custom folder name state

//     useEffect(() => {
//         // Fetch categories
//         fetchCategories()
//             .then(data => {
//                 setCategories(data);
//             })
//             .catch(console.error);

//         // Fetch last product ID and set foldername/filename
//         fetchLastProductId()
//             .then(response => {
//                 const lastId = response.lastId;
//                 const numericLastId = Number(lastId) + 1;
//                 // Use the numericLastId as foldername and filename prefix
//                 setFoldername(`product_${numericLastId}`);
//                 setFilename(`${numericLastId}`);
//             })
//             .catch(error => {
//                 console.error('Error fetching last product ID:', error);
//             });
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleFileChange = (e) => {
//         setFiles(e.target.files);
//     };

//     const handleCategoryChange = (e) => {
//         const selectedCategoryId = e.target.value;
//         if (selectedCategoryId === "new") {
//             setIsNewCategory(true);
//             setNewCategoryName('');
//             setFormData({
//                 ...formData,
//                 category_id: '',
//             });
//         } else {
//             setIsNewCategory(false);
//             setFormData({
//                 ...formData,
//                 category_id: selectedCategoryId,
//             });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const owner_id = localStorage.getItem('owner');
//         if (!owner_id) {
//             console.error("Owner ID not found in localStorage!");
//             return;
//         }

//         const data = {
//             product_name: formData.name,
//             product_description: formData.description,
//             product_price: parseFloat(formData.price),
//             display: formData.display,
//             available: formData.available,
//             product_owner_id: parseInt(owner_id, 10),
//             product_deleted: false,
//             is_new_category: isNewCategory,
//             new_category_name: newCategoryName,
//             isCacaoProduct: isCacaoProduct ? 1 : 0,
//         };

//         if (!isNewCategory) {
//             data.category_id = parseInt(formData.category_id, 10);
//         }

//         try {
//             // Submit product data
//             const productResponse = await axios.post('http://localhost/addProduct.php', data);
//             if (productResponse.data.success) {
//                 setPopupMessage('Product added successfully!');
//             } else {
//                 setPopupMessage('Error: ' + productResponse.data.message);
//             }

//             // Now handle image upload after product data
//             if (files.length > 0) {
//                 const formDataImage = new FormData();
//                 Array.from(files).forEach(file => {
//                     formDataImage.append('images', file); // Append each file
//                 });
//                 formDataImage.append('filename', filename); // Append the custom filename
//                 formDataImage.append('foldername', foldername); // Append the custom folder name

//                 // Submit images
//                 const imageResponse = await axios.post('http://localhost:5000/upload', formDataImage, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });

//                 if (imageResponse.data.success) {
//                     setPopupMessage('Product and images uploaded successfully!');
//                 } else {
//                     setPopupMessage('Error uploading images: ' + imageResponse.data.message);
//                 }
//             }

//         } catch (error) {
//             setPopupMessage('There was an error adding the product or uploading files!');
//             console.error('Error:', error);
//         } finally {
//             setShowPopup(true);  // Show the popup with the message
//         }
//     };

//     const closePopup = () => {
//         setShowPopup(false);
//         onClose();  // Close the product panel
//     };

//     return (
//         <div className={styles.panelContainer}>
//             <div className={styles.topRow}>
//                 <button className={styles.xButton} onClick={onClose}>&times;</button>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div className={styles.productCardPanelGrid}>
//                     <div className={styles.leftSideTop}>
//                         <div className={styles.imagePreview}>
//                             <h1>Image Preview Here</h1>
//                         </div>
//                     </div>

//                     <div className={styles.rightSide}> 
//                         <div className={styles.panelInputDiv}>
//                             <input 
//                                 type="text" 
//                                 placeholder="Name" 
//                                 className={styles.panelInput} 
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         <div className={styles.panelInputDiv}>
//                             <input 
//                                 type="text" 
//                                 placeholder="Description" 
//                                 className={styles.panelInput} 
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         <div className={styles.panelInputDiv}>
//                             <select 
//                                 className={styles.panelInput}
//                                 name="category_id"
//                                 value={isNewCategory ? "new" : formData.category_id}
//                                 onChange={handleCategoryChange}
//                                 required
//                             >
//                                 <option value="">Select Category</option>
//                                 {categories.map(category => (
//                                     <option key={category.category_id} value={category.category_id}>
//                                         {category.product_category}
//                                     </option>
//                                 ))}
//                                 <option value="new">Add New Category</option>
//                             </select>
//                         </div>

//                         {isNewCategory && (
//                             <>
//                                 <div className={styles.panelInputDiv}>
//                                     <input 
//                                         type="text" 
//                                         placeholder="New Category Name" 
//                                         className={styles.panelInput} 
//                                         value={newCategoryName}
//                                         onChange={handleInputChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className={styles.leftSideBottom}>
//                                     <h1>A Cacao Product?</h1>
//                                     <label className={styles.switch}>
//                                         <input 
//                                             type="checkbox" 
//                                             checked={isCacaoProduct} 
//                                             onChange={handleInputChange} 
//                                         />
//                                         <span className={styles.slider}></span>
//                                     </label>
//                                 </div>
//                             </>
//                         )}

//                         <div className={styles.panelInputDiv}>
//                             <input 
//                                 type="number" 
//                                 placeholder="Price" 
//                                 className={styles.panelInput} 
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </div>

//                         <div className={styles.leftSideBottom}>
//                             <h1>Display:</h1>
//                             <label className={styles.switch}>
//                                 <input 
//                                     type="checkbox" 
//                                     checked={formData.display} 
//                                     onChange={handleInputChange}  
//                                 />
//                                 <span className={styles.slider}></span>
//                             </label>
//                         </div>

//                         <div className={styles.leftSideBottom}>
//                             <h1>Available:</h1>
//                             <label className={styles.switch}>
//                                 <input 
//                                     type="checkbox" 
//                                     checked={formData.available} 
//                                     onChange={handleInputChange} 
//                                 />
//                                 <span className={styles.slider}></span>
//                             </label>
//                         </div>

//                         {/* File upload section */}
//                         <div className={styles.panelInputDiv}>
//                             <h2>Upload Images</h2>
//                             <input 
//                                 type="file" 
//                                 multiple 
//                                 onChange={handleFileChange} 
//                                 className={styles.panelInput}
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 <div className={styles.bottomButtons}>  
//                     <TextButton 
//                         buttonText="Cancel"
//                         onClick={onClose}
//                         isSubmit={true}
//                     /> 
                    
//                     <TextButton 
//                         buttonText="Add"
//                         isSubmit={true}
//                     /> 
//                 </div>
//             </form>

//             {showPopup && <Popup message={popupMessage} onClose={closePopup} />}  {/* Popup Display */}
//         </div>
//     );
// }

// ProductCardPanel.propTypes = {
//     onClose: PropTypes.func.isRequired,
// };

// export default ProductCardPanel;


import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchCategories from '../api/fetchCategories';
import styles from './ProductCardPanel.module.css';
import TextButton from '../TextButton/TextButton';
import axios from 'axios';
import fetchLastProductId from '../api/fetchLastProductId';  // Import the function

// Popup Component
function Popup({ message, onClose }) {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <h2>{message}</h2>
                <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
}

Popup.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

function ProductCardPanel({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category_id: '',
        price: '',
        display: true,
        available: true,
    });
    const [categories, setCategories] = useState([]);
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [isCacaoProduct, setIsCacaoProduct] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [files, setFiles] = useState([]); // File uploads
    const [filename, setFilename] = useState(''); // Custom filename
    const [foldername, setFoldername] = useState(''); // Custom folder name

    useEffect(() => {
        // Fetch categories
        fetchCategories()
            .then(data => {
                setCategories(data);
            })
            .catch(console.error);

        // Fetch last product ID and set foldername/filename
        fetchLastProductId()
            .then(response => {
                const lastId = response.lastId;
                const numericLastId = Number(lastId) + 1;
                // Use the numericLastId as foldername and filename prefix
                setFoldername(`product_${numericLastId}`);
                setFilename(`${numericLastId}`);
            })
            .catch(error => {
                console.error('Error fetching last product ID:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        if (selectedCategoryId === "new") {
            setIsNewCategory(true);
            setNewCategoryName('');
            setFormData({
                ...formData,
                category_id: '',
            });
        } else {
            setIsNewCategory(false);
            setFormData({
                ...formData,
                category_id: selectedCategoryId,
            });
        }
    };

    

    const handleNewCategoryChange = (e) => {
        const value = e.target.value;
        setNewCategoryName(value);
    };

    const handleCacaoSwitchChange = (e) => {
        setIsCacaoProduct(e.target.checked);
    };

    const handleDisplaySwitchChange = (e) => {
        setFormData({
            ...formData,
            display: e.target.checked,
        });
    };

    const handleAvailableSwitchChange = (e) => {
        setFormData({
            ...formData,
            available: e.target.checked,
        });
    };

    // Handle Submit of ImageUploading and Adding Product

    const handleSubmit = async (e) => {
        e.preventDefault();

        const owner_id = localStorage.getItem('owner');
        if (!owner_id) {
            console.error("Owner ID not found in localStorage!");
            return;
        }

        const data = {
            product_name: formData.name,
            product_description: formData.description,
            product_price: parseFloat(formData.price),
            display: formData.display,
            available: formData.available,
            product_owner_id: parseInt(owner_id, 10),
            product_deleted: false,
            is_new_category: isNewCategory,
            new_category_name: newCategoryName,
            isCacaoProduct: isCacaoProduct ? 1 : 0,
        };

        if (!isNewCategory) {
            data.category_id = parseInt(formData.category_id, 10);
        }

        try {
            // Submit product data
            const productResponse = await axios.post('http://localhost/addProduct.php', data);
            if (productResponse.data.success) {
                setPopupMessage('Product added successfully!');
            } else {
                setPopupMessage('Error: ' + productResponse.data.message);
            }

            // Now handle image upload after product data
            // Submiting Data to the File System
            if (files.length > 0) {
                const formDataImage = new FormData();
                Array.from(files).forEach(file => {
                    formDataImage.append('images', file); // Append each file
                });
                formDataImage.append('filename', filename); // Append the custom filename
                formDataImage.append('foldername', foldername); // Append the custom folder name

                // Submit images
                const imageResponse = await axios.post('http://localhost:5000/upload', formDataImage, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (imageResponse.data.success) {
                    setPopupMessage('Product and images uploaded successfully!');
                } else {
                    setPopupMessage('Error uploading images: ' + imageResponse.data.message);
                }
            }

        } catch (error) {
            setPopupMessage('There was an error adding the product or uploading files!');
            console.error('Error:', error);
        } finally {
            setShowPopup(true);  // Show the popup with the message
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        onClose();  // Close the product panel
    };

    return (
        <div className={styles.panelContainer}>
            <div className={styles.topRow}>
                <button className={styles.xButton} onClick={onClose}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.productCardPanelGrid}>
                    <div className={styles.leftSideTop}>
                        <div className={styles.imagePreview}>
                            <h1>Image Preview Here</h1>
                        </div>
                    </div>

                    <div className={styles.rightSide}> 
                        <div className={styles.panelInputDiv}>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className={styles.panelInput} 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.panelInputDiv}>
                            <input 
                                type="text" 
                                placeholder="Description" 
                                className={styles.panelInput} 
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className={styles.panelInputDiv}>
                            <select 
                                className={styles.panelInput}
                                name="category_id"
                                value={isNewCategory ? "new" : formData.category_id}
                                onChange={handleCategoryChange}
                                required
                            >
                                <option value="">Select Category</option>
                                {categories.map(category => (
                                    <option key={category.category_id} value={category.category_id} required>
                                        {category.product_category}
                                    </option>
                                ))}
                                <option value="new">Add New Category</option>
                            </select>
                        </div>

                        {isNewCategory && (
                            <>
                                <div className={styles.panelInputDiv}>
                                    <input 
                                        type="text" 
                                        placeholder="New Category Name" 
                                        className={styles.panelInput} 
                                        value={newCategoryName}
                                        onChange={handleNewCategoryChange}
                                        required
                                    />
                                </div>
                                <div className={styles.leftSideBottom}>
                                    <h1>A Cacao Product?</h1>
                                    <label className={styles.switch}>
                                        <input 
                                            type="checkbox" 
                                            checked={isCacaoProduct} 
                                            onChange={handleCacaoSwitchChange} 
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                            </>
                        )}

                        <div className={styles.panelInputDiv}>
                            <input 
                                type="number" 
                                placeholder="Price" 
                                className={styles.panelInput} 
                                name="price"
                                value={formData.price}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    // Prevent negative numbers by checking if the value is >= 0
                                    if (value >= 0) {
                                        handleInputChange(e);
                                    }
                                }}
                                required
                            />
                        </div>

                        <div className={styles.leftSideBottom}>
                            <h1>Display:</h1>
                            <label className={styles.switch}>
                                <input 
                                    type="checkbox" 
                                    checked={formData.display} 
                                    onChange={handleDisplaySwitchChange}  
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        <div className={styles.leftSideBottom}>
                            <h1>Available:</h1>
                            <label className={styles.switch}>
                                <input 
                                    type="checkbox" 
                                    checked={formData.available} 
                                    onChange={handleAvailableSwitchChange} 
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        {/* File upload section */}
                        <div className={styles.panelInputDiv}>
                            <h2>Upload Images</h2>
                            <input 
                                type="file" 
                                multiple 
                                onChange={handleFileChange} 
                                className={styles.panelInput}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.bottomButtons}>  
                    <TextButton 
                        buttonText="Cancel"
                        onClick={onClose}
                        isSubmit={true}
                    /> 
                    
                    <TextButton 
                        buttonText="Add"
                        isSubmit={true}
                    /> 
                </div>
            </form>

            {showPopup && <Popup message={popupMessage} onClose={closePopup} />}  {/* Purpose is to confirm Popup Display */}
        </div>
    );
}

ProductCardPanel.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ProductCardPanel;
