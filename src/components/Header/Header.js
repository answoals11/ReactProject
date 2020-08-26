import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components"


const HeaderContent = styled.div`
    position: fixed;
    z-index: 9999;
    top:0;
    width: 100%;
    height: 140px;
    background-color: #f6f5ef;
    color: #000000;
    font-family: Roboto, "sans-serif";
    border-bottom: 1px solid #e5e5e5;
`;

const HeaderTop = styled.div`
    text-align: center;
    padding: 20px 0px;
`;

const Logo = styled.span`
    color: #000000;
    font-size: 30px;
    font-weight: bold;

    &:hover {
        Cursor: Pointer;
    }
`;

const HeaderMiddle = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: space-around;
`;

const HeaderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 20px;
    height: 30px;
`;
 
const BetweenSpace = styled.li`
    padding: 8px 12px;
    margin: 0px 5px;
    float: left;

    &:hover {
        background-color: #BDBDBD;
        transition-duration: 0.3s;
        border-radius: 5px;
    }
`;

const ulStyle = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0px;
    margin: 0 auto;
`;

function Header() {
    return (
        <HeaderContent>
            <HeaderTop>
                <a href="/" style={{textDecoration: 'none'}}>
                    <Logo>StarBucks Cafe</Logo>
                 </a>
            </HeaderTop>
            <HeaderMiddle>
                <ulStyle>
                    <BetweenSpace>
                        <Link to="CoffeeContainer" style={{color: 'black', textDecoration: "none"}}>커피</Link>
                    </BetweenSpace>
                    <BetweenSpace>
                        <Link to="TeaContainer" style={{color: 'black', textDecoration: "none"}}>티</Link>
                    </BetweenSpace>
                    <BetweenSpace>
                        <Link to="DessertContainer" style={{color: 'black', textDecoration: "none"}}>디저트</Link>
                    </BetweenSpace>
                    <BetweenSpace>
                        <Link to="DrinkContainer" style={{color: 'wblack', textDecoration: "none"}}>음료</Link>
                    </BetweenSpace>
                </ulStyle>
            </HeaderMiddle>
            <HeaderBottom>
                <Link to="OrderContainer" style={{color: 'black', textDecoration: "none"}}>주문하기</Link>
                <Link to="Login" style={{color: 'black', textDecoration: "none"}}>로그인</Link>
            </HeaderBottom>
        </HeaderContent>
    )
}
export default Header;