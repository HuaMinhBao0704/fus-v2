import { useContext } from 'react';

import { ScrollContext } from '../context/ScrollContextProvider';

export const useScrollContext = () => {
  return useContext(ScrollContext);
};
