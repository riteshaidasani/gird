import React from 'react';
import Navbar from './Navbar';
import Table from './Table';
import Sidebar from './SideBar';

function App() {
  return (
    <div style={{ backgroundColor: "#e1e1e1" }}>
      <Navbar />
      <div id={"mainPage"} class="row" >
        <Sidebar />
        <div style={{ left: "calc(100vh - 60px)" }}>
          <div id={"containerDIV"} class="container z-depth-1" style={{ minHeight: "700px", backgroundColor: "white", padding: "8px", marginTop: "8px" }} >
            <div class="row">
              <div class="col s12">
                <ul class="tabs">
                  <li class="tab col s3"><a href="#test1">Test 1</a></li>
                  <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
                  <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
                  <li class="tab col s3"><a href="#test4">Test 4</a></li>
                </ul>
              </div>
              <div id="test1" class="col s12">Test 1</div>
              <div id="test2" class="col s12">Test 2</div>
              <div id="test3" class="col s12">Test 3</div>
              <div id="test4" class="col s12">Test 4</div>
            </div>

            {/* <Table /> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
