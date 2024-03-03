/* eslint-disable react/prop-types */

import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const StarRating = ({ rating }) => {
  // Round the rating to the nearest whole number
  const roundedRating = Math.round(rating);

  // Create an array with the length of the rounded rating
  const stars = Array.from({ length: roundedRating });

  return (
    <span>
      {/* Use map to render star icons based on the rounded rating */}
      {stars.map((_, index) => (
        <Fragment key={index}>⭐</Fragment>
      ))}
    </span>
  );
};

const NewsItem = ({
  id,
  title,
  createDate,
  coverImg,
  view,
  rating,
  comment,
  short,
}) => {
  function getDate(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('vi-VN');
  }

  return (
    <Link className='w-full max-w-5xl p-5 lg:mx-auto' to={`/tin-tuc/${id}`}>
      <div className='mb-3 flex flex-col gap-2 border md:flex-row hover:shadow-md'>
        {/* image */}
        <img src={coverImg} alt='' className='max-w-md' />
        {/* text */}
        <div className='p-2'>
          <h2 className='news-item-title'>{title}</h2>
          <p className='news-item-short'>{short}</p>
          <p className='news-item-info'>
            NGÀY ĐĂNG: <span>{getDate(createDate)}</span>
          </p>
          <p className='news-item-info'>
            LƯỢT XEM: <span>{view}</span>
          </p>
          <p className='news-item-info'>
            BÌNH LUẬN: <span>{comment}</span>
          </p>
          <p className='news-item-info'>
            ĐÁNH GIÁ: <StarRating rating={rating} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
