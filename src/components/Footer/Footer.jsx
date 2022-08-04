import React from 'react';
import './footer.css';
import Gambar from '../../assets/Button.png';
import FB from '../../assets/FB.png';
import YT from '../../assets/YT.png';
import IG from '../../assets/IG.png';

const Footer = () => {
  return (
    <div>
      <div className="container__footer">
        <div className="content__up">
          <img src={Gambar} alt="logoImage" />
          <h1>SerbaSerbi</h1>
          <div className="content__menu">
            <h2>Menu</h2>
            <h4>Home</h4>
          </div>
          <div className="content__bantuan">
            <h2>Bantuan</h2>
            <h4>Pusat Bantuan</h4>
            <h4>Privacy Policy</h4>
          </div>
        </div>
        <div className="content__down">
          <div className="border__line"></div>
          <p>© 2022 Sislog. All Rights Reserved.</p>
          <div className="content__downicon">
            <img src={FB} alt="FBImage" />
            <img src={YT} alt="YTImage" />
            <img src={IG} alt="IGImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
