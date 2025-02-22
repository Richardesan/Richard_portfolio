import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function ContactMe() {
  const [form, setForm] = useState({ email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-lg font-mono relative"
      >
        <p className="text-gray-400">contact@hover.dev</p>
        <h2 className="text-lg font-bold mt-2">Hey there! We're excited to link <FaEnvelope className="inline text-blue-400" /></h2>
        <hr className="border-gray-600 my-3" />
        <p className="text-gray-300">To start, could you give us <span className="text-blue-400">your email?</span></p>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="flex items-center space-x-2 text-green-400">
            <span>→ ~</span>
            <span className="text-gray-300">Enter email:</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-2 bg-transparent border-b border-gray-500 text-white text-lg focus:outline-none focus:border-blue-400"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
