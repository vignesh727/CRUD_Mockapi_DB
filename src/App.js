import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './js/home';
import Table from './js/table';
import Update from './js/updateTableData';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/table" element={<Table></Table>}></Route>
                  <Route path="/updateData" element={<Update></Update>}></Route>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
