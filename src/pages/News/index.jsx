import { useState , useEffect} from 'react';
import axios from 'axios';

import CustomTransition from '../../components/shared/CustomTransition';
import { fakeNews } from '../../constants';
import NewsItem from './NewsItem';

const News = () => {
  // Cal API and sort News by createDate
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await axios.get('/action/news');
        const data = await response.data;
        setNews(
          data.data.sort(
            (a, b) => new Date(b.create_date) - new Date(a.create_date)
          )
        );
      } catch (error) {
        console.log(error.message);
      }
    }

    getNews();
  }, []);

  return (
    <CustomTransition>
      <div className='w-full max-w-5xl p-5 md:px-10 lg:mx-auto xl:px-0'>
        <h1 className='my-3 text-center text-2xl font-bold text-fus-brand-dark md:text-4xl'>
          Bài viết của Fusoft
        </h1>
        <div>
          {news.map((newsItem) => (
            <NewsItem
              key={newsItem.id}
              id={newsItem.id}
              title={newsItem.title}
              createDate={newsItem.create_date}
              coverImg={newsItem.cover_img}
              view={newsItem.view}
              rating={newsItem.rating}
              comment={newsItem.comment}
              short={newsItem.short}
            />
          ))}

          {/* {fakeNews.map((newsItem) => (
            <NewsItem
              key={newsItem.id}
              id={newsItem.id}
              title={newsItem.title}
              createDate={newsItem.create_date}
              coverImg={newsItem.cover_img}
              view={newsItem.view}
              rating={newsItem.rating}
              comment={newsItem.comment}
              short={newsItem.short}
            />
          ))} */}
        </div>
      </div>
    </CustomTransition>
  );
};

export default News;
