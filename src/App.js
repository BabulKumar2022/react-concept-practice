
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';


function App() {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  },[]);
  return (
    <div className="">
      <Navbar/>
      <div className="card-container">
      {
        guns.map((gun) =>(
          <Card key={gun.id} gunData={gun}/> 
          ))
      }
      </div>
    </div>
  );
}

export default App;
