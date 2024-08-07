import React from 'react';

const List = ({ items }) => {
    return (
        <ul style={{ listStyle: 'none', padding: '0' }}>
            {items.map((item, index) => (
                <li key={item.fact_id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                    {item.fact}
                </li>
            ))}
        </ul>
    );
};

export default List;
