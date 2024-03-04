import { Link } from 'react-router-dom';

import { headerLinks } from '../../../constants';
import { useScrollContext } from '../../../hooks/useScrollContext';
import { useMobileMenuContext } from '../../../hooks/useMobileMenuContext';

const NavItems = () => {
  const { handleClickScrollElement, getScrollRefByStr } = useScrollContext();
  const { setOpenMobileMenu } = useMobileMenuContext();

  return (
    <ul className='nav-items'>
      {headerLinks.map((link) => {
        return (
          <li key={link.label} className='nav-item'>
            {link.route ? (
              <Link to={link.route} onClick={() => setOpenMobileMenu(false)}>
                {link.label}
              </Link>
            ) : (
              <p
                onClick={() => {
                  setOpenMobileMenu(false);
                  handleClickScrollElement(getScrollRefByStr(link.scroll_to));
                }}
              >
                {link.label}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
