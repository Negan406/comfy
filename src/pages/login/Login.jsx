import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Login({ setUser  }) {

  const users = [
  { email: "soufianeaqli@gmail.com", password: "soufiane", role: "admin" },
  { email: "soufianeaqli12@gmail.com", password: "soufiane", role: "client" },
  { email: "soufianeaqli13@gmail.com", password: "soufiane", role: "receptionniste" }
];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);

  setTimeout(() => {

    const foundUser = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (foundUser) {
      setMessage({ text: "Login successful ✅", type: "success" });
      setTimeout(() => setMessage(null), 3000);
      setUser(foundUser);

      // Redirection automatique selon rôle
      switch (foundUser.role) {
        case "admin":
          navigate("/");
        
          break;
        case "client":
          navigate("/");
         
          break;
        case "receptionniste":
          navigate("/");
          
          break;
        default:
          navigate("/");
      }

    } else {
      setMessage({ text: "Invalid email or password ❌", type: "error" });
      setUser(null);
      setIsLoading(false);
      setTimeout(() => setMessage(null), 3000);
    }

  }, 1500);
};

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-10">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`flex fixed justify-center items-center top-22 z-50 px-6 py-3 rounded-xl shadow-lg text-white transition-all duration-500 ${message.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white shadow-lg rounded-xl flex w-[900px] h-[550px] overflow-hidden">
        <div className="w-1/2 p-10 flex flex-col justify-center gap-10">
          <h1 className="text-3xl font-bold text-yellow-700">Welcome Back!</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full border-b p-2 focus:outline-none focus:border-yellow-600 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="w-full border-b p-2 focus:outline-none focus:border-yellow-600 transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative flex items-center justify-center bg-yellow-600 text-white py-2 rounded-full hover:bg-yellow-700 hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden h-11"
            >
              {isLoading ? (
                <motion.div
                  className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                "Login"
              )}
            </button>

            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-yellow-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>

        <div className="w-1/2 bg-gray-50 flex items-center justify-center">
          <img src="bg.jpeg" alt="illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Login;
