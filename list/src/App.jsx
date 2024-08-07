import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.publicapis.org/entries');
                const result = await response.json();
                setData(result.entries);
                setFilteredData(result.entries);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = data.filter(item =>
            item.API.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div className="container">
            <h1>API List Viewer</h1>
            <SearchBar onSearch={handleSearch} />
            <List items={filteredData} />
        </div>
    );
};

export default App;
