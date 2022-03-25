
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
function App() {
  const [guns, setGuns] = useState([]);
  console.log(guns);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  },[]);
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
