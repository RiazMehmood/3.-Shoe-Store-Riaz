import {Routes, Route, Link} from 'react-router-dom';
import {Home} from './components/Home';
import {NotFound} from './components/NotFound';
import {Launch} from './components/Launch';
import {LaunchIndex} from './components/LaunchIndex';
import {LaunchShoe} from './components/LaunchShoe';
import './App.css';

export function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    
      
      </div>
  );
}

export default App;
