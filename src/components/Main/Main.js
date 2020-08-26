import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import bgSummer from './20_summer_rwanda_bg.jpg';
import summer3 from './summer3_mv_bg.jpg';
import drink1 from './drink1.png';
import drink2 from './drink2.png';
import drink3 from './drink3.png';
import drink1name from './drink1name.png';
import drink2name from './drink2name.png';
import drink3name from './drink3name.png';
import img1 from './img1.png';
import rwanda from './rwanda.png';
import explain from './explain.PNG';

function Main() {
    
  return (
    <div className="MainContainer" onScroll={ handleScroll }>
        <img src={ summer3 } id="parentImg"/>

        <img src={ img1 } className="intro"/>
        <img src={ drink1 } className="drink1"/>
        <img src={ drink2 } className="drink2"/>
        <img src={ drink3 } className="drink3"/>
        
        <img src={ drink1name } className="drink1name"/>
        <img src={ drink2name } className="drink2name"/>
        <img src={ drink3name } className="drink3name"/>

        <div className="btSpace"/>

        <div className="parentImg2">
            <img src={ rwanda } className="rwanda" id="up_on_scroll"/>
            <img src={ explain } className="explain" id="side_up_on_scroll"/>
        </div>
        
    </div>
  );
}

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}
  
function handleScroll() {
    const elems = document.querySelectorAll('#up_on_scroll');
    const elems2 = document.querySelectorAll('#side_up_on_scroll');

    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -10)) {
        elem.style.transform = 'translateX(-700px)';
      } else {
        elem.style.transform = 'translateX(400px)';
      }
    })

    elems2.forEach(elem => {
      if (isElementUnderBottom(elem, -30)) {
        elem.style.transform = 'translateX(0px)';
      } else {
        elem.style.transform = 'translateX(-800px)';
      }
    })

  }
  
window.addEventListener('scroll', handleScroll);

export default Main;