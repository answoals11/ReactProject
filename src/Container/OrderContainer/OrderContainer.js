import React from 'react';
import { Header, Footer } from '../../components';
import './Order.scss';
import ex1 from './ex1.jpg';
import ex2 from './ex2.jpg';
import ex3 from './ex3.jpg';
import ex4 from './ex4.jpg';
import ex5 from './ex5.jpg';
import ex6 from './ex6.jpg';

function OrderContainer() {

    return(
        <>
        <Header/>
            <div className="OrderContainer">
                <div className="OrderHeader">
                    <a className="SelectLabel">상품 선택</a>
                    <form>
                        <input type="text" className="form__field"/>
                        <button type="button" className="btn btn--primary btn--inside uppercase">검색</button>
                    </form>
                </div>
                <form>
                    <div className="OrderContents">
                         <div className="content">
                               <dt>
                                <img src={ex1} className="img"/>
                              </dt>
                                <dd className="CName">에스프레소 콘 파나</dd>
                        </div>
                        <div className="content">
                               <dt>
                                <img src={ex2} className="img"/>
                              </dt>
                                <dd className="CName">아이스 아메리카노</dd>
                        </div>
                        <div className="content">
                               <dt>
                                <img src={ex3} className="img"/>
                              </dt>
                                <dd className="CName">아이스 카페라떼</dd>
                        </div>
                        <div className="content">
                               <dt>
                                <img src={ex4} className="img"/>
                              </dt>
                                <dd className="CName">에스프레소</dd>
                        </div>
                        <div className="content">
                               <dt>
                                <img src={ex5} className="img"/>
                              </dt>
                                <dd className="CName">아이스 시그니처 초콜릿</dd>
                        </div>
                        <div className="content">
                               <dt>
                                <img src={ex6} className="img"/>
                              </dt>
                                <dd className="CName">피치 젤리 아이스티</dd>
                        </div>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    )
}

export default OrderContainer;