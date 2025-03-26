import React, { useEffect, useState } from 'react';
import data from '../data';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
    const [city, setCity] = useState(null);
    const { ID } = useParams(); // Correctly call useParams()

    useEffect(() => {
        const selectedCity = data.find((c) => c.id === Number(ID)); // Use .find() instead of .filter()
        setCity(selectedCity);
    }, [ID]); // Include ID in dependency array

    if (!city) {
        return <p>City not found</p>;
    }

    return (
        <>
            <h1>{city.name}</h1>
            <p>{city.info}</p>
        </>
    );
};

export default CityDetails;
