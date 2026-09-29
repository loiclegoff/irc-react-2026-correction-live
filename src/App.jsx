import { useState } from 'react';
import { RobotList } from './components/RobotList';
import { PartList } from './components/PartList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedPartIds, setSelectedPartIds] = useState([]);

  return <div className="container">
    <RobotList onSelectRobot={setSelectedPartIds} />
    <PartList partIds={selectedPartIds} />
  </div>
}
export default App;