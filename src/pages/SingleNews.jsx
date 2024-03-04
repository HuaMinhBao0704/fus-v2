import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CustomTransition from '../components/shared/CustomTransition';
import { StarRating } from './News/NewsItem';

const SingleNews = () => {
  const [newsItemHTML, setNewsItemHTML] = useState('');
  const [newsItem, setNewsItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getNewsItem() {
      try {
        const response = await axios.get(`/action/news`);
        const data = await response.data;
        // console.log(data);
        const newsItemData = data.data.find((item) => item.id === parseInt(id));

        if (newsItemData.contentType === 'text/html') {
          // ! do not use axios in this case, because it call another API endpoint
          const htmlResponse = await fetch(newsItemData.desc); // ! Change API endpoint in the production mode
          const htmlData = await htmlResponse.text();
          setNewsItemHTML(htmlData);
          setNewsItem(newsItemData);
        } else {
          setNewsItemHTML(newsItemData.desc);
          setNewsItem(newsItemData);
        }

        // console.log(newsItem);
      } catch (error) {
        console.log(error.message);
      }
    }

    getNewsItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <CustomTransition>
      <div className='single-news'>
        <div className='my-6 w-full max-w-5xl border p-10'>
          <h1 className='mb-2 text-xl font-bold text-fus-brand-dark md:text-3xl'>
            {newsItem?.title}
          </h1>
          <span className='font-medium flex items-center gap-2'>
            ĐÁNH GIÁ: <StarRating rating={newsItem?.rating} />
          </span>
          <div className='divider'></div>
          <div
            dangerouslySetInnerHTML={{ __html: newsItemHTML }}
            className='single-news-content'
          />
          <div className='divider'></div>
          <div className='my-2 flex items-center gap-2 font-medium'>
            <span>{newsItem?.comment} BÌNH LUẬN</span>
            <span>-</span>
            <span>{newsItem?.view} LƯỢT XEM</span>
          </div>
        </div>
      </div>
    </CustomTransition>
  );
};

export default SingleNews;
