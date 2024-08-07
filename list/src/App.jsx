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
                const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
                const result = await response.json();
                console.log(result); // Log the result to check the response
                setData(result);
                setFilteredData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = data.filter(item =>
            item.quote.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div className="container">
            <h1>Breaking Bad Quotes</h1>
            <SearchBar onSearch={handleSearch} />
            <List items={filteredData} />
        </div>
    );
};

export default App;
