import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import axios from 'axios';
import './main.css';
import Footer from './Footer/Footer';
import LogoSearch from '../assets/Search.png';
import { Circles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Pagination from './Feature/Pagination/Pagination';

const Main = () => {
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState('Apple&from=2022-07-17&sortBy=popularity');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    getNews();
  }, [keyword]);

  const getNews = async () => {
    setLoading(true);
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=8397781c82554c838ec1d8111311a6be`);
    setNews(res.data.articles);
    setLoading(false);
    console.log(res.data.articles);
  };

  // fungsi untuk limit str in descriptsi
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <header>
        <Header />
        <div className="feature__search">
          <div className="container__search">
            <img src={LogoSearch} alt="logoSearch" />
            <input onChange={(e) => setKeyword(e.target.value)} type="text" placeholder="Cari" />
          </div>
        </div>
      </header>
      <div>
        {loading ? (
          <div style={style}>
            <Circles color="#b5c1ed" />
          </div>
        ) : (
          <article>
            {currentPosts.map((item) => {
              return (
                <div key={item.id} className="container__content">
                  <img src={item.urlToImage} alt="imageContent" />
                  <h2>{truncate(item.title, 90)}</h2>
                  <h4>{item.publishedAt}</h4>
                  <div className="tag__content">
                    <h5>#ship</h5>
                    <h5>#shipping</h5>
                    <h5>#world</h5>
                    <h5>#business</h5>
                  </div>
                  <p>{truncate(item.description, 100)}</p>
                  <Link to={'/detail'} target="_blank">
                    Read More
                  </Link>
                </div>
              );
            })}
          </article>
        )}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={news.length} paginate={paginate} />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
