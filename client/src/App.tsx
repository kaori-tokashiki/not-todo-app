import './App.css';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { BackgroundImage } from './components/BackgroundImage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <BackgroundImage />
    </div>
  );
}

export default App;
