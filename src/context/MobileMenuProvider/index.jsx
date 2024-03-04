import { createContext, useState } from "react";

export const MobileMenuContext = createContext();

// eslint-disable-next-line react/prop-types
const MobileMenuProvider = ({ children }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ openMobileMenu, setOpenMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export default MobileMenuProvider;