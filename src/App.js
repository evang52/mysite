import Navbar from '../../reactsite/src/components/Navbar';
import Home from '../../reactsite/src/components/Pages/home';
import Products from './components/Pages/products';
import { BrowserRouter as Router, Routes , Route } from 
'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <>
       <Router basename={process.env.PUBLIC_URL}>
       <Navbar />
       <Routes>
       <Route path='/'  exact element= {<Home/>}></Route>
       <Route path='/products'  exact element= {<Products/>}></Route>
       </Routes>
        
       </Router>
       </>
        
      </header>
    </div>
  );
}

export default App;
