import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Country Name: {props.name}</h2>
            <h3>Population: {props.population}</h3>
        </div>
    );
};

export default Country;