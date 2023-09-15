import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from '@mui/material';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList'
import Dashborad from './components/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="list" element={<TaskList/>}></Route>
        <Route path="addTask" element={<AddTask />}></Route>
        <Route path="dashboard" element={<Dashborad/>}></Route>
      </Routes>
      {/* <Login/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
