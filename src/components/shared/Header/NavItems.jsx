import { Link } from 'react-router-dom';

import { headerLinks } from '../../../constants';
import { useScrollContext } from '../../../hooks/useScrollContext';

const NavItems = () => {
  const { handleClickScrollElement, getScrollRefByStr } = useScrollContext();

  return (
    <ul className='nav-items'>
      {headerLinks.map((link) => {
        return (
          <li key={link.label} className='nav-item'>
            {link.route ? (
              <Link to={link.route}>{link.label}</Link>
            ) : (
              <p
                onClick={() =>
                  handleClickScrollElement(getScrollRefByStr(link.scroll_to))
                }
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
