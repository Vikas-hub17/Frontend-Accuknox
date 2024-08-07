import React from 'react';

const List = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    "{item.quote}" - {item.author}
                </li>
            ))}
        </ul>
    );
};

export default List;
