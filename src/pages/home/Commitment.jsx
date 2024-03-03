import { commitmentItems } from "../../constants";

// eslint-disable-next-line react/prop-types, no-unused-vars
const CommitmentItem = ({ image, text, desc }) => {
  return (
    <div className='collapse join-item collapse-arrow border border-base-300'>
      <input type='radio' name='my-accordion-4' defaultChecked />
      <div className='collapse-title text-xl font-medium flex items-center gap-3'>
        <img src={image} alt='' className="w-8 h-8" />
        <span>{text}</span>
      </div>
      <div className='collapse-content'>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Commitment = () => {
  return (
    <section className='commitment'>
      <div className='wrapper flex flex-col items-center'>
        <div className='w-full'>
          <p className='my-3 text-center text-base font-normal text-main-white md:text-xl'>
            Lý do lựa chọn
          </p>
          <h1 className='mb-3 text-center text-2xl font-bold text-main-white md:text-4xl'>
            Dịch vụ của Fusoft có gì tốt?
          </h1>
        </div>
        <div className='w-full md:w-[80%] xl:w-[60%] mb-3 flex-center'>
          <div className='join join-vertical w-full text-main-white'>
            {commitmentItems.map(item => (
              <CommitmentItem
                key={item.id}
                image={item.image}
                text={item.text}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
