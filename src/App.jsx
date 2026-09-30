import { useState } from 'react';
import { RobotList } from './components/RobotList';
import { PartList } from './components/PartList';
import { PartDetail } from './components/PartDetails';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return <div className="container">
    <RobotList />
    <PartList />
    <PartDetail />
  </div>
}
export default App;