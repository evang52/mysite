import Navbar from '../../reactsite/src/components/Navbar';
import Home from '../../reactsite/src/components/Pages/home';
import Blog from './components/Pages/blog';
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
       <Route path='/blog'  exact element= {<Blog/>}></Route>
       </Routes>
       </>
        
      </header>
    </div>
  );
}

export default App;
