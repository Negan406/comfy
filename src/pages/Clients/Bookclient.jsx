import {React,useState} from 'react';


function Bookclient(props) {

    const [checkin , setcheckin]=useState("");
    const [checkout , setcheckout]=useState("");
    const [guests , setguests]=useState(1);
    const afficher = ()=>{
        const res = {
            checkin,
            checkout,
            guests
        }
        props.ajouter(res);

    }
    return (
        <div className="w-full bg-gray-50 py-16 px-6 ">
            <h2 className="text-3xl font-bold text-yellow-600 mb-8 relative left-25">Book a Room</h2>
            <form className="flex flex-col gap-5 max-w-md">
                <label className='block font-bold'>
                    Check-in Date:
                    </label> 
                    <input type="date" name="checkin" required className=' w-100 h-10 border border-gray-300 rounded-2xl p-2' onChange={(e) => setcheckin(e.target.value)} />
           

                <label className='block font-bold'>
                    Check-out Date:
                     </label>
                    <input type="date" name="checkout" required className=' w-100 h-10 border border-gray-300 rounded-2xl p-2' onChange={(e) => setcheckout(e.target.value)} />

                <label className='block font-bold'>
                    Number of Guests:
                     </label>
                    <input type="number" name="guests" min="1" required className=' w-100 h-10 border border-gray-300 rounded-2xl p-2' onChange={(e) => setguests(e.target.value)} />

                <button type="submit" className='bg-yellow-600 text-white font-semibold py-2 w-80 mx-auto rounded-2xl hover:scale-103 transition-transform duration-500' onClick={afficher}>Book</button>
            </form>
        </div>
    );
}

export default Bookclient;