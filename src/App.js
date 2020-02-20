import React from 'react';
import Navbar from './Navbar';
import Table from './Table';

function App() {
  return (
    <div style={{backgroundColor:"#eaeaea"}}>
      <Navbar />
      <div class="container z-depth-1" style={{minHeight:"700px",backgroundColor:"white",padding:"8px",marginTop:"8px"}} >
        <Table />
      </div>
    </div>
  );
}

export default App;
