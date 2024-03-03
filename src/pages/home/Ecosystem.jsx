import { Link } from 'react-router-dom';
import { ecosystemProducts } from '../../constants';
import { useScrollContext } from '../../hooks/useScrollContext';

// eslint-disable-next-line no-unused-vars, react/prop-types
const EcosystemProduct = ({ image, name, desc, linkToOutside, link }) => {
  return (
    <div className='card card-compact w-full bg-base-100 shadow-xl md:w-56 xl:w-72'>
      <figure>
        <img src={image} alt={name} className='w-full h-auto' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-base text-fus-brand-dark md:text-lg'>
          {name}
        </h2>
        <p className='text-sm text-fus-brand-dark md:text-base'>{desc}</p>
        <div className='card-actions justify-end'>
          <button className='btn bg-fus-brand text-main-white hover:bg-fus-brand/70'>
            {linkToOutside ? (
              <a href={link} target='_blank' rel='noreferrer'>
                Xem thêm
              </a>
            ) : (
              <Link to={link}>Liên hệ</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Ecosystem = () => {
  const {refs} = useScrollContext();

  return (
    <section className='ecosystem' ref={refs[1].ref}>
      <div className='wrapper flex flex-col items-center'>
        <div className='w-full'>
          <h1 className='ecosystem-title'>
            Hệ sinh thái sản phẩm chuyên biệt cho phòng game
          </h1>
          <p className='ecosystem-subtitle'>
            Fusoft cung cấp giải pháp hoàn chỉnh cho việc kinh doanh phòng game
            với đầy đủ dãy sản phẩm chuyên biệt và dịch vụ chăm sóc khách hàng
            tối ưu
          </p>
        </div>
        <div className='wrapper flex-center'>
          <div className='ecosystem-products'>
            {ecosystemProducts.map((product) => (
              <EcosystemProduct
                key={product.id}
                image={product.image}
                name={product.name}
                desc={product.desc}
                linkToOutside={product.linkToOutside}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
