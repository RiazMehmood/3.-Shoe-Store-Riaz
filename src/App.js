import {Routes, Route} from 'react-router';
import {Home} from './components/Home';
import {About} from './components/About';
import {Link} from 'react-router-dom';
import {NotFound} from './components/NotFound';
import {Products} from './components/Products';
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="products">Products</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
      </div>
  );
}

export default App;
