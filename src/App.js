import React from 'react'
import Navbar from './Components/navbar/navbar';
import Information from './Components/information/information';
import WhatsappContact from './Components/WhatsappContact/WhatsappContact';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Information />
      <WhatsappContact />
    </React.Fragment>    
  );
}

export default App;
