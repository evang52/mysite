import Navbar from '../../reactsite/src/components/Navbar';
import Home from '../../reactsite/src/components/Pages/home';
import { BrowserRouter as Router, Routes , Route, BrowserRouter } from 
'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
       <Navbar />
       <Routes>
       <Route path='/mysite/'  exact element= {<Home/>}></Route>
       </Routes>
        
       </BrowserRouter>
       </>
        
      </header>
    </div>
  );
}

export default App;
