import { motion } from 'framer-motion';
import { HiCalendar, HiUsers, HiOutlineReceiptTax } from 'react-icons/hi';

function Reservations({ reservations }) {
    return (
        <div className="min-h-screen bg-gray-50/50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-4xl font-serif text-gray-900 mb-2">My Reservations</h2>
                    <p className="text-gray-500 font-light tracking-wide">Manage your upcoming stays and history with Comfy Hotel.</p>
                </div>

                {reservations.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100"
                    >
                        <div className="bg-yellow-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <HiOutlineReceiptTax className="w-10 h-10 text-yellow-600" />
                        </div>
                        <h3 className="text-2xl font-serif text-gray-800 mb-2">No bookings yet</h3>
                        <p className="text-gray-500 mb-8 max-w-sm mx-auto">You haven't made any reservations. Explore our luxury rooms and book your first stay today!</p>
                        <a
                            href="/rooms"
                            className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-3 rounded-full font-serif tracking-widest shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            BROWSE ROOMS
                        </a>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-8 py-6 text-sm font-semibold text-gray-400 uppercase tracking-widest text-center">Room</th>
                                        <th className="px-8 py-6 text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <HiCalendar className="w-4 h-4" /> Check-in
                                            </div>
                                        </th>
                                        <th className="px-8 py-6 text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <HiCalendar className="w-4 h-4" /> Check-out
                                            </div>
                                        </th>
                                        <th className="px-8 py-6 text-sm font-semibold text-gray-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <HiUsers className="w-4 h-4" /> Guests
                                            </div>
                                        </th>
                                        <th className="px-8 py-6 text-sm font-semibold text-gray-400 uppercase tracking-widest">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {reservations.map((res, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="hover:bg-gray-50/50 transition-colors group"
                                        >
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                                                        <img
                                                            src={`/public${res.roomImage}`}
                                                            alt={res.roomName}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <span className="font-serif font-medium text-gray-900">{res.roomName}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-md font-medium text-gray-700">
                                                    {res.checkin}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-md font-medium text-gray-700">
                                                    {res.checkout}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="inline-flex items-center justify-center bg-gray-100 px-4 py-1.5 rounded-full text-sm font-medium text-gray-600">
                                                    {res.guests} {res.guests > 1 ? 'Personnes' : 'Personne'}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-md">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                    Confirmed
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Reservations;