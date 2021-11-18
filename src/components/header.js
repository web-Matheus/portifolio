import React from "react";
import instagram from './icons/instagram.png'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import myfoto from './icons/my-foto.jpg'
import weather from   './icons/weather.png'
import  './css_components/header_css.css'
import landing from './icons/landing.png'
import paste from './icons/paste.png'
export default function header(){
    return(
        <>
        <header>
            <h1>M.</h1>
            <div>
                <a href="#about"><span>01.</span>About</a>
                <a href="#work"><span>02.</span>Work</a>
                <a href="#contact"><span>03.</span>Contact</a>
                <a href="https://drive.google.com/file/d/1krTp-H2Vsu1Jc2Rb96EVNrgRtU5hxZI2/view?usp=sharing"><button className="resume">Resume</button></a>
            </div>
        </header>
        <main>
                <span className="my-name">Hi, my name is </span>
                <h1>Matheus santos.</h1>
                <h1 className="h1">Front-end developer</h1>
                <p>Eu sou FRONT-END developer buscando sempre construir algo.
                Atualmente focado em estudar UX designer e TESTES DE SOFTWARE.
                </p>
                <div>
                    <a href="https://www.instagram.com/m2t_santos/?hl=pt-br"><img src={instagram} alt="instagram'"/></a>
                   <a href="https://github.com/web-Matheus"><img src={github} alt="instagram'"/></a>
                   <a href="https://www.linkedin.com/in/matheus-santos-67301020b/"><img src={linkedin} alt="instagram'"/></a>
                </div>
            </main>
            
            <h2 className="title-section" id="about"><span>01.</span> About me</h2>

            <section className="about_me">
                   <div>
                   <p>Hi, meu nome é Matheus santos e curto coisa relacionada a tecnologia.Mas, falando em desenvolvimento web, desenvolvo site desde 2019 em HTML,CSS  e um pouco de JAVASCRIPT,
                    porém comecei a levar a sério como uma forma de trabalho em meados de 2020  foi onde comecei a aprender REACTJS e como a web funciona.Atualmente estou cursando ANÁLISE E 
                    DESENVOLVIMENTO DE SISTEMAS , estou focado em aprender UI/UX e TESTES DE SOFTWARE.Nas horas vagas estudo um pouco de segurança web</p>
                    <p>Algumas das tecnologias que estou usando recentemente:</p>
                            <ul>
                                <li>JAVASCRIPT (ES6+)</li>
                                <li>REACTJS</li>
                                <li>Jest</li>
                                <li>Cypress</li>
                            </ul>
                   </div>
                <img src={myfoto} alt="matheus foto"/>
            </section>
            <h2 className="title-section" id="work"><span>02.</span> Work</h2>
            <section className="work" >
                <img  src={weather} alt="weather foto"/>
                <div>
                    <h3>Weather</h3>
                    <p>Um simples projeto com manipulaçao de
                     dados de uma Api.<br/>
                     <em>Javascript,</em> <em>Css</em>   ,<a href="https://console.hgbrasil.com
                     /documentation/weather">API</a>
                    </p>
                    
                </div>
                
            </section>
            <section className="work-2">
            <img  src={landing} alt="weather foto"/>
                <div>
                    <h3>landing page</h3>
                    <p>Uma landing page.<br/>
                     <em>Javascript,</em> <em>Sass</em>
                    </p></div>
            </section>
            <h2 className="outros-h2"><span>02.</span>Outros projetos</h2>
           <section className="outros">
                <div>
                <a href="https://github.com/web-Matheus/mesha"> <img src={paste} alt="paste"/></a>
                    <h3>Clima</h3>
                    <p>Consultando as condições climáticas de qualquer cidade</p>
                    <ul>
                        <li>Reactjs</li>
                        <li>Styled-components</li>
                    </ul>

                </div>
                <div>
                   <a href="https://github.com/web-Matheus/breakingbad-API"> <img src={paste} alt="paste"/></a>
                    <h3>Breakingbad </h3>
                    <p>Usando uma Api para construção de um site</p>
                    <ul>
                        <li>Reactjs</li>
                        <li>Css</li>
                    </ul>

                </div>
                <div>
                <a href="https://github.com/web-Matheus/Finance"> <img src={paste} alt="paste"/></a>
                    <h3>Finanças</h3>
                    <p>Consultando uma api de finanças, que retorna um tempo real o valor das principais moedas</p>
                    <ul>
                        <li>Reactjs</li>
                        <li>Css</li>
                    </ul>

                </div>
                <div>
                <a href="https://github.com/web-Matheus/blog"> <img src={paste} alt="paste"/></a>
                    <h3>Blog</h3>
                    <p>Um dos primeiros projetos que subi para o meu github</p>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                    </ul>

                </div>
           </section>
           <h2 className="outros-h2" id="contact"><span>03.</span>Contact</h2>
           <section className="contato">
               <p>Estou sempre aberto a novas oportunidades!Vamos bater um papo?</p>
               <div>
                   <a href="https://www.linkedin.com/in/matheus-santos-67301020b/"><button>Msg</button></a>
                </div>
           </section>
        </>
    )
}