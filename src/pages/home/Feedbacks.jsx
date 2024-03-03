import { feedbacks } from '../../constants';

// eslint-disable-next-line react/prop-types
const FeedbackItem = ({ image, text, desc, isEvenIdx }) => {
  return (
    <div className='hero'>
      <div
        className={`hero-content flex-col ${isEvenIdx ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      >
        <img src={image} className='max-w-48 rounded-full shadow-2xl' />
        <div>
          <h1 className='mb-2 text-center text-lg font-bold text-fus-brand-dark lg:text-xl lg:text-start'>
            {text}
          </h1>
          <p className='mb-2 text-sm md:text-base'>{desc}</p>
          <p className='mb-2 text-sm md:text-base'>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <section className='feedbacks'>
      <div className='wrapper'>
        <h1 className='my-3 text-center text-2xl font-bold text-fus-brand-dark md:text-4xl'>
          Khách hàng nói gì về chúng tôi
        </h1>
        <div>
          {feedbacks.map((feedback, idx) => (
            <FeedbackItem
              key={feedback.id}
              image={feedback.image}
              text={feedback.text}
              desc={feedback.desc}
              isEvenIdx={idx % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
