import { createContext, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const ScrollContext = createContext();

// eslint-disable-next-line react/prop-types
const ScrollProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const refs = [
    { scrollTo: 'moreInfo', ref: useRef() },
    { scrollTo: 'ecosystem', ref: useRef() },
    { scrollTo: 'commitment', ref: useRef() },
    { scrollTo: 'feedbacks', ref: useRef() },
  ];

  const getScrollRefByStr = (scrollToEl) => {
    return refs.find((ref) => ref.scrollTo === scrollToEl).ref;
  }

  // Scroll to specific position
  const handleScroll = (elRef) => {
    const el = elRef.current;
    const headerHeight = document.querySelector('header').offsetHeight;

    window.scrollTo({
      behavior: 'smooth',
      top: el.offsetTop - headerHeight, 
    });
  };

  // Handle click on header links
  const handleClickScrollElement = async (elRef = null, scrollToTop = false) => {
    const navigateToHomePage = async () => {
      if (location.pathname !== '/') {
        await navigate('/');
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    const handleScrollAction = () => {
      if (scrollToTop) {
        window.scrollTo(0, 0);
      } else {
        handleScroll(elRef);
      }
    };

    await navigateToHomePage();
    handleScrollAction();
  };

  return (
    <ScrollContext.Provider
      value={{
        handleClickScrollElement,
        handleScroll,
        getScrollRefByStr,
        refs,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
