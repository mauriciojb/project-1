//import logo from '../public/wallpaper.jpg';
//import styled from 'styled-components';
import MenuNave from './components/nave-bar'
import Cards from './components/cards';
import HtmlFive from './components/html-5';
import './App.css';


function App() {
  return (
    <div className="container">
        <MenuNave/>
        <div className="cont-titel-principal">
          <div>
          <h1>" Ola mundo cruel ? "</h1>
          <p>Ola todos nos quando estamos aprendendo nos deparamaos com o famoso hello world <br/> para quebrar a supestiçao </p>
          </div>
        </div>
        
        <div className='texte'>
           <Cards
           titelCards='Front-end'
           titel1 ='JavaScript' 
           titel2 ='CSS-3'
           titel3 ='React-js'
           titel4 ='html-5'
           p1 ='JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível '
           p2 ='Cascading Style Sheets'
           p3 ='Fremework-javascript'
           p4 ='HyperText Markup Language'/>
        </div>
           
        <div>
          <HtmlFive/>
        </div>
        <div className="container">
          totos os direitos resevados mauriciojose.dev@gmail.com
        </div>

    </div>
  );
}

export default App;
