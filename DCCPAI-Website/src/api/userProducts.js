// // src/api/userProducts.js

// const userProducts = async ({ username, password }) => {
//     try {
//         const response = await fetch('http://localhost/userProducts.php', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         const data = await response.json();
//         console.log('userProducts response data:', data);
//         return data;
//     } catch (error) {
//         console.error('userProducts error:', error);
//         return { success: false, message: 'Failed to fetch owner ID' };
//     }
// };

// export default userProducts;


// src/api/userProducts.js

const userProducts = async ({ username, password }) => {
    try {
        const response = await fetch('http://localhost/userProducts.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        console.log('userProducts response data:', data);
        return data;
    } catch (error) {
        console.error('userProducts error:', error);
        return { success: false, message: 'Failed to fetch user data' };
    }
};

export default userProducts;
