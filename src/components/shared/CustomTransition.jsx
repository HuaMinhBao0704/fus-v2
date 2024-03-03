import { useEffect } from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function CustomTransition({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 3 }}
    >
      {children}
    </motion.div>
  );
}
