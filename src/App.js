import Navbar from '../../reactsite/src/components/Navbar';
import Footer from './components/Footer';
import Home from '../../reactsite/src/components/Pages/home';
import Writing from './components/Pages/writing';
import Professional_Career from './components/Pages/professional-career';
import { Routes , Route } from 
'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <>
       <Navbar/>
       <Routes>
       <Route path='/'  exact element= {<Home/>}></Route>
       <Route path='/writing'  exact element= {<Writing/>}></Route>
       <Route path='/professional-career'  exact element= {<Professional_Career/>}></Route>
       </Routes>
       <Footer />
       </>
        
      </header>
    </div>
  );
}

export default App;
