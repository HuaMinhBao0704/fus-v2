import { useContext } from 'react';

import { MobileMenuContext } from "../context/MobileMenuProvider";

export const useMobileMenuContext = () => { 
  return useContext(MobileMenuContext);
}