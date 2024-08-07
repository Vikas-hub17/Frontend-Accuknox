import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import List from './components/List';
import './App.css';

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [animeName, setAnimeName] = useState('naruto'); // Default anime

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${animeName}`);
                const result = await response.json();
                console.log(result); // Log the result to check the response
                setData(result.data);
                setFilteredData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [animeName]);

    const handleSearch = (searchTerm) => {
        const filtered = data.filter(item =>
            item.fact.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleAnimeChange = (event) => {
        setAnimeName(event.target.value);
    };

    return (
        <div className="container">
            <h1>Anime Facts Viewer</h1>
            <div className="anime-selector">
                <label htmlFor="anime">Select Anime: </label>
                <select id="anime" onChange={handleAnimeChange}>
                    <option value="naruto">Naruto</option>
                    <option value="one_piece">One Piece</option>
                    <option value="bleach">Bleach</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <SearchBar onSearch={handleSearch} />
            <List items={filteredData} />
        </div>
    );
};

export default App;
