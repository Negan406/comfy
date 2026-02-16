import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
             <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-10">
            
                  <div className="bg-white shadow-lg rounded-xl flex w-280 h-165 overflow-hidden">
            
                    <div className="w-1/2 p-10 flex flex-col justify-center gap-10">
                      <h1 className="text-3xl font-bold text-yellow-700">
                        Ready to start your success story?
                      </h1>
            
                      <form className="flex flex-col gap-12">
                        <div>
                          <label className="text-sm text-gray-600">Name</label>
                          <input
                            type="text"
                            className="w-full border-b p-2 focus:outline-none"
                          />
                        </div>
            
                        <div>
                          <label className="text-sm text-gray-600">Email</label>
                          <input
                            type="email"
                            className="w-full border-b p-2 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-sm text-gray-600">Phone</label>
                          <input
                            type="tel"
                            className="w-full border-b p-2 focus:outline-none"
                          />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600">Password</label>
                            <input
                                type="password"
                                className="w-full border-b p-2 focus:outline-none"
                            />
                        </div>
                        <button className="bg-yellow-600 text-white py-2 rounded-full hover:bg-yellow-700 hover:scale-101 transition-all duration-300">
                          Register
                        </button>
               
                      </form>
                           <p className="text-sm text-center text-gray-600">
                                           Have you an account?{' '}
                                          <Link
                                            to="/login"
                                            className="text-yellow-600 font-semibold hover:underline"
                                          >
                                            Login
                                          </Link>
                                        </p>
                    </div>
                    
                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-1/2 bg-gray-50 flex items-center justify-center">
                      <img
                        src="log.jpg"
                        alt="illustration"
                        className="w-full h-full object-cover"
                      />
                    </div>
            
                  </div>
                </div>
            
        </div>
    );
}

export default Register;