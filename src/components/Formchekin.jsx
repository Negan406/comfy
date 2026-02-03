import React from 'react';

function Formchekin() {
    return (
        <div className="border-none p-9 rounded flex justify-center bg-white shadow-2xl w-280 relative top-60" >
            <form className="flex items-end gap-12">
                
                <div className="flex flex-col">
                    <label className="mb-1 font-serif">Chambre</label>
                    <input
                        type="text"
                        name="chambre"
                        className="border border-gray-400 rounded p-2 w-60"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-serif">Check-in Date</label>
                    <input
                        type="date"
                        name="checkin"
                        className="border border-gray-400 rounded p-2 w-60"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-serif">Check-out Date</label>
                    <input
                        type="date"
                        name="checkout"
                        className="border border-gray-400 rounded p-2 w-60"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-black/80 hover:bg-black/60 hover:scale-105 transition-transform duration-300 ease-in-out text-white p-2 w-40 rounded font-serif"
                >
                    Rechercher
                </button>
            </form>
        </div>
    );
}

export default Formchekin;
