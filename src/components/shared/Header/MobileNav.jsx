import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import NavItems from './NavItems';
import CustomTransition from '../CustomTransition';
import { useMobileMenuContext } from '../../../hooks/useMobileMenuContext';

const MobileNav = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  const { setOpenMobileMenu, openMobileMenu } = useMobileMenuContext();

  return (
    <nav className='md:hidden'>
      {openMobileMenu ? (
        <MdClose
          onClick={() => setOpenMobileMenu(false)}
          className='header-menu-icon'
        />
      ) : (
        <MdMenu
          onClick={() => setOpenMobileMenu(true)}
          className='header-menu-icon'
        />
      )}
      {openMobileMenu && (
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
