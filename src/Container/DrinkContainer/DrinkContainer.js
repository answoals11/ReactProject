import React from 'react';
import {Link} from 'react-router-dom';
import {Header, Footer} from '../../components';
import './DrinkContainer.scss';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";

function DrinkContainer() {
    return(
        <>
        <Header/>
        <div className="DrinkContainer">
      <form>
        <div className="DrinkContents">
          <div className="content">
            <dt>
              <img src={img1} className="img" />
            </dt>
            <dd className="CName">아이스 시그니처 초콜릿</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img2} className="img" />
            </dt>
            <dd className="CName">매직 윈터 트로피컬 핫 펀치</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img3} className="img" />
            </dt>
            <dd className="CName">아이스 제주 레드 빈 라떼</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img4} className="img" />
            </dt>
            <dd className="CName">아이스 제주 청보리 라떼</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img5} className="img" />
            </dt>
            <dd className="CName">제주 레드 빈 라떼</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img6} className="img" />
            </dt>
            <dd className="CName">제주 레드 빈 라떼</dd>
          </div>
        </div>
      </form>
      </div>
        <Footer/>
        </>
    )
}

export default DrinkContainer;