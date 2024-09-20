// // import NavBar from '../PageSections/NavBar/NavBar.jsx'
// // import Footer from '../PageSections/Footer/Footer.jsx'
// // import StoreTitleSection from '../PageSections/StoreTitleSection/StoreTitleSection.jsx'
// // import StoreBodySection from '../PageSections/StoreBodySection/StoreBodySection.jsx'
// // import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'

// // function ShopPage() {
// //     return (
// //         <>
// //         <NavBar />
// //         <StoreTitleSection />
// //         <StoreBodySection />
// //         <Footer /> 
// //         <ShoppingCart/>
// //         </>
// //     )
// // }

// // export default ShopPage

// import React, { useState, useEffect } from 'react';
// import NavBar from '../PageSections/NavBar/NavBar.jsx';
// import Footer from '../PageSections/Footer/Footer.jsx';
// import StoreTitleSection from '../PageSections/StoreTitleSection/StoreTitleSection.jsx';
// import StoreBodySection from '../PageSections/StoreBodySection/StoreBodySection.jsx';
// import ProductCardPanel from '../ProductCardPanel/ProductCardPanel.jsx';
// import AddButton from '../AddButton/AddButton.jsx';

// function ShopPage() {
//     // State to manage the visibility of the ProductCardPanel
//     const [isPanelVisible, setIsPanelVisible] = useState(false);
    
//     // State to manage whether the Add button should be visible
//     const [canAccessAddButton, setCanAccessAddButton] = useState(false);

//     // Function to show the panel
//     const showPanel = () => {
//         setIsPanelVisible(true);
//     };

//     // Function to hide the panel
//     const hidePanel = () => {
//         setIsPanelVisible(false);
//     };

//     // Retrieve adminState from localStorage and set the visibility of the Add button
//     useEffect(() => {
//         const adminState = localStorage.getItem('adminState');
//         if (adminState && (parseInt(adminState, 10) === 0 || parseInt(adminState, 10) === 1)) {
//             setCanAccessAddButton(true);
//         } else {
//             setCanAccessAddButton(false);
//         }
//     }, []);

//     return (
//         <>
//             <NavBar />
//             <StoreTitleSection />
//             <StoreBodySection />
//             <Footer /> 
            
//             {isPanelVisible && (
//                 <div className="popupOverlay">
//                     <ProductCardPanel onClose={hidePanel} />
//                 </div>
//             )}

//             {canAccessAddButton && <AddButton onClick={showPanel} props={ "+" } />}
//         </>
//     );
// }

// export default ShopPage;


import React, { useState, useEffect } from 'react';
import NavBar from '../PageSections/NavBar/NavBar.jsx';
import Footer from '../PageSections/Footer/Footer.jsx';
import StoreTitleSection from '../PageSections/StoreTitleSection/StoreTitleSection.jsx';
import StoreBodySection from '../PageSections/StoreBodySection/StoreBodySection.jsx';
import ProductCardPanel from '../ProductCardPanel/ProductCardPanel.jsx';
import AddButton from '../AddButton/AddButton.jsx';
import styles from '../ProductCardPanel/ProductCardPanel.module.css'; // Borrowed Page Styling in the ProductPanel for the Popup

function ShopPage() {
    // State to manage the visibility of the ProductCardPanel
    const [isPanelVisible, setIsPanelVisible] = useState(false);
    
    // State to manage whether the Add button should be visible
    const [canAccessAddButton, setCanAccessAddButton] = useState(false);

    // Function to show the panel
    // Open by using the AddButton jsx
    const showPanel = () => {
        setIsPanelVisible(true);
    };

    // Function to hide the panel
    // Only way to hide is to go the ProductCardPanel and click
    // X or Cancel Button
    const hidePanel = () => {
        setIsPanelVisible(false);
    };

    // Retrieve adminState from localStorage and set the visibility of the Add button
    useEffect(() => {
        const adminState = localStorage.getItem('adminState');
        if (adminState && (parseInt(adminState, 10) === 0 || parseInt(adminState, 10) === 1)) {
            setCanAccessAddButton(true);
        } else {
            setCanAccessAddButton(false);
        }
    }, []);

    return (
        <>
            <NavBar />
            <StoreTitleSection />
            <StoreBodySection />
            <Footer /> 
            
            {isPanelVisible && (
                <div className={styles.popupOverlay}>
                    <ProductCardPanel onClose={hidePanel} />
                </div>
            )}

            {canAccessAddButton && <AddButton onClick={showPanel} props={ "+" } />}
        </>
    );
}

export default ShopPage;
