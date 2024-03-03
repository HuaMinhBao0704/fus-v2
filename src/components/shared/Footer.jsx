import { Link } from 'react-router-dom';
import { fusLogo } from '../../assets';
import { useScrollContext } from '../../hooks/useScrollContext';

const Footer = () => {
  const { handleClickScrollElement } = useScrollContext();

  return (
    <div className='bg-gray-100 text-black'>
      <div className='wrapper'>
        <footer className='footer p-10'>
          <aside>
            <img src={fusLogo} alt='' className='mb-2 max-w-48' />
            <p className='w-full font-bold md:w-[60%]'>
              CÔNG TY CỔ PHẦN CÔNG NGHỆ FUS
            </p>
            <p className='w-full font-medium md:w-[60%]'>
              Tầng 5, 144-146 Nguyễn Thái Bình, Phường Nguyễn Thái Bình, Quận 1,
              Tp. Hồ Chí Minh
            </p>
            <p className='font-medium'>
              ĐƯỜNG DÂY NÓNG: <span className='font-bold'>028 2200 0113</span>
            </p>
            <p className='font-medium'>
              HỘP THƯ:{' '}
              <span className='font-bold underline'>
                <a href='mailto:info@fusoft.vn'>info@fusoft.vn</a>
              </span>
            </p>
            <p className='font-medium'>
              HỖ TRỢ TRỰC TUYẾN:{' '}
              <span className='font-bold'>07h - 22h hàng ngày</span>
            </p>
          </aside>
          <nav>
            <h6 className='footer-title text-black opacity-[1]'>ĐIỀU HƯỚNG</h6>
            <Link
              className='link-hover link'
              to={'/'}
              onClick={() => handleClickScrollElement(null, true)}
            >
              Trang chủ
            </Link>
            <Link className='link-hover link' to={'/chinh-sach-bao-mat'}>
              Chính sách bảo mật
            </Link>
            <Link className='link-hover link' to={'/lien-he'}>
              Liên hệ
            </Link>
          </nav>
          <nav>
            <h6 className='footer-title text-black opacity-[1]'>
              SẢN PHẨM & DỊCH VỤ
            </h6>
            <p>Fusoft</p>
            <p>Fumeli</p>
            <p>Fnet</p>
            <p>FFood</p>
            <p>OEG - Esport</p>
            <p>Online Support</p>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
