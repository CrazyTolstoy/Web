// auth.js

export const isAuthenticated = () => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    
    // Return true if the token exists and is valid, otherwise return false
    return token ? true : false;
  };
  
  export const login = (token) => {
    // Save the token to localStorage or session storage
    localStorage.setItem('token', token);
  };
  
  export const logout = () => {
    // Remove the token from localStorage or session storage
    localStorage.removeItem('token');
  };
  