import { fusLogo } from '../../../assets';
import MobileNav from './MobileNav';
import NavItems from './NavItems';
import { useScrollContext } from '../../../hooks/useScrollContext';

const Header = () => {
  const { handleClickScrollElement } = useScrollContext();

  return (
    <header className='header flex-center border-b'>
      <div className='wrapper flex-between'>
        <img
          src={fusLogo}
          alt='Fus Logo'
          className='header-logo'
          onClick={() => handleClickScrollElement(null, true)}
        />
        <nav className='md:flex-between hidden w-full max-w-xs'>
          <NavItems />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
