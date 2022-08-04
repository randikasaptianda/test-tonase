import React from 'react';
import Logo from '../assets/Button.png';
import Panah from '../assets/Panah.png';
import './detailArticle.css';
import Share from '../assets/Share.png';
import Image1 from '../assets/Img1.png';
import Image2 from '../assets/Img2.png';
import Similar1 from '../assets/Similar1.png';
import Similar2 from '../assets/Similar2.png';
import Footer from '../components/Footer/Footer';

const DetailArticle = () => {
  return (
    <div>
      <div className="container__header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="text_logo">
          <h1>Serba Serbi</h1>
        </div>
        <div className="text_home">
          <h3>Home</h3>
        </div>
        <div className="text_article">
          <h3>Article</h3>
        </div>
      </div>
      <div className="text__tipe">
        <h5>Article</h5>
        <img src={Panah} alt="icon" />
        <p>Safe and reliable shipment of your products is our top priority</p>
      </div>
      <div className="detail__title">
        <h1>Safe and reliable shipment of your products is our top priority</h1>
      </div>
      <div className="detail__post">
        <h5>Dipost Oleh Ferdi - 12 Desember 2021 12:54 WIB</h5>
        <img src={Share} alt="icon" />
      </div>
      <div className="detail__img1">
        <img src={Image1} alt="image1" />
      </div>
      <div className="detail__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
      </div>
      <div className="detail__img2">
        <img src={Image2} alt="image2" />
      </div>
      <div className="detail__content2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis
          vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus
        </p>
      </div>
      <div className="detail__tag1">
        <h4>Tag</h4>
        <div className="tag__content1">
          <h5>#ship</h5>
          <h5>#shipping</h5>
          <h5>#world</h5>
          <h5>#business</h5>
        </div>
      </div>
      <div className="detail__tag2">
        <h4>Keyword</h4>
        <div className="tag__content2">
          <h5>ship</h5>
          <h5>safe</h5>
          <h5>priority</h5>
          <h5>shipping</h5>
          <h5>world</h5>
          <h5>business</h5>
        </div>
      </div>
      <div className="detail__similar">
        <h1>Similar</h1>
        <div className="detail__similarcontent">
          <div className="similar__content">
            <img src={Similar1} alt="similaricon" />
            <h2>Safe and reliable shipment of your products is our top priority</h2>
            <h4>12 Desember 2021</h4>
            <div className="similar__tag">
              <h5>#ship</h5>
              <h5>#shipping</h5>
              <h5>#world</h5>
              <h5>#business</h5>
            </div>
            <p>a book or other written or printed work, regarded in terms of its content rather. a book or other writt ...</p>
            <a href="#">Read More</a>
          </div>
          <div className="similar__content">
            <img src={Similar2} alt="similaricon" />
            <h2>Safe and reliable shipment of your products is our top priority</h2>
            <h4>12 Desember 2021</h4>
            <div className="similar__tag">
              <h5>#ship</h5>
              <h5>#shipping</h5>
              <h5>#world</h5>
              <h5>#business</h5>
            </div>
            <p>a book or other written or printed work, regarded in terms of its content rather. a book or other writt ...</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailArticle;
