import './styles/App.css';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { BackgroundImage } from './components/BackgroundImage';
import { useEffect } from 'react';


const axios = require('axios');
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'  
});



function App() {
  useEffect(() => {
    const res = axiosInstance.get('/')
    console.log(res)
  }, [])

  
  return (
    <div className="App">
      <NavBar />
      <Home />
      <BackgroundImage />
    </div>
  );
}

export default App;
