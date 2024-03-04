import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const Popup = () => {
  const [popup, setPopup] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const getPopup = async () => {
      try {
        const response = await axios.get('/action/popup');
        const data = await response.data;

        const toDate = new Date(data.todate);
        const currentDate = new Date();

        if (currentDate > toDate) {
          setPopup(null);
          setShowPopup(false);
          return;
        } else {
          setPopup(data);
          setShowPopup(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    setTimeout(() => {
      getPopup();
    }, 5000);
  }, []);

  return (
    <>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 500 }}
          transition={{ duration: 1 }}
          className='fixed right-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-fus-brand-dark/80'
        >
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 500 }}
            transition={{ duration: 1 }}
            className='relative'
          >
            <button
              className='btn btn-circle btn-ghost btn-sm absolute right-0 top-0 -m-2 cursor-pointer text-main-white hover:text-main-white/80'
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose className='h-6 w-6' />
            </button>
            {/* <img
              src={popup.img}
              alt=''
              className='h-full max-h-[480px] w-full max-w-[480px] m-5'
            /> */}
            {popup?.url ? (
              <Link to={popup.url} style={{ cursor: 'pointer' }}>
                <img
                  src={popup.img}
                  className='m-5 h-full max-h-[480px] w-full max-w-[480px]'
                  alt=''
                />
              </Link>
            ) : (
              <img
                src={popup.img}
                className='m-5 h-full max-h-[480px] w-full max-w-[480px]'
                alt=''
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Popup;
