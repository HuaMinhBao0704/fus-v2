import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import NavItems from './NavItems';
import CustomTransition from '../CustomTransition';

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='md:hidden'>
      {openMenu ? (
        <MdClose
          onClick={() => setOpenMenu(false)}
          className='header-menu-icon'
        />
      ) : (
        <MdMenu
          onClick={() => setOpenMenu(true)}
          className='header-menu-icon'
        />
      )}
      {openMenu && (
        <CustomTransition>
          <div className='mobile-nav-items'>
            <NavItems />
          </div>
        </CustomTransition>
      )}
    </nav>
  );
};

export default MobileNav;
