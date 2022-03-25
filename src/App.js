
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(cart);
  function openModal() {
    setIsOpen(true);
  };
  function closeModal() {
    setIsOpen(false);
  };

  
  const handaleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart)
};
  


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data));
  },[]);
  return (
    <div className="">
      <Navbar cart={cart} openModal={openModal}/>
      
     
      <div className="card-container">
      {
        guns.map((gun) =>(
          <Card key={gun.id} gunData={gun} handaleAddToCart ={handaleAddToCart}/> 
          ))
      }
      </div>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
         <div className="">
        {
          cart.map((item) =>(
            <h2 key={item.id}>{item.name}</h2>
          ))
        }
      </div>
      </Modal>
    </div>
  );
}

export default App;
