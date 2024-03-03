import { Routes, Route } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import About from './pages/About';
import News from './pages/News';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import SingleNews from './pages/SingleNews';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='gioi-thieu' element={<About />} />
        <Route path='tin-tuc' element={<News />} />
        <Route path='tin-tuc/:id' element={<SingleNews />} />
        <Route path='chinh-sach-bao-mat' element={<Policy />} />
        <Route path='lien-he' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
