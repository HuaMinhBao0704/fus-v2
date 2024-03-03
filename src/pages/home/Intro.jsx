import { useNavigate } from 'react-router-dom';
import { FaAngleDoubleDown } from 'react-icons/fa';

import { banner } from '../../assets';
import { useScrollContext } from '../../hooks/useScrollContext';

const Intro = () => {
  const navigate = useNavigate();
  const { handleClickScrollElement, getScrollRefByStr } = useScrollContext();

  return (
    <section className='intro flex-center flex-col'>
      <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
        <div className='order-2 flex flex-col items-center justify-center gap-1 md:order-1 md:gap-2'>
          <h1 className='intro-heading'>TỐI ƯU VẬN HÀNH</h1>
          <h1 className='intro-heading'>TỐI ĐA HIỆU QUẢ</h1>
          <p className='intro-subheading'>
            Giải pháp quản lý vận hành phòng máy chuyên nghiệp
          </p>
          <button
            className='intro-btn mt-2'
            onClick={() => navigate('lien-he')}
          >
            TRẢI NGHIỆM NGAY
          </button>
        </div>
        <img
          src={banner}
          alt='Fus Services'
          className='banner-img order-1 md:order-2'
        />
      </div>
      <button className='intro-scroll-to flex-center gap-2'>
        <FaAngleDoubleDown />
        <span
          className='font-medium uppercase'
          onClick={() =>
            handleClickScrollElement(getScrollRefByStr('moreInfo'))
          }
        >
          Tìm hiểu thêm
        </span>
        <FaAngleDoubleDown />
      </button>
    </section>
  );
};

export default Intro;
