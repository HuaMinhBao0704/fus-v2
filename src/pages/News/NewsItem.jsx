/* eslint-disable react/prop-types */

import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const StarRating = ({ rating }) => {
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
    <Link
      className='max-h-[50vh] min-w-full max-w-5xl p-5'
      to={`/tin-tuc/${id}`}
    >
      <div className='mb-3 flex w-full flex-col gap-2 border hover:shadow-md md:flex-row'>
        {/* image */}
        <img src={coverImg} alt='' className='min-h-48 max-h-96 max-w-full md:max-w-[50%]' />
        {/* text */}
        <div className='md:w-full p-2 flex flex-col'>
          <div className='flex-1'>
            <p className='news-item-info my-2 text-gray-500'>
              {getDate(createDate)}
            </p>
            <h2 className='news-item-title'>{title}</h2>
            <p className='news-item-info mb-2'>
              ĐÁNH GIÁ: <StarRating rating={rating} />
            </p>
            <p className='news-item-short'>{short}</p>
          </div>
          <div className='divider'></div>
          <div className='flex items-center gap-4 w-full'>
            <p className='news-item-info'>
              LƯỢT XEM: <span>{view}</span>
            </p>
            <p className='news-item-info'>
              BÌNH LUẬN: <span>{comment}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
