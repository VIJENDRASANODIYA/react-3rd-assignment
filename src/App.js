// import logo from './logo.svg';
import './App.css';
import Header from './compnent/Header';
import Experience from './compnent/Experience';
import About from './compnent/About';
import Skill from './compnent/Skills';
import Hobbies from './compnent/Hobbies';

function App() {
  return (
  
    <div className='HoleDiv'>
    
      <Header ></Header>
      <Experience></Experience>
      <About></About>
      <Skill></Skill>
      <Hobbies></Hobbies>
    </div>
  );
}

export default App;
