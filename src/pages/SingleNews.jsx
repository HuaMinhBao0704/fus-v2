import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import CustomTransition from '../components/shared/CustomTransition';

const SingleNews = () => {
  const [newsItem, setNewsItem] = useState('');
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
          setNewsItem(htmlData);
        } else {
          setNewsItem(newsItemData.desc);
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
        <div className='wrapper'>
          <div dangerouslySetInnerHTML={{ __html: newsItem }} />
        </div>
      </div>
    </CustomTransition>
  );
};

export default SingleNews;
