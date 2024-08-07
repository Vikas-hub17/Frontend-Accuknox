import React from 'react';

const SearchBar = ({ onSearch }) => {
    const searchBarStyle = {
        width: '100%',
        padding: '15px',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '25px',
        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
        transition: 'all 0.3s ease'
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = '#007bff';
        e.target.style.boxShadow = '0 0 8px rgba(0, 123, 255, 0.3)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#ddd';
        e.target.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1)';
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
            style={searchBarStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
};

export default SearchBar;
