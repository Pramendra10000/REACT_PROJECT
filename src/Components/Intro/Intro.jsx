
import React from 'react'
import './Intro.css';  
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vect1 from '../../img/Vector1.png';
import Vect2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glasses from '../../img/glassesimoji.png';
import FlotingDiv from '../FlotingDiv/FlotingDiv.jsx';


const Intro = () => {
  return (
    <div className='intro'>
       <div className="i-left">
           <div className="i-name">
            <span>Hy! I Am </span>
            <span>Pramendra Singh</span>
            <span>Full stack Developer Having 3+ Experience 
                In Insurence Domain, With Good Skills In Java|Spring MVC|Spring Boot|Servlet|Sql Server|Azure|Github|Bootstrap|React.js 
                Producting The Quality Work.
            </span>
           </div>
           <button className="button i-button">
            Hire Me</button>
            <div className="i-icons">
              <a href="https://github.com/">
                <img src={Github} alt="" />
              </a>
              <a href="https://www.linkedin.com/login">
                 <img src={LinkedIn} alt="" />
              </a>
              <a href="https://www.instagram.com/">
              <img src={Instagram} alt="" />
              </a>
                
            </div>
       </div>
       <div className="i-right">
        <img src={Vect1} alt="" />
        <img src={Vect2} alt="" />
        <img src={Boy} alt="" />
        <img src={glasses} alt="" />
        <div style={{top:'-4%',left:'68%'}}>
          <FlotingDiv image={Crown} txt1='Software' txt2='Developer'/>
        </div>
        <div style={{top:'18rem',left: '0rem'}}>
          <FlotingDiv image={thumbup} txt1='Best Performce' txt2='Award'/>
        </div>

        {/*blur div */}
        <div className="blur" 
        style={{background:"rgb(238 210 255)"}}></div>
       <div className="blur" 
       style={{background:'#54e0dc' ,top:'17rem',
       width:'21rem',height:'11rem',left:'-9rem'}}></div>
       
       </div>
    </div>
  )
}

export default Intro

