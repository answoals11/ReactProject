import React from 'react';
import styled, { css } from 'styled-components';

const FooterContainerBackground = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 237px;
    background: #F9F9FB;
`;

const FooterTopContainer = styled.div`
    width: 80vw;
    height: 100px;
    padding: 30px 0;
    border-bottom: 1px solid #AFB1BD;
`;

const Company = styled.p`
    font-size: 16px;
    padding: 5px 0;
    font-family: Roboto, "sans-serif";
`;

const Telephone = styled.p`
    font-size: 16px;
    padding: 5px 0;
`;

const Address = styled.p`
    font-size: 16px;
    padding: 5px 0;
`;

const FooterBottomContainer = styled.div`
    width: 80vw;
    height: 100px;
    padding: 30px 0;
`;

const Copyright = styled.p`
    color: #AFB1BD;
`;

function Footer() {
    return(
        <FooterContainerBackground>
            <FooterTopContainer>
                <Company>광주 소프트웨어 마이스터 고등학교</Company>
                <Telephone>062)949-6800</Telephone>
                <Address>광주광역시 광산구 상무대로 312</Address>
            </FooterTopContainer>
        <FooterBottomContainer>
                <Copyright>Copyright 2020. `WDV` all rights reserved.</Copyright>
            </FooterBottomContainer>
        </FooterContainerBackground>
    )
}

export default Footer;