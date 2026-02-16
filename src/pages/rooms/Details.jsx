import React from 'react';
import { useParams } from 'react-router-dom';
import roomsData from '../../../public/data';

function Details() {
    const { id } = useParams(); // Get the room ID from the URL parameters

    const det = roomsData.find((room) => room.id === parseInt(id));
    return (
        <div>
            <h1 className="text-4xl font-bold text-yellow-600 mb-4">Room Details</h1>
            {det ? (
                <div>
                    <h2 className="text-2xl font-semibold mb-2">{det.title}</h2>
                    <img src={`../../../public/${det.image}`} alt={det.title}  className="w-50 h-60 object-cover rounded-2xl"/>
                    <p className="text-gray-600 mb-2">Price: ${det.price}</p>
                    <p className="text-gray-600 mb-2">Description: {det.description}</p>
                </div>
            ) : (
                <p className="text-gray-600">Room not found</p>
            )}
        </div>
    );
}

export default Details;