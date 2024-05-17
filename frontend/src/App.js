import './App.css';
import NavBar from './components/navbar';
import Core from './pages/Core.js';
import CreateItem from './pages/Create';
import { Route, Routes } from 'react-router-dom'
import UpdateViewData from './pages/Update';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Core />} />
        <Route path='/adicionar-item' element={<CreateItem />}/>
        <Route path='/carro/:id' element={<UpdateViewData />}/>
        <Route path='/' element={<CreateItem />}/>
      </Routes>
    </>
  );
}

export default App;
