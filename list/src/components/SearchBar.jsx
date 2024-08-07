import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
    );
};

export default SearchBar;
