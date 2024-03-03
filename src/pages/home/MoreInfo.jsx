import { fusService, customerShowcase } from '../../assets';
import { flexingItems } from '../../constants';
import { useScrollContext } from '../../hooks/useScrollContext';

// eslint-disable-next-line react/prop-types
const FlexingItem = ({ Icon, heading, desc }) => {
  return (
    <li className='flex flex-col items-center gap-3'>
      <Icon className='h-16 w-16 md:h-24 md:w-24' />
      <h3 className='text-xl font-bold text-main-yellow md:text-2xl'>
        {heading}
      </h3>
      <p className='text-sm font-medium md:text-base'>{desc}</p>
    </li>
  );
};

const MoreInfo = () => {
  const {refs} = useScrollContext();

  return (
    <section className='more-info' ref={refs[0].ref}>
      <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
        <div className='flex justify-center'>
          <img src={fusService} alt='' className='more-info-img self-end' />
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='w-full text-center text-2xl font-bold md:text-start md:text-4xl'>
            Về Fusoft
          </h1>
          <div className='more-info-content'>
            <h2>Fusoft là gì?</h2>
            <p>
              Fusoft: Chúng tôi cung cấp giải pháp phần mềm quản lý, vận hành và
              chăm sóc phòng máy internet, icafe cyber game
            </p>
          </div>
          <div className='more-info-content'>
            <h2>Ra mắt từ bao giờ?</h2>
            <p>
              Sau nhiều năm nghiên cứu và phát triển sản phẩm, Fusoft cùng đội
              ngũ kỹ thuật viên dày dặn kinh nghiệm tự hào là đơn vị cung cấp hệ
              sinh thái phần mềm, giải pháp giúp tối ưu hóa những hạn chế trong
              quản lý phòng máy internet, icafe cyber game tại Việt Nam
            </p>
            <p>
              Với mục tiêu mang lại cho khách hàng những giải pháp, sản phẩm
              đáng tin cậy và hiệu quả cao nhất, Fusoft ngày càng được rất nhiều
              khách hàng tin tưởng và lựa chọn để phục vụ cho việc kinh doanh
            </p>
          </div>
          <div className='more-info-content'>
            <h2>Ngành nghề dịch vụ nào Fusoft đang cung cấp cho khách hàng?</h2>
            <p>
              Fusoft cung cấp giải pháp phần mềm quản lý vận hành toàn diện cho
              phòng máy: phần mềm quản lý phòng game, phần mềm cập nhật game tự
              động, giải pháp phòng game, dịch vụ phòng game...
            </p>
            <p>
              Dịch vụ chăm sóc, hỗ trợ 24/7 cho tất cả các phòng máy trên toàn
              quốc.
            </p>
          </div>
        </div>
      </div>
      <div className='wrapper flex flex-col items-center'>
        <div className='w-full md:w-[50%]'>
          <h1 className='mb-3 text-center text-2xl font-bold md:text-4xl'>
            Cung cấp sản phẩm & giải pháp phần mềm cho thị trường Icafe, Cyber
            game Việt Nam
          </h1>
          <p className='text-center text-sm font-normal md:text-base'>
            Với đội ngũ kỹ sư phần mềm giàu kinh nghiệm và hơn 200+ Kỹ thuật
            viên đối tác chuyên nghiệp hỗ trợ phòng máy 24/7, chúng tôi đáp ứng
            được những gì?
          </p>
        </div>
      </div>
      <div className='wrapper grid grid-cols-2 gap-4 md:grid-cols-4'>
        {flexingItems.map((item) => (
          <FlexingItem
            key={item.heading}
            Icon={item.Icon}
            heading={item.heading}
            desc={item.desc}
          />
        ))}
      </div>
      <div className='wrapper flex flex-col items-center'>
        <h1 className='my-5 text-center text-2xl font-bold md:text-4xl'>
          Đối tác & Khách hàng
        </h1>
        <div className='flex w-full justify-center rounded-xl border px-10 py-5 lg:w-[70%]'>
          <img src={customerShowcase} alt='' className='' />
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
