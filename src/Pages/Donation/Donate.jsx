// src/pages/Donate/Donate.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import qrImage from '../../assets/Logo.png'; // Your QR image

const Donate = () => {
  const easypaisaNumber = '0345-1234567'; // Replace with your real number
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(easypaisaNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-28 pb-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Support My Work ❤️
        </motion.h1>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          If you find my projects helpful or want to support me in learning and building more awesome stuff, you can donate via Easypaisa 🙌
        </motion.p>

        <motion.img
          src={qrImage}
          alt="Easypaisa QR"
          className="w-48 h-48 mx-auto mb-4 rounded-lg shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="flex items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="font-mono text-lg">{easypaisaNumber}</span>
          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </motion.div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Thanks for your kindness and support 💙
        </p>
      </div>
    </section>
  );
};

export default Donate;
