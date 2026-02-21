import React from 'react';

function Formchekin() {
    
    
    return (
        <div className="p-8 rounded-2xl flex justify-center bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
            <form className="flex flex-col md:flex-row items-end gap-6 text-white">

                <div className="flex flex-col gap-2">
                    <label className="font-serif tracking-wide text-sm uppercase">Chambre</label>
                    <input
                        type="text"
                        name="chambre"
                        placeholder="Suite Type"
                        className="bg-transparent border-b border-white/50 py-2 w-60 focus:outline-none focus:border-yellow-500 transition-colors placeholder-white/50"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-serif tracking-wide text-sm uppercase">Check-in Date</label>
                    <input
                        type="date"
                        name="checkin"
                        className="bg-transparent border-b border-white/50 py-2 w-60 focus:outline-none focus:border-yellow-500 transition-colors text-white/90 [&::-webkit-calendar-picker-indicator]:invert"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-serif tracking-wide text-sm uppercase">Check-out Date</label>
                    <input
                        type="date"
                        name="checkout"
                        className="bg-transparent border-b border-white/50 py-2 w-60 focus:outline-none focus:border-yellow-500 transition-colors text-white/90 [&::-webkit-calendar-picker-indicator]:invert"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-500 text-white py-3 px-8 rounded-full font-serif tracking-wider shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                    RECHERCHER
                </button>
            </form>
        </div>
    );
}

export default Formchekin;
