import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailArticle from './components/DetailArticle';
import Main from './components/Main';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/detail" exact element={<DetailArticle />} />
    </Routes>
  );
};

export default App;
