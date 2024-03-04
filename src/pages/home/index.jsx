import CustomTransition from '../../components/shared/CustomTransition';
import Popup from '../../components/shared/Popup';
import Ecosystem from './Ecosystem';
import Intro from './Intro';
import MoreInfo from './MoreInfo';
import Commitment from './Commitment';
import Feedbacks from './Feedbacks';

const Home = () => {
  return (
    <CustomTransition>
      <Popup />
      <Intro />
      <MoreInfo />
      <Ecosystem />
      <Commitment />
      <Feedbacks />
    </CustomTransition>
  );
};

export default Home;
