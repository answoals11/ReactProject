import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../../components";
import './CoffeeContainer.scss';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';
import img9 from './img9.jpg';

function CoffeeContainer() {
  return (
    <>
      <Header />
      <div className="CoffeeContainer">
        <form>
          <div className="CoffeeContents">
            <div className="content">
              <dt>
                <img src={img1} className="img" />
              </dt>
              <dd className="CName">에스프레소 콘 파나</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img2} className="img" />
              </dt>
              <dd className="CName">아이스 카페 아메리카노</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img3} className="img" />
              </dt>
              <dd className="CName">카라멜 마키아또</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img4} className="img" />
              </dt>
              <dd className="CName">카푸치노</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img5} className="img" />
              </dt>
              <dd className="CName">아이스 카페 라떼</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img6} className="img" />
              </dt>
              <dd className="CName">아이스 카페 모카</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img7} className="img" />
              </dt>
              <dd className="CName">자바 칩 프라푸치노</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img8} className="img" />
              </dt>
              <dd className="CName">카라멜 프라푸치노</dd>
            </div>
            <div className="content">
              <dt>
                <img src={img9} className="img" />
              </dt>
              <dd className="CName">초콜릿 크림 칩 프라푸치노</dd>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CoffeeContainer;
