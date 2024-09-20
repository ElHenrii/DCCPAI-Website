import React, { useEffect } from 'react';
import LoginSection from '../PageSections/LoginSection/LoginSection.jsx';

const LoginPage = () => {
    useEffect(() => {
        const isAdmin = localStorage.getItem('adminState') === 'true';
        console.log(`Admin state on page load: ${isAdmin}`);
    }, []);

    return (
        <div>
            <LoginSection />
        </div>
    );
};

export default LoginPage;