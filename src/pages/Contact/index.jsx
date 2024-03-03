import CustomTransition from '../../components/shared/CustomTransition';
import LeadForm from './LeadForm';

const Contact = () => {
  return (
    <CustomTransition>
      <div className='wrapper'>
        <h1 className='my-3 text-center text-2xl font-bold text-fus-brand-dark md:text-4xl'>
          Liên hệ đến Fusoft
        </h1>
        <div className='grid w-full max-w-5xl grid-cols-1 gap-5 p-5 md:grid-cols-2 md:px-10 lg:mx-auto xl:px-0 2xl:gap-0'>
          {/* Contact info */}
          <div className='contact-info'>
            <h2 className='text-xl font-bold text-fus-brand-dark'>
              Thông tin liên hệ
            </h2>
            <h3 className='text-md font-medium text-fus-brand-dark'>
              CÔNG TY CỔ PHẦN CÔNG NGHỆ FUS
            </h3>
            <p className='w-full lg:w-[60%] text-fus-brand-dark'>
              Tầng 5, 144-146 Nguyễn Thái Bình, Phường Nguyễn Thái Bình, Quận 1,
              Tp. Hồ Chí Minh
            </p>
            <p className='font-medium'>Hotline : 028.2200.0113</p>
            <p>
              Email:{' '}
              <a
                className='font-medium hover:underline'
                href='mailto:info@fusoft.vn'
              >
                info@fusoft.vn
              </a>
            </p>
          </div>

          {/* Lead Form */}
          <LeadForm />
        </div>
        <div className='flex w-full max-w-5xl flex-col items-center p-5 md:px-10 lg:mx-auto xl:px-0'>
          <h2 className='mb-2 text-xl font-bold text-fus-brand-dark'>
            Văn phòng Fusoft
          </h2>
          <h3 className='text-md mb-2 font-medium text-fus-brand-dark'>
            Tầng 5, tòa nhà 144-146 Nguyễn Thái Bình, Phường Nguyễn Thái Bình,
            Quận 1, Tp. Hồ Chí Minh
          </h3>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.563398643643!2d106.69562037480468!3d10.768092789380205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3fdcdbbcab%3A0xc15e4bcaf5100bfc!2zMTQ0IMSQLiBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUGjGsOG7nW5nIE5ndXnhu4VuIFRow6FpIELDrG5oLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1705388274781!5m2!1sen!2s'
            referrerPolicy='no-referrer-when-downgrade'
            className='mb-2 h-96 w-full md:h-96 md:w-full lg:w-full xl:w-full 2xl:w-full'
          />
        </div>
      </div>
    </CustomTransition>
  );
};

export default Contact;
