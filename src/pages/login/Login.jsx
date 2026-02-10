import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-10">

      <div className="bg-white shadow-lg rounded-xl flex w-280 h-150 overflow-hidden">

        <div className="w-1/2 p-10 flex flex-col justify-center gap-10">
          <h1 className="text-3xl font-bold text-yellow-700">
            Ready to start your success story?
          </h1>

          <form className="flex flex-col gap-10">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
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
              Login
            </button>

            {/* LINK TO REGISTER */}
            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{' '}
              <Link
                to="/register"
                className="text-yellow-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-1/2 bg-gray-50 flex items-center justify-center">
          <img
            src="bg.jpeg"
            alt="illustration"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Login;
