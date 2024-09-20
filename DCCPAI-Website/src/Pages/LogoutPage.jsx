import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove the auth token from localStorage
      localStorage.removeItem('authToken');
      localStorage.removeItem('owner');
      localStorage.removeItem('adminState');

      console.log('Logging Out!');
      console.log('Admin state: false');
      navigate('/Login');
  }, [navigate]);

  return null; // This component doesn't render anything, it just handles the logout logic
};

export default LogoutPage;