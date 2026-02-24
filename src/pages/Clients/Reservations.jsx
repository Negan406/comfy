import React from 'react';

function Reservations({reservations}) {

    return (
        <div>
            <h2>My Reservations</h2>
            {reservations.length === 0 ? (
                <p>You have no reservations at this time.</p>
            ) : (
                <ul>
                    {reservations.map((res, index) => (
                        <li key={index}>
                            {res.checkin} - {res.checkout} | Guests: {res.guests}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Reservations;