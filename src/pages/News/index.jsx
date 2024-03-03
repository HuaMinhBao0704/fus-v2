import CustomTransition from '../../components/shared/CustomTransition';
import { fakeNews } from '../../constants';
import NewsItem from './NewsItem';

const News = () => {
  return (
    <CustomTransition>
      <div className='wrapper'>
        <h1 className='my-3 text-center text-2xl font-bold text-fus-brand-dark md:text-4xl'>
          Bài viết của Fusoft
        </h1>
        <div>
          {fakeNews.map(newsItem => (
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
        </div>
      </div>
    </CustomTransition>
  );
};

export default News;
