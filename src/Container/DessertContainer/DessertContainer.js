import React from 'react';
import {Link} from 'react-router-dom';
import './DessertContainer.scss';
import {Header, Footer} from '../../components';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";

function DessertContainer() {
    return(
        <>
        <Header/>
        <div className="TeaContainer">
      <form>
        <div className="TeaContents">
          <div className="content">
            <dt>
              <img src={img1} className="img" />
            </dt>
            <dd className="CName">뺑 오 쇼콜라</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img2} className="img" />
            </dt>
            <dd className="CName">프렌치 크루아상</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img3} className="img" />
            </dt>
            <dd className="CName">초콜릿 카라멜팅 케이크</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img4} className="img" />
            </dt>
            <dd className="CName">파인 땡큐 샌드위치</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img5} className="img" />
            </dt>
            <dd className="CName">트러플 머쉬룸 수프</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img6} className="img" />
            </dt>
            <dd className="CName">넛츠 초콜릿 아포가토</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img7} className="img" />
            </dt>
            <dd className="CName">자바 칩 바닐라 아포가토</dd>
          </div>
        </div>
      </form>
      </div>
        <Footer/>
        </>
    )
}

export default DessertContainer;