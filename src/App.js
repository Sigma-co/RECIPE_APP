import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import AddRecipe from './component/AddRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/AddRecipe" element={<AddRecipe/>}/> 
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
