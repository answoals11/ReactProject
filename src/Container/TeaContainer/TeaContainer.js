import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./TeaContainer.scss";
import { Header, Footer } from "../../components";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";

function TeaContainer() {
  return (
    <>
      <Header />
      <div className="TeaContainer">
      <form>
        <div className="TeaContents">
          <div className="content">
            <dt>
              <img src={img1} className="img" />
            </dt>
            <dd className="CName">말차 레모네이드 프로즌 티</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img2} className="img" />
            </dt>
            <dd className="CName">피치 젤리 아이스 티</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img3} className="img" />
            </dt>
            <dd className="CName">이스 얼 그레이 티</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img4} className="img" />
            </dt>
            <dd className="CName">아이스 돌체 블랙 밀크 티</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img5} className="img" />
            </dt>
            <dd className="CName">아이스 히비스커스 블렌드 티</dd>
          </div>
          <div className="content">
            <dt>
              <img src={img6} className="img" />
            </dt>
            <dd className="CName">아이스 라임 패션 티</dd>
          </div>
        </div>
      </form>
      </div>
      <Footer />
      
    </>
  );
}

export default TeaContainer;
