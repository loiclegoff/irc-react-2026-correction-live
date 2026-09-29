import { useState } from 'react';
import { RobotList } from './components/RobotList';
import { PartList } from './components/PartList';
import { PartDetail } from './components/PartDetails';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [selectedPartIds, setSelectedPartIds] = useState([]);
  const [part, setPart] = useState(null);

  return <div className="container">
    <RobotList onSelectRobot={setSelectedPartIds} />
    <PartList partIds={selectedPartIds} setPart={setPart} />
    <PartDetail part={part}/>
  </div>
}
export default App;