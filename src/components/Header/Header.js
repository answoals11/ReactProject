import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components"


const HeaderContent = styled.div`
    width: 100%;
    height: 140px;
    background-color: #81F79F;
    color: #ffffff;
    font-family: Roboto, "sans-serif";
`;

const HeaderTop = styled.div`
    text-align: center;
    padding: 20px 0px;
`;

const Logo = styled.span`
    color: #ffffff;
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
                        <Link to="CoffeeContainer" style={{color: 'white', textDecoration: "none"}}>커피</Link>
                    </BetweenSpace>
                    <BetweenSpace>
                        <Link to="TeaContainer" style={{color: 'white', textDecoration: "none"}}>티</Link>
                    </BetweenSpace>
                    <BetweenSpace>
                        <Link to="DessertContainer" style={{color: 'white', textDecoration: "none"}}>디저트</Link>
                    </BetweenSpace>
                    <BetweenSpace>
                        <Link to="DrinkContainer" style={{color: 'white', textDecoration: "none"}}>음료</Link>
                    </BetweenSpace>
                </ulStyle>
            </HeaderMiddle>
            <HeaderBottom>
                <Link to="OrderContainer" style={{color: 'white', textDecoration: "none"}}>주문하기</Link>
                <Link to="Login" style={{color: 'white', textDecoration: "none"}}>로그인</Link>
            </HeaderBottom>
        </HeaderContent>
    )
}
export default Header;