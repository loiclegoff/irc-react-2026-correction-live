import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { RobotsList } from "./components/robot/RobotList";
import { useRobots } from "./hooks/useRobots";
import { useParts } from "./hooks/useParts";
import { useRobotParts } from "./hooks/useRobotParts";
import { PartList } from "./components/parts/PartList";
import { PartView } from "./components/parts/PartView";

function App() {
  const { robots, loading } = useRobots();
  const { parts } = useParts();

  //TODO à déplacer
  const [selectedRobot, setSelectedRobot] = useState(null);

  const { robotParts } = useRobotParts(selectedRobot, parts);

  //TODO à déplacer
  const [selectedPart, setSelectedPart] = useState(null);

  const handleRobotSelection = (robot) => {
    setSelectedRobot(robot);
    setSelectedPart(null);
  }

  return (
    <>
      <Header />
      <main>
        <RobotsList
          robots={robots}
          loading={loading}
          onRobotSelection={handleRobotSelection}
          selectedRobot={selectedRobot}
        />
        {selectedRobot && (
          <PartList
            parts={robotParts}
            onPartSelection={(p) => setSelectedPart(p)}
            selectedPart={selectedPart}
          />
        )}
        {selectedPart && (<PartView part={selectedPart} />)}
      </main>
    </>
  );
}

export default App;
