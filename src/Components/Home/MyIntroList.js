import React from "react";
import { motion } from "framer-motion";
function MyIntroList({ data, index,rotate }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: 50 }}
      animate={{ rotate:rotate, opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.1 * index }}
      whileHover={{ scale: 0.9, transition: { duration: 0.1 } }}
    >
      {data}
    </motion.h2>
  );
}

export default MyIntroList;
